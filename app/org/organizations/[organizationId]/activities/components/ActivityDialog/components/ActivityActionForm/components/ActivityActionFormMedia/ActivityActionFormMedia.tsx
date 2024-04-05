import { getFileById } from '@/utils/api';

import { ActivityMedia } from '../../../ActivityMedia/ActivityMedia';

export const ActivityActionFormMedia = async ({
  media,
  postMediaFiles,
  deleteFileIds,
  setPostMediaFiles,
  setDeleteFileIds
}) => {
  const mediaWithUrl = await Promise.all(
    media.map(async (item) => {
      const fileById = await getFileById({
        params: { id: item.id }
      });
      return { ...item, url: fileById.url };
    })
  );

  return (
    <ActivityMedia
      media={mediaWithUrl}
      postMediaFiles={postMediaFiles}
      deleteFileIds={deleteFileIds}
      setPostMediaFiles={setPostMediaFiles}
      setDeleteFileIds={setDeleteFileIds}
    />
  );
};
