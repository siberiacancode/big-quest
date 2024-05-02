import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import type { ActivityResponse } from '@/api-types';
import {
  useDeleteFileByIdMutation,
  // useGetActivityByIdQuery,
  useGetCategoryQuery,
  usePostFileMutation
} from '@/utils/api/hooks';
import { useI18n } from '@/utils/contexts';

import type { ActivityActionType, ActivityMedia } from '../../../(constants)/types';
import type { ActivityActionSchema } from '../constants/activityActionSchema';
import { activityActionSchema } from '../constants/activityActionSchema';

import { useActionActivityMutation } from './useActionActivityMutation';

interface UseActivityActionFormParams {
  onAction: () => void;
  actionType: Exclude<ActivityActionType, 'info'>;
  activity?: ActivityResponse;
}

export const useActivityActionForm = ({
  onAction,
  actionType,
  activity
}: UseActivityActionFormParams) => {
  const i18n = useI18n();
  const params = useParams<{ organizationId: string }>();
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const [isStatusOpen, setIsStatusOpen] = React.useState(false);
  const [activityMedias, setActivityMedias] = React.useState<ActivityMedia[]>(
    activity?.media.map((media, index) => ({ ...media, selected: index === 0 })) ?? []
  );
  const [deleteFileIds, setDeleteFileIds] = React.useState<string[]>([]);

  const getCategoryQuery = useGetCategoryQuery();
  // const getActivityByIdQuery = useGetActivityByIdQuery(
  //   {
  //     id: activity?.id
  //   },
  //   {
  //     options: {
  //       enabled: !!activity?.id
  //     }
  //   }
  // );

  const activityForm = useForm<ActivityActionSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(activityActionSchema),
    defaultValues: {
      name: activity?.name ?? '',
      description: activity?.description ?? '',
      ageLimit: {
        min: activity?.ageLimit[0] ?? 7,
        max: activity?.ageLimit[1] ?? 14
      },
      duration: 120,
      price: activity?.duration ?? 1000,
      replay: activity?.replay ?? false,
      status: activity?.status ?? 'DRAFT',
      category: activity?.category ?? ''
    }
  });

  const actionActivityMutation = useActionActivityMutation();
  const deleteFileByIdMutation = useDeleteFileByIdMutation();
  const postFileMutation = usePostFileMutation();

  const onMediaClick = (id: string) => {
    const updatedMedias = activityMedias.map((mediaItem) => {
      if (mediaItem.id === id) {
        return {
          ...mediaItem,
          selected: true
        };
      }

      return { ...mediaItem, selected: false };
    });

    setActivityMedias(updatedMedias);
  };

  const onMediaCoverClick = (id: string) => {
    const updatedMedias = activityMedias.map((mediaItem) => {
      if (mediaItem.id === id) {
        return {
          ...mediaItem,
          flag: 'AVATAR'
        } as const;
      }

      return { ...mediaItem, flag: undefined };
    });

    setActivityMedias(updatedMedias);
  };

  const onMediaDeleteClick = (id: string) => {
    if (actionType === 'edit') {
      const mediaExist = activity?.media.find((media) => media.id === id);
      if (mediaExist) setDeleteFileIds([...deleteFileIds, id]);
    }

    const selectedMedia = activityMedias.find((media) => media.selected);
    const updatedMedias = activityMedias.filter((media) => media.id !== id);

    if (selectedMedia?.id === id) {
      const [updatedMedia, ...restUpdatedMedias] = updatedMedias;
      setActivityMedias([{ ...updatedMedia, selected: true }, ...restUpdatedMedias]);
      return;
    }

    setActivityMedias(updatedMedias);
  };

  const onMediaDropAccepted = (file: File) => {
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith('image/') ? 'IMAGE' : 'VIDEO';

    const id = Math.random().toString();

    const updatedMedias = activityMedias.map((mediaItem) => ({ ...mediaItem, selected: false }));

    setActivityMedias([...updatedMedias, { id, url, flag: undefined, type, file, selected: true }]);
  };

  const onSubmit = activityForm.handleSubmit(async (values) => {
    const transformedMedias: Omit<ActivityMedia, 'url'>[] = [];

    if (!activityMedias.length) {
      return toast.error(i18n.formatMessage({ id: 'activity.image.add' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    const isAvatarExist = activityMedias.find((media) => media.flag === 'AVATAR');

    if (!isAvatarExist) {
      return toast.error(i18n.formatMessage({ id: 'activity.cover.add' }), {
        cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
      });
    }

    await Promise.all(
      activityMedias.map(async (setActivityMedia) => {
        const { file, url, ...props } = setActivityMedia;

        if (file) {
          const id = await postFileMutation.mutateAsync({ params: { file } });
          transformedMedias.push({ ...props, id });
          return;
        }

        transformedMedias.push(props);
      })
    );

    const requestParams = {
      ...values,
      ageLimit: [values.ageLimit.min, values.ageLimit.max],
      organizationId: params.organizationId
    };

    if (actionType === 'add') {
      const postActivityActionParams = {
        params: { ...requestParams, media: transformedMedias },
        action: actionType
      } as const;

      await actionActivityMutation.mutateAsync(postActivityActionParams);
    }

    if (actionType === 'edit') {
      if (deleteFileIds) {
        await Promise.all(
          deleteFileIds.map((id) =>
            deleteFileByIdMutation.mutateAsync({
              params: { id }
            })
          )
        );
      }

      const putActivityActionParams = {
        params: { ...requestParams, media: transformedMedias, id: activity!.id },
        action: actionType
      } as const;

      await actionActivityMutation.mutateAsync(putActivityActionParams);
    }

    onAction();
  });

  return {
    state: {
      categories: getCategoryQuery.data,
      isPending: getCategoryQuery.isPending,
      isLoading: actionActivityMutation.isPending,
      isCategoryOpen,
      isStatusOpen,
      activityMedias,
      deleteFileIds
    },
    form: activityForm,
    functions: {
      onSubmit,
      setIsCategoryOpen,
      setIsStatusOpen,
      onMediaDeleteClick,
      onMediaClick,
      onMediaCoverClick,
      onMediaDropAccepted
    }
  };
};
