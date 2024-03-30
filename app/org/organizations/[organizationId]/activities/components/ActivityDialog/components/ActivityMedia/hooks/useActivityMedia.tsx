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

export interface UploadedMediaArray {
  file: File;
  url: string;
  isAvatar: boolean;
  type: string;
}
interface UseActivityMediaProps {
  media?: ActivityMedia[];
  postMediaFiles: File[];
  deleteFileIds: number[];
  setPostMediaFiles: (props: File[]) => void;
  setDeleteFileIds: (props: number[]) => void;
}

export const useActivityMedia = ({
  media = [],
  postMediaFiles,
  deleteFileIds,
  setPostMediaFiles,
  setDeleteFileIds
}: UseActivityMediaProps) => {
  const defaultActiveMediaFile = media?.find((item) => item.isAvatar === true);

  const [activityMedia, setActivityMedia] = React.useState<ActivityMedia[]>(media);
  const [activeMediaFile, setActiveMediaFile] = React.useState<ActiveMediaFile>(
    defaultActiveMediaFile ?? {
      url: '',
      isAvatar: false,
      type: ''
    }
  );

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
    const deleteFile = activityMedia.find((media) => media.url === value && media.id)!;

    if (deleteFile) {
      setDeleteFileIds([...deleteFileIds, deleteFile?.id]);
      const newActivityMedia = activityMedia.filter((item) => item.url !== value);
      setActivityMedia(newActivityMedia);
      if (activeMediaFile.url === value) {
        setActiveMediaFile({
          url: newActivityMedia[0].url,
          isAvatar: newActivityMedia[0].isAvatar,
          type: newActivityMedia[0].type
        });
      }
    }
    if (!deleteFile) {
      const uploadedFile = uploadedMediaArray.find((file) => file.url === value)!;
      const filteredPostFiles = postMediaFiles.filter((file) => file !== uploadedFile.file);
      const filteredUploadedMedia = uploadedMediaArray.filter((item) => item.url !== value);
      setPostMediaFiles(filteredPostFiles);
      setUploadedMediaArray(filteredUploadedMedia);
    }
  };

  const onDropAccepted = (file: File) => {
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith('image/') ? 'image' : 'video';

    setUploadedMediaArray([...uploadedMediaArray, { file, url, isAvatar: false, type }]);
    setPostMediaFiles([...postMediaFiles, file]);
    setActiveMediaFile({ url, isAvatar: false, type });
  };

  return {
    state: { activeMediaFile, uploadedMediaArray, activityMedia },
    functions: {
      setActiveMediaFile,
      onDelete,
      onDropAccepted,
      onChangeAvatarClick
    }
  };
};
