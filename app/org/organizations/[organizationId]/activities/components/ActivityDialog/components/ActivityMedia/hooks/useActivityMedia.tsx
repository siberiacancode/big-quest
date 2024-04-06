import React from 'react';

import { usePostFileMutation } from '@/utils/api/hooks/usePostFileMutation';

import type { ExtendedActivityMediaProps } from '../../../../../constants/types';

interface UseActivityMediaProps {
  activityMedia: ExtendedActivityMediaProps[];
  deleteFileIds: string[];
  setActivityMedia: (props: ExtendedActivityMediaProps[]) => void;
  setDeleteFileIds: (props: string[]) => void;
}

export const useActivityMedia = ({
  activityMedia,
  deleteFileIds,
  setActivityMedia,
  setDeleteFileIds
}: UseActivityMediaProps) => {
  const defaultActiveMediaFile = activityMedia?.find((item) => item.flag === 'AVATAR');

  const [activeMediaFile, setActiveMediaFile] = React.useState<ExtendedActivityMediaProps>(
    defaultActiveMediaFile ?? {
      id: '',
      url: '',
      flag: null,
      type: 'IMAGE'
    }
  );

  const postFileMutation = usePostFileMutation();

  const onChangeAvatarClick = (file) => {
    const newArray: ExtendedActivityMediaProps[] = activityMedia.map((item) => {
      if (item.url === file.url && item.type === 'IMAGE') {
        const newItem = { ...item, flag: 'AVATAR' as MediaFlag };
        setActiveMediaFile(newItem);
        return newItem;
      }
      return { ...item, flag: null };
    });
    setActivityMedia(newArray);
  };

  const onDelete = (value: string) => {
    const deleteFile = activityMedia.find((media) => media.url === value)!;

    setDeleteFileIds([...deleteFileIds, deleteFile.id]);
    const newActivityMedia = activityMedia.filter((item) => item.url !== value);
    setActivityMedia(newActivityMedia);
    if (activeMediaFile.url === value) {
      setActiveMediaFile(newActivityMedia[0]);
    }
  };

  const onDropAccepted = async (file: File) => {
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith('image/') ? 'IMAGE' : 'VIDEO';

    const fileId = await postFileMutation.mutateAsync({});

    if (fileId) {
      setActivityMedia([...activityMedia, { id: fileId, url, flag: null, type }]);
      setActiveMediaFile({ id: fileId, url, flag: null, type });
    }
  };

  return {
    state: { activeMediaFile },
    functions: {
      setActiveMediaFile,
      onDelete,
      onDropAccepted,
      onChangeAvatarClick
    }
  };
};
