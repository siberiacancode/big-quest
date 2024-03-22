import type { ActivityMedia, UploadedMediaArray } from '../contexts';
import { useActivityMediaContext } from '../contexts';

export const useActivityMedia = () => {
  const {
    activityMedia,
    activeMediaFile,
    uploadedMediaArray,
    deletedMediaArray,
    setActiveMediaFile,
    setActivityMedia,
    setUploadedMediaArray,
    setDeletedMediaArray
  } = useActivityMediaContext();

  const onChangeAvatarClick = (file) => {
    const newArray: ActivityMedia[] = activityMedia.map((item) => {
      if (item.url === file.url && item.type === 'image') {
        const newItem = { ...item, isAvatar: true };
        setActiveMediaFile({ url: newItem.url, isAvatar: newItem.isAvatar });
        return newItem;
      }
      return { ...item, isAvatar: false };
    });
    setActivityMedia(newArray);

    const uploadedArray: UploadedMediaArray[] = uploadedMediaArray.map((item) => {
      if (item.url === file.url) {
        const newItem = { ...item, isAvatar: true };
        setActiveMediaFile({ url: newItem.url, isAvatar: newItem.isAvatar });
        return newItem;
      }
      return { ...item, isAvatar: false };
    });
    setUploadedMediaArray(uploadedArray);
  };

  const onDeleteFileClick = (value: string) => {
    console.log('delete value: ', value, activityMedia);
    const newArray = uploadedMediaArray.filter((item) => item.url !== value);
    const newActivityMedia = activityMedia.filter((item) => item.url !== value);

    setUploadedMediaArray(newArray);
    setDeletedMediaArray([...deletedMediaArray, { id: 0, isAvatar: false }]);
    setActivityMedia(newActivityMedia);
  };

  const onDropAccepted = (file: File) => {
    setUploadedMediaArray([
      ...uploadedMediaArray,
      { file, url: URL.createObjectURL(file), isAvatar: false }
    ]);
  };

  return {
    state: { activeMediaFile, deletedMediaArray, uploadedMediaArray, activityMedia },
    functions: {
      setActiveMediaFile,
      onDeleteFileClick,
      onDropAccepted,
      onChangeAvatarClick
    }
  };
};
