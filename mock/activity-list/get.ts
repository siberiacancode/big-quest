import type { RestRequestConfig } from 'mock-config-server';

export const getActivityListConfig: RestRequestConfig = {
  path: '/activity-list',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: 'ae3baf0a-1ca3-44c8-8f6b-19f4aa0164c6',
          name: 'Рисовашки'
        },
        {
          id: '5ad97604-2f27-4f86-a5af-717842edc868',
          name: 'Рисовашки2'
        },
        {
          id: '9edbcb08-2ff8-4ee8-8c03-77b44f784fc7',
          name: 'Рисовашки3'
        },
        {
          id: 'a2c21574-a5f1-42a8-aff1-9aa4d1313f2a',
          name: 'Рисовашки4'
        },
        {
          id: 'db0ee0f2-c40a-470e-a555-5c83db69f880',
          name: 'Рисовашки5'
        },
        {
          id: '672ebce1-1776-4d09-a8f0-031e4488424f',
          name: 'Рисовашки6'
        }
      ]
    },
    {
      entities: {
        query: { activity: 'НеРисовашки' }
      },
      data: [
        {
          id: '88571ac4-d017-46b2-8834-747023a658aa',
          name: 'НеРисовашки6'
        }
      ]
    }
  ]
};
