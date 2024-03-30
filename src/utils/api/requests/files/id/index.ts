import { api } from '@/utils/api/instance';

interface PutFileByIdParams {
  id: string;
}

export type PutFileByIdRequestConfig = RequestConfig<PutFileByIdParams>;

export const putFileById = async ({ params, config }: PutFileByIdRequestConfig) =>
  api.put<FilesDto>(`file/${params.id}`, params, config);

interface DeleteFileByIdParams {
  id: string;
}

export type DeleteFileByIdRequestConfig = RequestConfig<DeleteFileByIdParams>;

export const deleteFileById = async ({ params, config }: DeleteFileByIdRequestConfig) =>
  api.delete<FilesDto>(`file/${params.id}`, config);
