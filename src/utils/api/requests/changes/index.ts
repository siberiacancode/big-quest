import { api } from '../../instance';

export interface GetChangesParams {
  current: string;
  limit: string;
  criteria: string;
}

export type GetChangesRequestConfig = RequestConfig<GetChangesParams>;

export const getChanges = async ({ params, config }: GetChangesRequestConfig) =>
  api.get<ChangesResponseWithPagination>('changes', {
    ...config,
    params: { ...config?.params, ...params }
  });

export type PostChangesParams = CreateChangesDto;
export type PostChangesRequestConfig = RequestConfig<PostChangesParams>;

export const postChanges = async ({ params, config }: PostChangesRequestConfig) =>
  api.post<CreateChangesDto>('changes', params, config);
