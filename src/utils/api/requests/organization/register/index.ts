import type {
  CanNotCreateOrganizationException,
  ConflictCreateOrganizationException,
  OrganizationServerError,
  RegisterOrganizationDto,
  RegisterOrgResponse
} from '@/api-types';
import { api } from '@/utils/api/instance';

export type PostOrganizationRegisterParams = RegisterOrganizationDto;
export type PostOrganizationRegisterRequestConfig = RequestConfig<PostOrganizationRegisterParams>;

export const postOrganizationRegister = async ({
  params,
  config
}: PostOrganizationRegisterRequestConfig) =>
  api.post<
    | OrganizationServerError
    | ConflictCreateOrganizationException
    | CanNotCreateOrganizationException
    | RegisterOrgResponse
  >('organization/register', params, config);
