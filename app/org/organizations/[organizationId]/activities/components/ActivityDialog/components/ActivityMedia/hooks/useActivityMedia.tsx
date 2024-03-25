import React from 'react';

export interface ActivityMedia {
  id: number;
  url: string;
  position: number;
  type: 'image' | 'video';
  ext: string;
  size: number;
  isAvatar: boolean;
}

export interface ActiveMediaFile {
  url: string;
  isAvatar: boolean;
  type: string;
}

export interface DeletedMediaArray {
  id: number;
  isAvatar: boolean;
}

export interface UploadedMediaArray {
  file: File;
  url: string;
  isAvatar: boolean;
  type: string;
}
interface UseActivityMediaProps {
  media?: ActivityMedia[];
}

export const useActivityMedia = ({ media = [] }: UseActivityMediaProps) => {
  const defaultActiveMediaFile = media?.find((item) => item.isAvatar === true);

  const [activityMedia, setActivityMedia] = React.useState<ActivityMedia[]>(media);
  const [activeMediaFile, setActiveMediaFile] = React.useState<ActiveMediaFile>(
    defaultActiveMediaFile ?? {
      url: '',
      isAvatar: false,
      type: ''
    }
  );
  const [deletedMediaArray, setDeletedMediaArray] = React.useState<DeletedMediaArray[]>([]);
  const [uploadedMediaArray, setUploadedMediaArray] = React.useState<UploadedMediaArray[]>([]);

  const onChangeAvatarClick = (file) => {
    const newArray: ActivityMedia[] = activityMedia.map((item) => {
      if (item.url === file.url && item.type === 'image') {
        const newItem = { ...item, isAvatar: true };
        setActiveMediaFile({ url: newItem.url, isAvatar: newItem.isAvatar, type: newItem.type });
        return newItem;
      }
      return { ...item, isAvatar: false };
    });
    setActivityMedia(newArray);

    const uploadedArray: UploadedMediaArray[] = uploadedMediaArray.map((item) => {
      if (item.url === file.url) {
        const newItem = { ...item, isAvatar: true };
        setActiveMediaFile({ url: newItem.url, isAvatar: newItem.isAvatar, type: newItem.type });
        return newItem;
      }
      return { ...item, isAvatar: false };
    });
    setUploadedMediaArray(uploadedArray);
  };

  const onDelete = (value: string) => {
    const newArray = uploadedMediaArray.filter((item) => item.url !== value);
    const newActivityMedia = activityMedia.filter((item) => item.url !== value);

    setUploadedMediaArray(newArray);
    // поправить сбор удаляемых файлов
    setDeletedMediaArray([...deletedMediaArray, { id: 0, isAvatar: false }]);
    setActivityMedia(newActivityMedia);
    if (activeMediaFile.url === value) {
      setActiveMediaFile({
        url: newActivityMedia[0].url,
        isAvatar: newActivityMedia[0].isAvatar,
        type: newActivityMedia[0].type
      });
    }
  };

  const onDropAccepted = (file: File) => {
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith('image/') ? 'image' : 'video';

    setUploadedMediaArray([...uploadedMediaArray, { file, url, isAvatar: false, type }]);
    setActiveMediaFile({ url, isAvatar: false, type });
  };

  return {
    state: { activeMediaFile, deletedMediaArray, uploadedMediaArray, activityMedia },
    functions: {
      setActiveMediaFile,
      onDelete,
      onDropAccepted,
      onChangeAvatarClick
    }
  };
};
