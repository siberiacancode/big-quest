import type { MockServerConfig } from 'mock-config-server';

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api',
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['content-type'],
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
        ]
      }
    ]
  }
};

export default mockServerConfig;
