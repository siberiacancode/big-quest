import type { RestRequestConfig } from 'mock-config-server';

export const getAddressConfig: RestRequestConfig = {
  path: '/legal-addresses/:legalId',
  method: 'get',
  routes: [
    {
      data: [
        {
          country: 'Россия',
          region: 'Московская область',
          city: 'Москва',
          postal_code: '101000',
          street: 'Тверская улица',
          house: '1',
          flat: 5,
          geo_lat: 55.755814,
          geo_lon: 37.617635,
          unrestrictedValue: 'Тверская улица, 1, Москва, 101000',
          value: 'Тверская улица, 1',
          cityWithType: 'город'
        },
        {
          country: 'Россия',
          region: 'Санкт-Петербург',
          city: 'Санкт-Петербург',
          postal_code: '190000',
          geo_lat: 59.9342802,
          geo_lon: 30.3350986,
          unrestrictedValue: 'Невский проспект, 10, Санкт-Петербург, 190000',
          value: 'Невский проспект, 10',
          cityWithType: 'город Санкт-Петербург'
        },
        {
          country: 'Россия',
          region: 'Новосибирская область',
          city: 'Новосибирск',
          postal_code: '630000',
          street: 'Ленинский проспект',
          house: '20',
          flat: 15,
          geo_lat: 55.0083526,
          geo_lon: 82.9357327,
          unrestrictedValue: 'Ленинский проспект, 20, Новосибирск, 630000',
          value: 'Ленинский проспект, 20',
          cityWithType: 'город'
        },
        {
          country: 'Россия',
          region: 'Свердловская область',
          city: 'Екатеринбург',
          postal_code: '620000',
          street: 'Пр. Ленина',
          house: '30',
          flat: 20,
          geo_lat: 56.838011,
          geo_lon: 60.597465,
          unrestrictedValue: 'Пр. Ленина, 30, Екатеринбург, 620000',
          value: 'Пр. Ленина, 30',
          cityWithType: 'город'
        },
        {
          country: 'Россия',
          region: 'Краснодарский край',
          city: 'Краснодар',
          postal_code: '350000',
          street: 'ул. Красная',
          house: '40',
          flat: 25,
          geo_lat: 45.0354704,
          geo_lon: 38.975313,
          unrestrictedValue: 'ул. Красная, 40, Краснодар, 350000',
          value: 'ул. Красная, 40',
          cityWithType: 'город'
        },
        {
          country: 'Россия',
          region: 'Татарстан',
          city: 'Казань',
          postal_code: '420000',
          street: 'ул. Баумана',
          house: '50',
          flat: 30,
          geo_lat: 55.7961273,
          geo_lon: 49.1064055,
          unrestrictedValue: 'ул. Баумана, 50, Казань, 420000',
          value: 'ул. Баумана, 50',
          cityWithType: 'город'
        },
        {
          country: 'Россия',
          region: 'Самарская область',
          city: 'Самара',
          postal_code: '443000',
          geo_lat: 53.2415041,
          geo_lon: 50.2212459,
          unrestrictedValue: 'ул. Ленина, 60, Самара, 443000',
          value: 'ул. Ленина, 60',
          cityWithType: 'город Самара'
        },
        {
          country: 'Россия',
          region: 'Красноярский край',
          city: 'Красноярск',
          postal_code: '660000',
          geo_lat: 56.0152836,
          geo_lon: 92.8932476,
          unrestrictedValue: 'Красноярск, 660000',
          value: 'ул. Красная, 70',
          cityWithType: 'город Красноярск'
        },
        {
          country: 'Россия',
          region: 'Удмуртская Республика',
          city: 'Ижевск',
          postal_code: '426000',
          street: 'ул. Пушкина',
          house: '80',
          flat: 45,
          geo_lat: 56.8527444,
          geo_lon: 53.2113961,
          unrestrictedValue: 'ул. Пушкина, 80, Ижевск, 426000',
          value: 'ул. Пушкина, 80',
          cityWithType: 'город'
        },
        {
          country: 'Россия',
          region: 'Республика Башкортостан',
          city: 'Уфа',
          postal_code: '450000',
          street: 'ул. Ленина',
          house: '90',
          flat: 50,
          geo_lat: 54.7387621,
          geo_lon: 55.972055,
          unrestrictedValue: 'ул. Ленина, 90, Уфа, 450000',
          value: 'ул. Ленина, 90',
          cityWithType: 'город'
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
