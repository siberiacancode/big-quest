import { isSSR } from './helpers';
import { HttpClient } from './http-client';

export const api = new HttpClient({
  baseURL: isSSR ? `${process.env.API_URL}/api` : '/api'
});
