import { api } from '@/utils/api/instance';

interface PutFilesByIdParams {
  id: string;
}

export type PutFilesByIdRequestConfig = RequestConfig<PutFilesByIdParams>;

export const putFilesById = async ({ params, config }: PutFilesByIdRequestConfig) =>
  api.put<FilesDto>(`files/${params.id}`, params, config);
