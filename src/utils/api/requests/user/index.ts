import { api } from '../../instance';

export const getUser = (params?: RequestParams) =>
  api.get<{ name: string }>('user', params?.config);
