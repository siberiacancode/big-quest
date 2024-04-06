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
// вынесла в отдельный файл из-за промиса, но теперь беды с рендером, когда даже меняю данные активности ререндерит
export const ActivityActionFormMedia = async ({
  media,
  activityMedia,
  deleteFileIds,
  setActivityMedia,
  setDeleteFileIds
}: ActivityActionFormMediaProps) => {
  let mediaWithFile: ExtendedActivityMediaProps[] = [];

  if (media.length) {
    // почему-то много запросов файлов
    mediaWithFile = await Promise.all(
      media.map(async (item) => {
        const fileById = await getFileById({
          params: { id: item.id }
        });
        return { ...item, file: fileById };
      })
    );

    console.log('с попыткой засетить зацикливается');
    setActivityMedia(mediaWithFile);
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
