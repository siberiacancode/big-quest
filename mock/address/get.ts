import type { RestRequestConfig } from 'mock-config-server';

export const getAddress: RestRequestConfig = {
  path: '/address',
  method: 'get',
  routes: [
    {
      data: [
        {
          country: 'Россия',
          region: 'Томская область',
          city: 'Томск',
          postal_code: '13123123',
          geo_lat: 123123,
          geo_lon: 13123,
          unrestrictedValue: 'Томская область, Томск',
          cityWithType: 'г. Томск'
        },
        {
          country: 'Россия',
          region: 'Новосибирская область',
          city: 'Новосибирск',
          postal_code: '13123123',
          geo_lat: 123123,
          geo_lon: 13123,
          unrestrictedValue: 'Новосибирская область, Новосибирск ddddddddddddddddddddddddddddddd',
          cityWithType: 'г. Новосибирск'
        }
      ]
    },
    {
      entities: {
        query: { address: 'Томск' }
      },
      data: [
        {
          country: 'Россия',
          region: 'Томская область',
          city: 'Томск',
          postal_code: '13123123',
          geo_lat: 123123,
          geo_lon: 13123,
          unrestrictedValue: 'Томская область, Томск',
          cityWithType: 'г. Томск'
        }
      ]
    }
  ]
};
