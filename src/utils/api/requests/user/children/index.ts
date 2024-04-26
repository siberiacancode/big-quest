import { api } from '../../../instance';

export type GetUserChildrenRequestConfig = RequestConfig | void;

export const getUserChildren = async (requestConfig?: GetUserChildrenRequestConfig) =>
  api.get<ParticipantProfileSettingsResponseFixMe[]>('user/children', requestConfig?.config);
