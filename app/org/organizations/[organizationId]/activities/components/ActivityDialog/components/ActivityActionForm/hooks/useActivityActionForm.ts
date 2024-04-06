import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';

import { useDeleteFileByIdMutation } from '@/utils/api/hooks/useDeleteFileByIdMutation copy';
import { useGetActivityByIdQuery } from '@/utils/api/hooks/useGetActivityByIdQuery';
import { useGetCategoryQuery } from '@/utils/api/hooks/useGetCategoryQuery';
import { usePutActivityByIdMutation } from '@/utils/api/hooks/usePutActivityByIdMutation';

import type {
  ActivityActionType,
  ExtendedActivityMediaProps,
  ExtendedActivityProps
} from '../../../../../constants/types';
import type { ActivityActionSchema } from '../constants/activityActionSchema';
import { activityActionSchema } from '../constants/activityActionSchema';

import { usePostActivityActionMutation } from './usePostActivityActionMutation';

interface UseActivityActionFormParams {
  onAction: () => void;
  onEdit: (props: ActivityActionType) => void;
  actionType: Exclude<ActivityActionType, 'info'>;
  activity?: ExtendedActivityProps;
  externalActionType: ActivityActionType;
}

export const useActivityActionForm = ({
  onAction,
  onEdit,
  actionType,
  activity,
  externalActionType
}: UseActivityActionFormParams) => {
  const router = useRouter();
  const params = useParams<{ organizationId: string }>();
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const [isStatusOpen, setIsStatusOpen] = React.useState(false);
  const [activityMedia, setActivityMedia] = React.useState<ExtendedActivityMediaProps[]>(
    activity?.media ?? []
  );
  const [deleteFileIds, setDeleteFileIds] = React.useState<string[]>([]);

  const getCategoryQuery = useGetCategoryQuery();

  const getActivityByIdQuery = useGetActivityByIdQuery({
    id: activity?.id
  });

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
  const deleteFileByIdMutation = useDeleteFileByIdMutation();
  const putActivityActionMutation = usePutActivityByIdMutation();

  const onSubmit = activityForm.handleSubmit(async (values) => {
    const requestParams = {
      ...values,
      ageLimit: [values?.ageLimit?.min, values.ageLimit?.max],
      organizationId: params.organizationId
    };

    if (actionType === 'add') {
      const postActivityActionParams = {
        params: { ...requestParams, media: activityMedia },
        action: actionType
      } as const;

      await postActivityActionMutation.mutateAsync(postActivityActionParams);
    }

    if (actionType === 'edit') {
      if (activityMedia) {
        const putActivityActionParams = {
          params: { ...requestParams, media: activityMedia, id: activity!.id },
          action: actionType
        } as const;

        await putActivityActionMutation.mutateAsync(putActivityActionParams);
      }
      if (deleteFileIds) {
        deleteFileIds.forEach(async (id) => {
          const deleteFileByIdParams = {
            params: { id }
          } as const;

          await deleteFileByIdMutation.mutateAsync(deleteFileByIdParams);
        });
      }
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
      isPostActivityLoading: postActivityActionMutation.isPending,
      isGetActivityLoading: getActivityByIdQuery.isPending,
      media: getActivityByIdQuery.data?.media ?? [],
      activity: getActivityByIdQuery.data ?? {},
      activityMedia,
      deleteFileIds
    },
    form: activityForm,
    functions: { onSubmit, setIsCategoryOpen, setIsStatusOpen, setActivityMedia, setDeleteFileIds }
  };
};
