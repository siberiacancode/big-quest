import { isSSR } from './helpers';
import { HttpClient } from './http-client';

export const api = new HttpClient({
  baseURL: isSSR ? `${process.env.API_URL}/api/1.0/auth` : '/api/1.0/auth',
  headers: {
    'Content-type': 'application/json'
  }
});
