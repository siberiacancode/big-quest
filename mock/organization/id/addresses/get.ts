import type { RestRequestConfig } from 'mock-config-server';

export const getOrganizationAddressesById: RestRequestConfig = {
  path: '/organization/:id/addresses',
  method: 'get',
  routes: [
    {
      data: {
        addresses: [
          {
            locality: 'Martinez',
            street: 'Mill Lane',
            house: '36',
            details: 'something',
            workingHours: [
              {
                day: 0,
                from: {
                  hour: 8,
                  minutes: 0
                },
                to: {
                  hour: 17,
                  minutes: 59
                },
                dayOff: true
              },
              {
                day: 1,
                from: {
                  hour: 2,
                  minutes: 32
                },
                to: {
                  hour: 3,
                  minutes: 49
                },
                dayOff: true
              },
              {
                day: 2,
                from: {
                  hour: 21,
                  minutes: 15
                },
                to: {
                  hour: 14,
                  minutes: 7
                },
                dayOff: false
              },
              {
                day: 3,
                from: {
                  hour: 17,
                  minutes: 0
                },
                to: {
                  hour: 10,
                  minutes: 33
                },
                dayOff: true
              },
              {
                day: 4,
                from: {
                  hour: 17,
                  minutes: 48
                },
                to: {
                  hour: 3,
                  minutes: 15
                },
                dayOff: true
              },
              {
                day: 5,
                from: {
                  hour: 2,
                  minutes: 0
                },
                to: {
                  hour: 16,
                  minutes: 58
                },
                dayOff: true
              },
              {
                day: 6,
                from: {
                  hour: 23,
                  minutes: 48
                },
                to: {
                  hour: 15,
                  minutes: 53
                },
                dayOff: true
              }
            ]
          },
          {
            locality: 'Hinsdale',
            street: 'Cobek Court',
            house: '96',
            details: 'something',
            workingHours: [
              {
                day: 0,
                from: {
                  hour: 12,
                  minutes: 29
                },
                to: {
                  hour: 4,
                  minutes: 53
                },
                dayOff: false
              },
              {
                day: 1,
                from: {
                  hour: 13,
                  minutes: 31
                },
                to: {
                  hour: 0,
                  minutes: 6
                },
                dayOff: true
              },
              {
                day: 2,
                from: {
                  hour: 9,
                  minutes: 38
                },
                to: {
                  hour: 21,
                  minutes: 14
                },
                dayOff: false
              },
              {
                day: 3,
                from: {
                  hour: 23,
                  minutes: 44
                },
                to: {
                  hour: 5,
                  minutes: 37
                },
                dayOff: true
              },
              {
                day: 4,
                from: {
                  hour: 19,
                  minutes: 27
                },
                to: {
                  hour: 12,
                  minutes: 22
                },
                dayOff: true
              },
              {
                day: 5,
                from: {
                  hour: 3,
                  minutes: 0
                },
                to: {
                  hour: 6,
                  minutes: 4
                },
                dayOff: true
              },
              {
                day: 6,
                from: {
                  hour: 22,
                  minutes: 52
                },
                to: {
                  hour: 0,
                  minutes: 17
                },
                dayOff: true
              }
            ]
          },
          {
            locality: 'Fairlee',
            street: 'Elmwood Avenue',
            house: '23',
            details: 'something',
            workingHours: [
              {
                day: 0,
                from: {
                  hour: 10,
                  minutes: 2
                },
                to: {
                  hour: 10,
                  minutes: 3
                },
                dayOff: false
              },
              {
                day: 1,
                from: {
                  hour: 0,
                  minutes: 12
                },
                to: {
                  hour: 9,
                  minutes: 44
                },
                dayOff: true
              },
              {
                day: 2,
                from: {
                  hour: 11,
                  minutes: 26
                },
                to: {
                  hour: 11,
                  minutes: 46
                },
                dayOff: true
              },
              {
                day: 3,
                from: {
                  hour: 16,
                  minutes: 48
                },
                to: {
                  hour: 0,
                  minutes: 14
                },
                dayOff: false
              },
              {
                day: 4,
                from: {
                  hour: 7,
                  minutes: 29
                },
                to: {
                  hour: 20,
                  minutes: 42
                },
                dayOff: true
              },
              {
                day: 5,
                from: {
                  hour: 0,
                  minutes: 34
                },
                to: {
                  hour: 14,
                  minutes: 40
                },
                dayOff: false
              },
              {
                day: 6,
                from: {
                  hour: 4,
                  minutes: 56
                },
                to: {
                  hour: 21,
                  minutes: 13
                },
                dayOff: false
              }
            ]
          },
          {
            locality: 'Canby',
            street: 'Ryder Avenue',
            house: '58',
            details: 'something',
            workingHours: [
              {
                day: 0,
                from: {
                  hour: 6,
                  minutes: 40
                },
                to: {
                  hour: 6,
                  minutes: 6
                },
                dayOff: true
              },
              {
                day: 1,
                from: {
                  hour: 17,
                  minutes: 21
                },
                to: {
                  hour: 2,
                  minutes: 12
                },
                dayOff: true
              },
              {
                day: 2,
                from: {
                  hour: 6,
                  minutes: 0
                },
                to: {
                  hour: 13,
                  minutes: 13
                },
                dayOff: true
              },
              {
                day: 3,
                from: {
                  hour: 1,
                  minutes: 29
                },
                to: {
                  hour: 17,
                  minutes: 40
                },
                dayOff: true
              },
              {
                day: 4,
                from: {
                  hour: 17,
                  minutes: 59
                },
                to: {
                  hour: 3,
                  minutes: 52
                },
                dayOff: true
              },
              {
                day: 5,
                from: {
                  hour: 12,
                  minutes: 46
                },
                to: {
                  hour: 23,
                  minutes: 9
                },
                dayOff: false
              },
              {
                day: 6,
                from: {
                  hour: 13,
                  minutes: 17
                },
                to: {
                  hour: 13,
                  minutes: 49
                },
                dayOff: false
              }
            ]
          }
        ]
      },
      entities: { params: { id: 1 } }
    }
  ]
};
