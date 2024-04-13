import type {
  ActivityMediaProps,
  ExtendedActivityMediaProps
} from 'app/org/organizations/[organizationId]/activities/constants/types';

import { getFileById } from '@/utils/api';

import { ActivityMedia } from '../../../ActivityMedia/ActivityMedia';

interface ActivityActionFormMediaProps {
  media: ActivityMediaProps[];
  activityMedia: ExtendedActivityMediaProps[];
  deleteFileIds: string[];
  setActivityMedia: (props: ExtendedActivityMediaProps[]) => void;
  setDeleteFileIds: (props: string[]) => void;
}

export const ActivityActionFormMedia = async ({
  media,
  activityMedia,
  deleteFileIds,
  setActivityMedia,
  setDeleteFileIds
}: ActivityActionFormMediaProps) => {
  let mediaWithUrl: ExtendedActivityMediaProps[] = [];

  if (media.length) {
    // почему-то много запросов файлов
    mediaWithUrl = await Promise.all(
      media.map(async (item) => {
        const fileById = await getFileById({
          params: { id: item.id }
        });
        return { ...item, url: fileById.url };
      })
    );

    console.log('loop created here');
    setActivityMedia(mediaWithUrl);
  }

  return (
    <ActivityMedia
      activityMedia={activityMedia}
      deleteFileIds={deleteFileIds}
      setActivityMedia={setActivityMedia}
      setDeleteFileIds={setDeleteFileIds}
    />
  );
};
