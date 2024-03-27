import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';

import { useGetActivityByIdQuery } from '@/utils/api/hooks/useGetActivityByIdQuery';
import { useGetCategoryQuery } from '@/utils/api/hooks/useGetCategoryQuery';
import { usePutFilesByIdMutation } from '@/utils/api/hooks/usePutFilesByIdMutation';

import type { ActivityActionType } from '../../../constants/types';
import type { ActivityActionSchema } from '../constants/activityActionSchema';
import { activityActionSchema } from '../constants/activityActionSchema';

import { usePostActivityActionMutation } from './usePostActivityActionMutation';

interface UseActivityActionFormParams {
  onAction: () => void;
  onEdit: (props: ActivityActionType) => void;
  actionType: Exclude<ActivityActionType, 'info'>;
  activity?: ActivityResponse;
  files: File[] | FilesDto[];
  externalActionType: ActivityActionType;
}

export const useActivityActionForm = ({
  onAction,
  onEdit,
  actionType,
  activity,
  files,
  externalActionType
}: UseActivityActionFormParams) => {
  const router = useRouter();
  const params = useParams<{ organizationId: string }>();
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const [isStatusOpen, setIsStatusOpen] = React.useState(false);

  const getCategoryQuery = useGetCategoryQuery();
  // на submit добавить еще запрос отправки медиа
  const getActivityByIdQuery = useGetActivityByIdQuery({
    id: activity?.id ?? '1'
  });

  // activity ???????
  const defaultValues = {
    name: activity?.name ?? '',
    description: activity?.description ?? '',
    ageLimit: {
      min: activity?.ageLimit[0] ?? 7,
      max: activity?.ageLimit[1] ?? 14
    },
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
  const putFilesByIdMutation = usePutFilesByIdMutation();

  const onSubmit = activityForm.handleSubmit(async (values) => {
    const requestParams = {
      ...values,
      ageLimit: [values?.ageLimit?.min, values.ageLimit?.max],
      organizationId: params.organizationId
    };

    if (actionType === 'add') {
      const postActivityActionParams = {
        params: { ...requestParams, files: files as File[] },
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
      files.map(async (file) => {
        const putFilesByIdParams = {
          params: {
            file,
            id: file.id
          }
        } as const;

        await putFilesByIdMutation.mutateAsync(putFilesByIdParams);
      });
    }

    router.refresh();

    if (externalActionType === 'info') {
      onEdit('info');
    }

    onAction();
  });

  return {
    state: {
      categoryValues: getCategoryQuery.data,
      isCategoryOpen,
      isStatusOpen,
      isLoading: postActivityActionMutation.isPending,
      media: activity?.media,
      activity: getActivityByIdQuery.data
    },
    form: activityForm,
    functions: { onSubmit, setIsCategoryOpen, setIsStatusOpen }
  };
};
