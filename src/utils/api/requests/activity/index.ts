import { api } from '@/utils/api/instance';

export type GetOrganizationActivitiesByIdConfig = RequestConfig;

export const getOrganizationActivitiesByOrganizationId = async ({
  config
}: GetOrganizationActivitiesByIdConfig) =>
  api.get<ActivityWithPaginationResponse>('activity', config);
