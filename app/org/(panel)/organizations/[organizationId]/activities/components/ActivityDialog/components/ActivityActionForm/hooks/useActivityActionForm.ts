import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

import type { ActivityResponse, MediaDto } from '@/api-types';
import {
  useDeleteFileByIdMutation,
  useGetActivityByIdQuery,
  useGetCategoryQuery,
  usePostFileMutation,
  usePutActivityByIdMutation
} from '@/utils/api/hooks';
import { useI18n } from '@/utils/contexts';

import type { ActivityActionType, ActivityMediaProps } from '../../../../../(constants)/types';
import type { ActivityActionSchema } from '../constants/activityActionSchema';
import { activityActionSchema } from '../constants/activityActionSchema';

import { usePostActivityActionMutation } from './usePostActivityActionMutation';

interface UseActivityActionFormParams {
  onAction: () => void;
  onEdit: (props: ActivityActionType) => void;
  actionType: Exclude<ActivityActionType, 'info'>;
  activity?: ActivityResponse;
  externalActionType: ActivityActionType;
}

export const useActivityActionForm = ({
  onAction,
  onEdit,
  actionType,
  activity,
  externalActionType
}: UseActivityActionFormParams) => {
  const i18n = useI18n();
  const router = useRouter();
  const params = useParams<{ organizationId: string }>();
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const [isStatusOpen, setIsStatusOpen] = React.useState(false);
  const [activityMedia, setActivityMedia] = React.useState<MediaDto[]>(activity?.media ?? []);
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
  const postFileMutation = usePostFileMutation();

  const onSubmit = activityForm.handleSubmit(async (values) => {
    const transformedMedia: Omit<ActivityMediaProps, 'url'>[] = [];

    if (!activityMedia.length) {
      return toast.error(i18n.formatMessage({ id: 'activity.image.add' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    const isAvatarExist = activityMedia.find((media) => media.flag === 'AVATAR');

    if (!isAvatarExist) {
      return toast.error(i18n.formatMessage({ id: 'activity.cover.add' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    await Promise.all(
      activityMedia.map(async (item) => {
        const { file, url, ...props } = item;

        if (file) {
          const id = await postFileMutation.mutateAsync({ params: { file } });
          transformedMedia.push({ ...props, id });
        } else {
          transformedMedia.push(item);
        }
      })
    );

    const requestParams = {
      ...values,
      ageLimit: [values?.ageLimit?.min, values.ageLimit?.max],
      organizationId: params.organizationId
    };

    if (actionType === 'add') {
      const postActivityActionParams = {
        params: { ...requestParams, media: transformedMedia },
        action: actionType
      } as const;

      await postActivityActionMutation.mutateAsync(postActivityActionParams);
    }

    if (actionType === 'edit') {
      if (deleteFileIds) {
        await Promise.all(
          deleteFileIds.map(async (id) => {
            const deleteFileByIdParams = {
              params: { id }
            } as const;

            await deleteFileByIdMutation.mutateAsync(deleteFileByIdParams);
          })
        );
      }
      const putActivityActionParams = {
        params: { ...requestParams, media: transformedMedia, id: activity!.id },
        action: actionType
      } as const;

      await putActivityActionMutation.mutateAsync(putActivityActionParams);
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
