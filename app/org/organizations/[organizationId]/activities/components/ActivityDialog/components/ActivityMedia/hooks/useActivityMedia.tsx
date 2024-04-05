import React from 'react';

import type { ExtendedActivityProps } from '../../../../../constants/types';

export interface ActiveMediaFile {
  url: string;
  flag: MediaFlag;
  type: MediaType;
}

export interface UploadedMediaArray {
  file: File;
  url: string;
  flag: MediaFlag;
  type: MediaType;
}
interface UseActivityMediaProps {
  media?: ExtendedActivityProps['media'];
  postMediaFiles: File[];
  deleteFileIds: string[];
  setPostMediaFiles: (props: File[]) => void;
  setDeleteFileIds: (props: string[]) => void;
}

export const useActivityMedia = ({
  media = [],
  postMediaFiles,
  deleteFileIds,
  setPostMediaFiles,
  setDeleteFileIds
}: UseActivityMediaProps) => {
  const defaultActiveMediaFile = media?.find((item) => item.flag === 'AVATAR');

  const [activityMedia, setActivityMedia] = React.useState<ExtendedActivityProps['media']>(media);
  const [activeMediaFile, setActiveMediaFile] = React.useState<ActiveMediaFile>(
    defaultActiveMediaFile ?? {
      url: '',
      flag: null,
      type: 'IMAGE'
    }
  );

  const [uploadedMediaArray, setUploadedMediaArray] = React.useState<UploadedMediaArray[]>([]);

  const onChangeAvatarClick = (file) => {
    const newArray: ExtendedActivityProps['media'] = activityMedia.map((item) => {
      if (item.url === file.url && item.type === 'IMAGE') {
        const newItem = { ...item, flag: 'AVATAR' as MediaFlag };
        setActiveMediaFile({
          url: newItem.url,
          flag: newItem.flag,
          type: newItem.type
        });
        return newItem;
      }
      return { ...item, flag: null };
    });
    setActivityMedia(newArray);

    const uploadedArray: UploadedMediaArray[] = uploadedMediaArray.map((item) => {
      if (item.url === file.url) {
        const newItem = { ...item, flag: 'AVATAR' as MediaFlag };
        setActiveMediaFile({
          url: newItem.url,
          flag: newItem.flag,
          type: newItem.type
        });
        return newItem;
      }
      return { ...item, flag: null };
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
          flag: newActivityMedia[0].flag,
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
    const type = file.type.startsWith('image/') ? 'IMAGE' : 'VIDEO';

    setUploadedMediaArray([...uploadedMediaArray, { file, url, flag: null, type }]);
    setPostMediaFiles([...postMediaFiles, file]);
    setActiveMediaFile({ url, flag: null, type });
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
