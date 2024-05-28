import type { MediaResponse } from '@/api-types';

export type ActivityActionType = 'add' | 'edit';

export type ActivityMedia = MediaResponse & {
  file?: File;
  selected: boolean;
};
