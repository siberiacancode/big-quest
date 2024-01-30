import { api } from '@/utils/api/instance';

export const postRefreshTokens = async () => api.get('auth/refresh-tokens', undefined);
