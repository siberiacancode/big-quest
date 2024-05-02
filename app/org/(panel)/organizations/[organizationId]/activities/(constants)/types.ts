import type { MediaDto } from '@/api-types';

export type ActivityActionType = 'add' | 'edit';

export type ActivityMedia = MediaDto & {
  file?: File;
  selected: boolean;
};
