import type { RestRequestConfig } from 'mock-config-server';

export const getOrganizationScheduleConfig: RestRequestConfig = {
  path: '/organization/:id/schedule',
  method: 'get',
  routes: [
    {
      entities: { query: { current: '1', limit: '10' } },
      data: {
        pagination: {
          limit: 10,
          current: 1,
          count: 100
        },
        rows: [
          {
            id: '7b27ef81-c448-4b3f-b88a-4842eb7a352e',
            activityName: 'Egretta thula',
            locality: '75435 John Wall Plaza',
            employee: 'Christan Tattershaw',
            date: '2023-02',
            time: '12:59 PM',
            registrationCount: 10,
            passed: false
          },
          {
            id: 'fcf501a5-3d56-4539-b2d0-636678ef6cf7',
            activityName: 'Cathartes aura',
            locality: '5743 Haas Lane',
            employee: 'Anselm Gosenell',
            date: '2023-09',
            time: '10:03 AM',
            registrationCount: 20,
            passed: true
          },
          {
            id: 'cf9b47c8-9f11-42e8-baf2-b00e4c0ecd42',
            activityName: 'Colaptes campestroides',
            locality: '5 Loeprich Terrace',
            employee: "Dylan O'Donohue",
            date: '2023-03',
            time: '8:05 PM',
            registrationCount: 9,
            passed: true
          },
          {
            id: 'c643113f-8c9d-41fd-8510-ebed0490b724',
            activityName: 'Ceratotherium simum',
            locality: '07111 Mcbride Point',
            employee: 'Zebulen Renvoise',
            date: '2023-12',
            time: '10:26 PM',
            registrationCount: 13,
            passed: true
          },
          {
            id: '7043aeb9-b88d-4dbd-9ab3-e973ab61daba',
            activityName: 'Cervus duvauceli',
            locality: '58849 Melby Place',
            employee: 'Brewer Tubritt',
            date: '2023-07',
            time: '7:28 PM',
            registrationCount: 13,
            passed: true
          },
          {
            id: '8e247f75-dbbf-4bc0-9372-2ded97ec5271',
            activityName: 'Ratufa indica',
            locality: '48 Northport Junction',
            employee: 'Malorie Featherstonhalgh',
            date: '2023-08',
            time: '6:12 AM',
            registrationCount: 8,
            passed: false
          },
          {
            id: '0b657943-35ec-44d0-940c-18c4f0742d4e',
            activityName: 'Vulpes cinereoargenteus',
            locality: '01429 Butterfield Road',
            employee: 'Sheri Crowch',
            date: '2023-10',
            time: '7:22 PM',
            registrationCount: 11,
            passed: false
          },
          {
            id: '3906fb41-bf25-469c-8cbc-3561515baf23',
            activityName: 'Acrantophis madagascariensis',
            locality: '23347 Dawn Alley',
            employee: 'Conroy Laybourn',
            date: '2024-02',
            time: '5:35 AM',
            registrationCount: 16,
            passed: true
          },
          {
            id: '29008873-2b31-40ce-9357-e27c4623f515',
            activityName: 'Phoenicopterus ruber',
            locality: '29872 Mockingbird Road',
            employee: 'Marve Brotherhed',
            date: '2023-10',
            time: '6:02 AM',
            registrationCount: 10,
            passed: true
          },
          {
            id: '273e2b6a-8587-4995-b13f-e9ba24d0d7c8',
            activityName: 'Ephipplorhynchus senegalensis',
            locality: '40 Pine View Crossing',
            employee: 'Diann Tewes',
            date: '2023-06',
            time: '8:51 PM',
            registrationCount: 9,
            passed: false
          }
        ]
      }
    },
    {
      entities: { query: { current: '2', limit: '10' } },
      data: {
        pagination: {
          limit: 10,
          current: 2,
          count: 100
        },
        rows: [
          {
            id: 'e576a58e-6e63-4a3c-9777-d57f56153f53',
            activityName: 'Vanellus chilensis',
            locality: '9 Northport Drive',
            employee: 'Christopher Nason',
            date: '2023-02',
            time: '12:01 AM',
            registrationCount: 7,
            passed: true
          },
          {
            id: '17152819-3dd0-47e3-a82c-1c7f3a6adfce',
            activityName: 'Canis lupus baileyi',
            locality: '3 Bunker Hill Road',
            employee: 'Hope Barmadier',
            date: '2024-02',
            time: '12:51 AM',
            registrationCount: 7,
            passed: false
          },
          {
            id: 'bd674b1f-fc68-4936-bd26-c2c122d4527e',
            activityName: 'Uraeginthus granatina',
            locality: '52830 Forest Dale Trail',
            employee: 'Dew Bestiman',
            date: '2023-11',
            time: '5:04 AM',
            registrationCount: 10,
            passed: true
          },
          {
            id: 'b5be1fed-3060-4ef0-b5b6-3c010607f375',
            activityName: 'Bubulcus ibis',
            locality: '49013 Debs Terrace',
            employee: 'Lanny Jelphs',
            date: '2023-09',
            time: '5:24 PM',
            registrationCount: 10,
            passed: false
          },
          {
            id: '06d640b8-e756-436f-a3e4-849706ecff5d',
            activityName: 'Chauna torquata',
            locality: '84 Michigan Plaza',
            employee: 'Brucie Haskur',
            date: '2024-03',
            time: '6:14 PM',
            registrationCount: 13,
            passed: true
          },
          {
            id: 'e9c207b0-f3fe-469b-9b85-7fbbb63cb81f',
            activityName: 'Rhabdomys pumilio',
            locality: '71752 Grasskamp Alley',
            employee: 'Gage Scarlett',
            date: '2023-10',
            time: '7:40 PM',
            registrationCount: 19,
            passed: true
          },
          {
            id: '64c9c632-c769-4e9b-8edc-3d742b94a089',
            activityName: 'Francolinus swainsonii',
            locality: '0307 Tomscot Drive',
            employee: 'Lynsey Donkersley',
            date: '2023-11',
            time: '6:21 AM',
            registrationCount: 10,
            passed: true
          },
          {
            id: '85a4daa8-d2e6-42af-a3d4-05d8d34ab688',
            activityName: 'Nyctanassa violacea',
            locality: '77 Moulton Crossing',
            employee: 'Mil Lazer',
            date: '2024-02',
            time: '3:29 PM',
            registrationCount: 12,
            passed: false
          },
          {
            id: '39ebfa53-0f3b-4859-9110-104a15ad8dc3',
            activityName: 'Ictonyx striatus',
            locality: '7 Hazelcrest Parkway',
            employee: 'Duffy Harmes',
            date: '2023-04',
            time: '12:48 PM',
            registrationCount: 7,
            passed: true
          },
          {
            id: '169aa914-554a-4f51-8312-1ab4594da197',
            activityName: 'Mustela nigripes',
            locality: '749 Bashford Avenue',
            employee: 'Edee Cossom',
            date: '2023-12',
            time: '11:45 AM',
            registrationCount: 10,
            passed: false
          }
        ]
      }
    },
    {
      entities: { query: { current: '1', limit: '10', activity: 'Рисовашки' } },
      data: {
        rows: [
          {
            id: 'e576a58e-6e63-4a3c-9777-d57f56153f53',
            activityName: 'Рисовашки',
            locality: '9 Northport Drive',
            employee: 'Christopher Nason',
            date: '2023-02',
            time: '12:01 AM',
            registrationCount: 7,
            passed: true
          }
        ],
        pagination: { current: 1, count: 1, limit: 10 }
      }
    }
  ]
};
