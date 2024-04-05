import { api } from '@/utils/api/instance';

export interface GetFileByIdParams {
  id: string;
}

export type GetFileByIdRequestConfig = RequestConfig<GetFileByIdParams>;

export const getFileById = async ({ params, config }: GetFileByIdRequestConfig) =>
  api.get<FileDto>(`file/${params.id}`, config);

interface PutFileByIdParams {
  id: string;
}

export type PutFileByIdRequestConfig = RequestConfig<PutFileByIdParams>;

export const putFileById = async ({ params, config }: PutFileByIdRequestConfig) =>
  api.put<FileDto>(`file/${params.id}`, params, config);

interface DeleteFileByIdParams {
  id: string;
}

export type DeleteFileByIdRequestConfig = RequestConfig<DeleteFileByIdParams>;

export const deleteFileById = async ({ params, config }: DeleteFileByIdRequestConfig) =>
  api.delete<FileDto>(`file/${params.id}`, config);
