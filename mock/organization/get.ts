import type { RestRequestConfig } from 'mock-config-server';

export const organizationGetConfig: RestRequestConfig = {
  path: '/organization',
  method: 'get',
  routes: [
    {
      entities: { query: { current: 1 } },
      data: {
        rows: [
          {
            id: '1',
            name: 'Apple',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'PARTNER'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Banana',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'ORGANIZER'
          },
          {
            id: '17666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Carrot',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'REQUEST',
            type: 'SPONSOR'
          },
          {
            id: '27666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Dog',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'REQUEST',
            type: 'ORGANIZER'
          },
          {
            id: '37666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Elephant',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '47666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Fruit',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '57666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Grape',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'REQUEST',
            type: 'SPONSOR'
          },
          {
            id: '67666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Horse',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'REQUEST',
            type: 'PARTNER'
          },
          {
            id: '77666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Ice Cream',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '77666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Ice Cream 2.0',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
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
            id: '87666f2d-e6f4-4939-a471-b948495002a3',
            name: 'A',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '27666f2d-e6f4-4939-a471-b948495002a3',
            name: 'B',
            description: null,
            inn: null,
            createdAt: '2024-02-08T11:02:34.186Z',
            updatedAt: '2024-02-08T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'FRANCHISEE'
          },
          {
            id: '37666f2d-e6f4-4939-a471-b948495002a3',
            name: 'C',
            description: null,
            inn: null,
            createdAt: '2024-02-09T11:02:34.186Z',
            updatedAt: '2024-02-09T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'PLANNING',
            type: 'ORGANIZATION'
          },
          {
            id: '47666f2d-e6f4-4939-a471-b948495002a3',
            name: 'D',
            description: null,
            inn: null,
            createdAt: '2024-02-10T11:02:34.186Z',
            updatedAt: '2024-02-10T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'EXECUTION',
            type: 'SPONSOR'
          },
          {
            id: '57666f2d-e6f4-4939-a471-b948495002a3',
            name: 'E',
            description: null,
            inn: null,
            createdAt: '2024-02-11T11:02:34.186Z',
            updatedAt: '2024-02-11T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CLOSED',
            type: 'PARTNER'
          },
          {
            id: '67666f2d-e6f4-4939-a471-b948495002a3',
            name: 'F',
            description: null,
            inn: null,
            createdAt: '2024-02-12T11:02:34.186Z',
            updatedAt: '2024-02-12T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'FRANCHISEE'
          },
          {
            id: '77666f2d-e6f4-4939-a471-b948495002a3',
            name: 'G',
            description: null,
            inn: null,
            createdAt: '2024-02-13T11:02:34.186Z',
            updatedAt: '2024-02-13T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '97666f2d-e6f4-4939-a471-b948495002a3',
            name: 'H',
            description: null,
            inn: null,
            createdAt: '2024-02-14T11:02:34.186Z',
            updatedAt: '2024-02-14T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'PLANNING',
            type: 'SPONSOR'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a3',
            name: 'I',
            description: null,
            inn: null,
            createdAt: '2024-02-15T11:02:34.186Z',
            updatedAt: '2024-02-15T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'EXECUTION',
            type: 'PARTNER'
          },
          {
            id: '17666f2d-e6f4-4939-a471-b948495002a3',
            name: 'J',
            description: null,
            inn: null,
            createdAt: '2024-02-16T11:02:34.186Z',
            updatedAt: '2024-02-16T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CLOSED',
            type: 'ORGANIZER'
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
            id: '87666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Name ',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '17666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '27666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '37666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '47666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '57666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '67666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '77666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
          },
          {
            id: '97666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Organizer',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'CONCLUSION',
            type: 'ORGANIZER'
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
            id: '87666f2d-e6f4-4939-a471-b948495002a3',
            name: 'A',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a3',
            name: 'B',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'ORGANIZER'
          },
          {
            id: '17666f2d-e6f4-4939-a471-b948495002a3',
            name: 'D',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '27666f2d-e6f4-4939-a471-b948495002a3',
            name: 'B',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'ORGANIZER'
          },
          {
            id: '37666f2d-e6f4-4939-a471-b948495002a3',
            name: 'J',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '47666f2d-e6f4-4939-a471-b948495002a3',
            name: 'K',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '57666f2d-e6f4-4939-a471-b948495002a3',
            name: 'R ',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '67666f2d-e6f4-4939-a471-b948495002a3',
            name: 'T',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '77666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Q',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '97666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Z',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          }
        ],
        pagination: { current: 1, count: 10, limit: 10 }
      }
    },
    {
      entities: {
        query: { current: 1, stage: 'NEGOTIATION', sort: 'name' }
      },
      data: {
        rows: [
          {
            id: '87666f2d-e6f4-4939-a471-b948495002a3',
            name: 'A',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a3',
            name: 'B',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'ORGANIZER'
          },
          {
            id: '27666f2d-e6f4-4939-a471-b948495002a3',
            name: 'B',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'ORGANIZER'
          },
          {
            id: '17666f2d-e6f4-4939-a471-b948495002a3',
            name: 'D',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '37666f2d-e6f4-4939-a471-b948495002a3',
            name: 'J',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '47666f2d-e6f4-4939-a471-b948495002a3',
            name: 'K',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '77666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Q',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '57666f2d-e6f4-4939-a471-b948495002a3',
            name: 'R ',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '67666f2d-e6f4-4939-a471-b948495002a3',
            name: 'T',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '97666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Z',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          }
        ],
        pagination: { current: 1, count: 10, limit: 10 }
      }
    },
    {
      entities: {
        query: { current: 1, stage: 'NEGOTIATION', sort: '-name' }
      },
      data: {
        rows: [
          {
            id: '97666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Z',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '67666f2d-e6f4-4939-a471-b948495002a3',
            name: 'T',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '57666f2d-e6f4-4939-a471-b948495002a3',
            name: 'R ',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '77666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Q',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          },
          {
            id: '47666f2d-e6f4-4939-a471-b948495002a3',
            name: 'K',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '37666f2d-e6f4-4939-a471-b948495002a3',
            name: 'J',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '27666f2d-e6f4-4939-a471-b948495002a3',
            name: 'B',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'ORGANIZER'
          },
          {
            id: '07666f2d-e6f4-4939-a471-b948495002a3',
            name: 'B',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'ORGANIZER'
          },
          {
            id: '87666f2d-e6f4-4939-a471-b948495002a3',
            name: 'A',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          },
          {
            id: '17666f2d-e6f4-4939-a471-b948495002a3',
            name: 'D',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'PARTNER'
          }
        ],
        pagination: { current: 1, count: 10, limit: 10 }
      }
    },
    {
      entities: { query: { current: 1, organization: 'mega' } },
      data: {
        rows: [
          {
            id: '97666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Мега поиск',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: null,
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          }
        ],
        pagination: { current: 1, count: 1, limit: 10 }
      }
    },
    {
      entities: { query: { current: 1, organization: 'what' } },
      data: { rows: [], pagination: { current: 1, count: 0, limit: 10 } }
    },
    {
      entities: { query: { current: 1, location: 'г. Томск' } },
      data: {
        rows: [
          {
            id: '97666f2d-e6f4-4939-a471-b948495002a3',
            name: 'Фильтрация по населенному пункту',
            description: null,
            inn: null,
            createdAt: '2024-02-07T11:02:34.186Z',
            updatedAt: '2024-02-07T11:02:34.186Z',
            information: { city: 'г.Томск' },
            addresses: [],
            requisites: null,
            stage: 'NEGOTIATION',
            type: 'SPONSOR'
          }
        ],
        pagination: { current: 1, count: 1, limit: 10 }
      }
    }
  ]
};
