import type { MediaDto } from '@/api-types';

export type ActivityActionType = 'add' | 'edit' | 'info';

export type ActivityMedia = MediaDto & {
  file?: File;
  selected: boolean;
};
