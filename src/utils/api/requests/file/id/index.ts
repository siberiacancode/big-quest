import { api } from '@/utils/api/instance';

export interface GetFileByIdParams {
  id: string;
}

export type GetFileByIdRequestConfig = RequestConfig<GetFileByIdParams>;

export const getFileById = async ({ params, config }: GetFileByIdRequestConfig) =>
  api.get<File>(`file/${params.id}`, config);

interface PutFileByIdParams {
  id: string;
}

export type PutFileByIdRequestConfig = RequestConfig<PutFileByIdParams>;

export const putFileById = async ({ params, config }: PutFileByIdRequestConfig) =>
  api.put<File>(`file/${params.id}`, params, config);

export type PostFileRequestConfig = RequestConfig<File>;

export const postFile = async ({ params, config }: PostFileRequestConfig) =>
  api.post<string>('file', params, config);

interface DeleteFileByIdParams {
  id: string;
}

export type DeleteFileByIdRequestConfig = RequestConfig<DeleteFileByIdParams>;

export const deleteFileById = async ({ params, config }: DeleteFileByIdRequestConfig) =>
  api.delete<boolean>(`file/${params.id}`, config);
