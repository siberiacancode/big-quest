import { api } from '@/utils/api/instance';

export type GetUserProfileSettingsRequestConfig = RequestConfig | void;

export const getUserProfileSettings = async (requestConfig?: GetUserProfileSettingsRequestConfig) =>
  api.get<ParticipantProfileSettingsResponseFixMe>('user/profile/settings', requestConfig?.config);
