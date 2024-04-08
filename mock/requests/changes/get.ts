import type { RestRequestConfig } from 'mock-config-server';

export const getChangesConfig: RestRequestConfig = {
  path: '/changes',
  method: 'get',
  routes: [
    {
      entities: {
        query: { current: '1', limit: '5', criteria: '1' }
      },
      data: {
        rows: [
          {
            id: '123',
            createdAt: '2024-03-28T01:05:45.248Z',
            author: {},
            criteria: '1',
            old: {},
            new: { comment: 'Тестовый комментарий 1' },
            action: 'comment'
          },
          {
            id: '1234',
            createdAt: '2024-03-28T01:05:45.248Z',
            author: {},
            criteria: '1',
            old: {},
            new: { comment: 'Тестовый комментарий 2' },
            action: 'comment'
          },
          {
            id: '12345',
            createdAt: '2024-03-28T01:05:45.248Z',
            author: {},
            criteria: '1',
            old: {},
            new: {},
            action: 'add-employee'
          }
        ],
        pagination: {
          limit: 5,
          current: 1,
          count: 2
        }
      },
      interceptors: {
        response: (data, { request, setStatusCode }) => {
          if (request.cookies.refreshtoken && request.cookies.accessToken) {
            return data;
          }

          setStatusCode(401);
          return { message: 'Unauthorized' };
        }
      }
    },
    {
      entities: {
        query: { current: '1', limit: '5', criteria: '1' }
      },
      data: {
        rows: [
          {
            id: '223',
            createdAt: '2024-03-28T01:05:45.248Z',
            author: {},
            criteria: '2',
            old: {},
            new: { comment: 'Тестовый комментарий 1' },
            action: 'comment'
          },
          {
            id: '2234',
            createdAt: '2024-03-28T01:05:45.248Z',
            author: {},
            criteria: '2',
            old: {},
            new: { comment: 'Тестовый комментарий 2' },
            action: 'comment'
          }
        ],
        pagination: {
          limit: 5,
          current: 1,
          count: 2
        }
      },
      interceptors: {
        response: (data, { request, setStatusCode }) => {
          if (request.cookies.refreshtoken && request.cookies.accessToken) {
            return data;
          }

          setStatusCode(401);
          return { message: 'Unauthorized' };
        }
      }
    }
  ]
};
