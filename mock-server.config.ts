import type { MockServerConfig } from 'mock-config-server';

import { loginEmailConfig, refreshTokensConfig } from './mock';

let flag = false;

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api/1.0/auth',
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['content-type', 'authorization'],
    credentials: true
  },
  rest: {
    configs: [
      {
        method: 'get',
        path: '/user',
        routes: [
          {
            data: { name: 'John Doe' }
          }
        ],
        interceptors: {
          response: (data, { request, setStatusCode }) => {
            if (
              !flag ||
              request.headers.authorization !== `Bearer ${request.cookies.accessToken}`
            ) {
              setStatusCode(401);
              flag = true;
              return data;
            }

            flag = false;
            return data;
          }
        }
      },
      loginEmailConfig,
      refreshTokensConfig
    ]
  }
};

export default mockServerConfig;
