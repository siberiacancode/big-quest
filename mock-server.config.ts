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
  rest: {
    configs: Object.values(requests)
  }
};

export default mockServerConfig;
