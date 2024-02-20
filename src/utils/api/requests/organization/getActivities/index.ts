import { api } from '@/utils/api/instance';

interface GetOrganizationActivitiesByIdParams {
  id: string;
}

export const getOrganizationActivitiesById = async ({
  params,
  config
}: RequestParams<GetOrganizationActivitiesByIdParams>) =>
  api.get<OrganizationActivitiesResponse[]>(`/organization/${params.id}/activities`, config);
