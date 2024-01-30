import { isSSR } from './helpers';
import { HttpClient } from './http-client';

export const api = new HttpClient({
  baseURL: isSSR ? `${process.env.API_URL}/api/1.0` : '/api/1.0',
  headers: {
    'Content-type': 'application/json'
  }
});
