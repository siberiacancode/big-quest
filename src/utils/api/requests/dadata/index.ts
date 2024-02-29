import { api } from '@/utils/api/instance';

export const getDadata = async ({ config }: RequestConfig) =>
  api.get<AddressResponse[]>('dadata', config);
