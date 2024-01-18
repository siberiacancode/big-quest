import { api } from '../../instance';

export const getUser = (params?: RequestConfig) =>
  api.get<{ name: string }>('user', params?.config);
