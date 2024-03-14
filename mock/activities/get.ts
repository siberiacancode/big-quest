import type { RestRequestConfig } from 'mock-config-server';

export const activitiesGetConfig: RestRequestConfig = {
  path: '/activities',
  method: 'get',
  routes: [
    {
      entities: { query: { current: 1 } },
      data: {
        rows: [
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '35b55f3b-3ed9-441b-909b-05aaf9dc47a4',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '05666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '35b55f3b-3ed9-441b-909b-05aaf9dc47a3',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '2d982191-24e9-4b7d-bdfc-ec0bcd69a48b',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: 'dc4e289e-7143-4782-9e65-8ac5372e9e31',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '92529a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '92329a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '93229a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          }
        ],
        pagination: { current: 1, count: 100, limit: 10 }
      }
    },
    {
      entities: { query: { current: 2 } },
      data: {
        rows: [
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '35b55f3b-3ed9-441b-909b-05aaf9dc47a4',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '05666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '35b55f3b-3ed9-441b-909b-05aaf9dc47a3',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '2d982191-24e9-4b7d-bdfc-ec0bcd69a48b',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: 'dc4e289e-7143-4782-9e65-8ac5372e9e31',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '92529a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '92329a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '93229a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'EDIT',
            category: 'COOKING',
            type: 'OFFLINE'
          }
        ],
        pagination: { current: 2, count: 100, limit: 10 }
      }
    },
    {
      entities: { query: { current: 1, stage: 'CONCLUSION' } },
      data: {
        rows: [
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '35b55f3b-3ed9-441b-909b-05aaf9dc47a4',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '05666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '35b55f3b-3ed9-441b-909b-05aaf9dc47a3',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '2d982191-24e9-4b7d-bdfc-ec0bcd69a48b',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: 'dc4e289e-7143-4782-9e65-8ac5372e9e31',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '92529a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '92329a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '93229a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'CONCLUSION',
            category: 'COOKING',
            type: 'OFFLINE'
          }
        ],
        pagination: { current: 1, count: 10, limit: 10 }
      }
    },
    {
      entities: {
        query: { current: 1, stage: 'NEGOTIATION' }
      },
      data: {
        rows: [
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '35b55f3b-3ed9-441b-909b-05aaf9dc47a4',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '05666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '35b55f3b-3ed9-441b-909b-05aaf9dc47a3',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '2d982191-24e9-4b7d-bdfc-ec0bcd69a48b',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a2',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: 'dc4e289e-7143-4782-9e65-8ac5372e9e31',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '92529a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '92329a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          },
          {
            id: '93229a2a-3f88-4bda-878d-29f9f226b18f',
            organization: 'Apple',
            activity: 'Cool activity',
            location: 'Novosibirsk',
            stage: 'NEGOTIATION',
            category: 'COOKING',
            type: 'OFFLINE'
          }
        ],
        pagination: { current: 1, count: 10, limit: 10 }
      }
    },
    {
      entities: { query: { current: 1, organization: 'what' } },
      data: { rows: [], pagination: { current: 1, count: 0, limit: 10 } }
    }
  ]
};
