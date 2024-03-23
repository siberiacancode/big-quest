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

  const onDeleteFileClick = (value: string) => {
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
      onDeleteFileClick,
      onDropAccepted,
      onChangeAvatarClick
    }
  };
};
