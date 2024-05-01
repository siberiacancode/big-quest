import { api } from '@/utils/api/instance';

export interface PostFileParams {
  file: File;
}

export type PostFileRequestConfig = RequestConfig<PostFileParams>;

export const postFile = async ({ params, config }: PostFileRequestConfig) =>
  api.post<string>('file', params, config);

interface DeleteFileByIdParams {
  id: string;
}

export type DeleteFileByIdRequestConfig = RequestConfig<DeleteFileByIdParams>;

export const deleteFileById = async ({ params, config }: DeleteFileByIdRequestConfig) =>
  api.delete<boolean>(`file/${params.id}`, config);
