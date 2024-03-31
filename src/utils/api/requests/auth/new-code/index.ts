import { api } from '@/utils/api/instance';

interface GetAuthNewCodeParams {
  email: string;
}

export type GetAuthNewCodeRequestConfig = RequestConfig<GetAuthNewCodeParams>;

export const getAuthNewCode = async ({ params, config }: GetAuthNewCodeRequestConfig) =>
  api.get<GenerateNewCodeResponse>(`auth/new-code/${params.email}`, config);
