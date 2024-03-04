import type { MockServerConfig } from 'mock-config-server';

import * as requests from './mock';

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
      await setDelay(1000);
      console.log(request.url, request.baseUrl);
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
