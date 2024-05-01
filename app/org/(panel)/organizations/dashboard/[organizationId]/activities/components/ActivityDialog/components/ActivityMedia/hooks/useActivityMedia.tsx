import React from 'react';

import type { ActivityMediaProps } from '../../../../../constants/types';

interface UseActivityMediaProps {
  activityMedia: ActivityMediaProps[];
  deleteFileIds: string[];
  setActivityMedia: (props: ActivityMediaProps[]) => void;
  setDeleteFileIds: (props: string[]) => void;
}

export const useActivityMedia = ({
  activityMedia,
  deleteFileIds,
  setActivityMedia,
  setDeleteFileIds
}: UseActivityMediaProps) => {
  const defaultActiveMediaFile = activityMedia?.find((item) => item.flag === 'AVATAR');
  const emptyActiveMediaFile: ActivityMediaProps = {
    id: '',
    url: '',
    flag: null,
    type: 'IMAGE'
  };

  const [activeMediaFile, setActiveMediaFile] = React.useState<ActivityMediaProps>(
    defaultActiveMediaFile ?? emptyActiveMediaFile
  );

  const onChangeAvatarClick = (file) => {
    const newArray = activityMedia.map((item) => {
      if (item.id === file.id && item.type === 'IMAGE') {
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

    if (!value.startsWith('blob')) setDeleteFileIds([...deleteFileIds, deleteFile.id]);

    const newActivityMedia = activityMedia.filter((item) => item.url !== value);

    setActivityMedia(newActivityMedia);

    if (activeMediaFile.url === value) {
      setActiveMediaFile(!newActivityMedia.length ? emptyActiveMediaFile : newActivityMedia[0]);
    }
  };

  const onDropAccepted = (file: File) => {
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith('image/') ? 'IMAGE' : 'VIDEO';

    const id = Math.random().toString();

    setActivityMedia([...activityMedia, { id, url, flag: null, type, file }]);
    setActiveMediaFile({ id, url, flag: null, type });
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
