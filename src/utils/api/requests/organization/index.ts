import { api } from '../../instance';
import type { Organization } from '../../types/types';

interface GetOrganizationById {
  id: string;
}

export const getOrganizationById = async ({ params, config }: RequestParams<GetOrganizationById>) =>
  api.get<Organization>(`organization/${params.id}`, config);
