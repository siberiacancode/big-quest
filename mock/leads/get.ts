import type { RestRequestConfig } from 'mock-config-server';

export const getLeadsConfig: RestRequestConfig = {
  path: '/leads',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: 'cd064237-7608-438e-a5b8-a60de77e3b5e',
          fullname: 'Kurtis Bollin'
        },
        {
          id: '95ff1402-0a5a-4702-b69e-d002216aeade',
          fullname: 'Daron McGahey'
        },
        {
          id: 'bace2daa-4f0b-4f2f-a34a-882100b9a891',
          fullname: 'Trevor Farrens'
        },
        {
          id: '37d828c6-580f-492b-8b13-d65c20765649',
          fullname: 'Jana Sommer'
        },
        {
          id: 'ca39c93a-e600-4bef-bd00-de8f10025686',
          fullname: 'Oona Thames'
        },
        {
          id: 'a55ce853-4304-47d0-959f-3dd2746d3f2e',
          fullname: 'Faith Brushfield'
        }
      ]
    },
    {
      entities: {
        query: { fullname: 'Vito' }
      },
      data: [
        {
          id: '88571ac4-d017-46b2-8834-747023a658ab',
          fullname: 'Vito Scaletta'
        }
      ]
    }
  ]
};
