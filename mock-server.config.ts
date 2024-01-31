import type { MockServerConfig } from 'mock-config-server';

import {
  dadataConfig,
  loginEmailConfig,
  organizationRegisterConfig,
  refreshTokensConfig
} from './mock';

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api/1.0',
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['content-type', 'authorization'],
    credentials: true
  },
  rest: {
    configs: [loginEmailConfig, refreshTokensConfig, organizationRegisterConfig, dadataConfig]
  }
};

export default mockServerConfig;
