import { api } from '../../instance';

export type GetChangesRequestConfig = RequestConfig;

export const getChanges = async ({ config }: GetChangesRequestConfig) =>
  api.get<ChangesResponseWithPagination>('changes', config);

export type PostChangesParams = CreateChangesDto;
export type PostChangesRequestConfig = RequestConfig<PostChangesParams>;

export const postChanges = async ({ params, config }: PostChangesRequestConfig) =>
  api.post<CreateChangesDto>('changes', params, config);
