import { api } from '@/utils/api/instance';

export const getDadata = async ({ config }: RequestParams) =>
  api.get<AddressResponse[]>('dadata', config);
