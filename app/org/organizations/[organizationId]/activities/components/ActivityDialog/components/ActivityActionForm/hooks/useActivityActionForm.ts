import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';

import { useGetActivityByIdQuery } from '@/utils/api/hooks/useGetActivityByIdQuery';
import { useGetActivityMediaByIdQuery } from '@/utils/api/hooks/useGetActivityMediaByIdQuery';
import { useGetCategoryQuery } from '@/utils/api/hooks/useGetCategoryQuery';

import type { ActivityActionType } from '../../../constants/types';
import type { ActivityActionSchema } from '../constants/activityActionSchema';
import { activityActionSchema } from '../constants/activityActionSchema';

import { usePostActivityActionMutation } from './usePostActivityActionMutation';

interface UseActivityActionFormParams {
  onAction: () => void;
  setActionType: (props: ActivityActionType) => void;
  actionType: Exclude<ActivityActionType, 'info'>;
  activity?: ActivityResponse;
  externalActionType: ActivityActionType;
}

export const useActivityActionForm = ({
  onAction,
  setActionType,
  actionType,
  activity,
  externalActionType
}: UseActivityActionFormParams) => {
  const router = useRouter();
  const params = useParams<{ organizationId: string }>();
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const [isStatusOpen, setIsStatusOpen] = React.useState(false);

  const getCategoryQuery = useGetCategoryQuery();
  // на submit добавить еще запрос отправки медиа
  const getActivityByIdResponse = useGetActivityByIdQuery({
    id: activity?.id ?? '1'
  });

  const getActivityMediaByIdResponse = useGetActivityMediaByIdQuery({ id: activity?.id ?? '1' });

  const activityData = getActivityByIdResponse.data;

  const defaultValues = {
    name: activityData?.name ?? '',
    description: activityData?.description ?? '',
    ageLimit: { min: activityData?.ageLimit[0] ?? 7, max: activityData?.ageLimit[1] ?? 14 },
    duration: 120,
    price: activityData?.duration ?? 720,
    replay: activityData?.replay ?? false,
    status: activityData?.status ?? 'DRAFT',
    category: activityData?.category ?? ''
  };

  const activityForm = useForm<ActivityActionSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(activityActionSchema),
    defaultValues
  });

  const postActivityActionMutation = usePostActivityActionMutation();

  const onSubmit = activityForm.handleSubmit(async (values) => {
    const requestParams = {
      ...values,
      ageLimit: [values?.ageLimit?.min, values.ageLimit?.max],
      organizationId: params.organizationId
    };

    if (actionType === 'add') {
      const postActivityActionParams = {
        params: requestParams,
        action: actionType
      } as const;

      await postActivityActionMutation.mutateAsync(postActivityActionParams);
    }

    if (actionType === 'edit') {
      const postActivityActionParams = {
        params: {
          ...requestParams,
          id: activity!.id
        },
        action: 'edit'
      } as const;

      await postActivityActionMutation.mutateAsync(postActivityActionParams);
    }

    router.refresh();

    if (externalActionType === 'info') {
      setActionType('info');
    }

    onAction();
  });

  return {
    state: {
      categoryValues: getCategoryQuery.data,
      isCategoryOpen,
      isStatusOpen,
      isLoading: postActivityActionMutation.isPending,
      activityMediaData: getActivityMediaByIdResponse.data,
      activityData: getActivityByIdResponse.data
    },
    form: activityForm,
    functions: { onSubmit, setIsCategoryOpen, setIsStatusOpen }
  };
};
