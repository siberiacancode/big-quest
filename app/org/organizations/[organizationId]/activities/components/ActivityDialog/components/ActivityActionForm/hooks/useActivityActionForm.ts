import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';

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

  const defaultValues = {
    name: activity?.name ?? '',
    description: activity?.description ?? '',
    ageLimit: { min: activity?.ageLimit[0] ?? 7, max: activity?.ageLimit[1] ?? 14 },
    duration: 120,
    price: activity?.duration ?? 720,
    replay: activity?.replay ?? false,
    status: activity?.status ?? 'DRAFT',
    category: activity?.category ?? ''
  };

  const activityForm = useForm<ActivityActionSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(activityActionSchema),
    defaultValues
  });

  const postActivityActionMutation = usePostActivityActionMutation();

  const onSubmit = activityForm.handleSubmit(async (values) => {
    console.log('went to submit');
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
      isLoading: postActivityActionMutation.isPending
    },
    form: activityForm,
    functions: { onSubmit, setIsCategoryOpen, setIsStatusOpen }
  };
};
