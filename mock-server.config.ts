import type { MockServerConfig } from 'mock-config-server';

let flag = false;

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
        ],
        interceptors: {
          response: (data, { setStatusCode }) => {
            if (!flag) {
              setStatusCode(401);
              flag = true;
              return data;
            }
            flag = false;
            return data;
          }
        }
      }
    ]
  }
};

export default mockServerConfig;
