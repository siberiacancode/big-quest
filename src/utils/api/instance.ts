import { HttpClient } from './http-instance';

export const api = new HttpClient({
  baseURL: 'http://localhost:31299/api'
});
