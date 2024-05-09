import { api } from '@/utils/api/instance';

interface GetOrganizationActivitiesParams {
  id: string;
}

type GetOrganizationActivitiesRequestConfig = RequestConfig<GetOrganizationActivitiesParams>;

export const getOrganizationActivities = async ({
  params,
  config
}: GetOrganizationActivitiesRequestConfig) =>
  api.get<OrganizationActivityFixMe[]>(`organization/${params.id}/activities`, config);
