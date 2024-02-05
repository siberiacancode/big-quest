import type { RestRequestConfig } from 'mock-config-server';

export const dadataConfig: RestRequestConfig = {
  path: '/dadata',
  method: 'get',
  routes: [
    {
      data: [
        {
          country: 'Россия',
          region: 'Томская область',
          city: 'Томск',
          postal_code: '13123123',
          street: 'Ленина',
          house: '12',
          flat: '12',
          geo_lat: 123123,
          geo_lon: 13123,
          unrestrictedValue: 'Томская область, Томск'
        },
        {
          country: 'Россия',
          region: 'Новосибирская область',
          city: 'Новосибирск',
          postal_code: '13123123',
          street: 'Ленина',
          house: '12',
          flat: '12',
          geo_lat: 123123,
          geo_lon: 13123,
          unrestrictedValue: 'Новосибирская область, Новосибирск ddddddddddddddddddddddddddddddd'
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
          street: 'Ленина',
          house: '12',
          flat: '12',
          geo_lat: 123123,
          geo_lon: 13123,
          unrestrictedValue: 'Томская область, Томск'
        }
      ]
    }
  ]
};
