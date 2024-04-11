import type { MockServerConfig } from 'mock-config-server';

import * as requests from './mock/requests';

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api/1.0',
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['content-type', 'authorization'],
    credentials: true
  },
  interceptors: {
    request: async ({ setDelay, request }) => {
      console.log('REQUEST:', request.method, request.originalUrl);
      await setDelay(1000);
    }
  },
  rest: {
    configs: Object.values(requests)
  },
  staticPath: {
    path: '/mock/static',
    prefix: '/static'
  }
};

export default mockServerConfig;
