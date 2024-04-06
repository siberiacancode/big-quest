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
      file: new File([], 'temp'),
      flag: null,
      type: 'IMAGE'
    }
  );

  const postFileMutation = usePostFileMutation();

  const onChangeAvatarClick = (file) => {
    const newArray: ExtendedActivityMediaProps[] = activityMedia.map((item) => {
      if (item.file === file.file && item.type === 'IMAGE') {
        const newItem = { ...item, flag: 'AVATAR' as MediaFlag };
        setActiveMediaFile(newItem);
        return newItem;
      }
      return { ...item, flag: null };
    });
    setActivityMedia(newArray);
  };

  const onDelete = (value: string) => {
    const deleteFile = activityMedia.find((media) => URL.createObjectURL(media.file) === value)!;

    setDeleteFileIds([...deleteFileIds, deleteFile.id]);
    const newActivityMedia = activityMedia.filter(
      (item) => URL.createObjectURL(item.file) !== value
    );
    setActivityMedia(newActivityMedia);
    if (URL.createObjectURL(activeMediaFile.file) === value) {
      setActiveMediaFile(newActivityMedia[0]);
    }
  };

  const onDropAccepted = async (file: File) => {
    const type = file.type.startsWith('image/') ? 'IMAGE' : 'VIDEO';

    const fileId = await postFileMutation.mutateAsync({ params: file });

    if (fileId) {
      setActivityMedia([...activityMedia, { id: fileId, file, flag: null, type }]);
      setActiveMediaFile({ id: fileId, file, flag: null, type });
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
