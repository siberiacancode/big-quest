import type { RestRequestConfig } from 'mock-config-server';

export const getOrganizationEmployees: RestRequestConfig = {
  path: '/organization/:id/employees',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: '909ddfab-9c32-4d78-88d2-366de0814b76',
          fullname: 'Arthur Morgan',
          email: 'katinalang@bunga.com',
          employeeRole: 'Manager',
          phoneNumber: '(927) 424-3144'
        },
        {
          id: '59780ef9-391c-42ff-8141-080c2dc2db13',
          fullname: 'Dutch van der Linde',
          email: 'letafoster@coash.com',
          employeeRole: 'Manager',
          phoneNumber: '(809) 521-3230'
        },
        {
          id: 'b92e8d44-0e12-4cb1-9d4a-7c4de50987a3',
          fullname: 'Sadie Adler',
          email: 'jimmiemathis@tasmania.com',
          employeeRole: 'Manager',
          phoneNumber: '(948) 476-3906'
        },
        {
          id: '769c3212-82ef-4da1-900d-3e69f7aa2ec6',
          fullname: 'John Marston',
          email: 'mccrayharding@kidgrease.com',
          employeeRole: 'Manager',
          phoneNumber: '(981) 522-3212'
        },
        {
          id: '72ffc9af-2185-44db-a962-ad749525505c',
          fullname: 'Susan Grimshaw',
          email: 'maribelowens@liquicom.com',
          employeeRole: 'Manager',
          phoneNumber: '(929) 545-2962'
        },
        {
          id: '6280b394-7a6e-44b5-8d5e-a57f42901da6',
          fullname: 'Javier Escuella',
          email: 'sylviacalderon@veraq.com',
          employeeRole: 'Manager',
          phoneNumber: '(859) 535-3975'
        },
        {
          id: '51601aaa-4e8f-4a9a-8964-84a684c0c43a',
          fullname: 'Michael de Santa',
          email: 'douglasprice@calcula.com',
          employeeRole: 'Manager',
          phoneNumber: '(959) 483-3327'
        },
        {
          id: '64dc37a5-3e28-4dac-9af7-2ae06f697356',
          fullname: 'Trevor Phillips',
          email: 'hilldyer@cincyr.com',
          employeeRole: 'Manager',
          phoneNumber: '(908) 430-3932'
        },
        {
          id: 'be394658-eb7a-422d-8495-884b15861613',
          fullname: 'Franklin Clinton',
          email: 'dodsonchang@menbrain.com',
          employeeRole: 'Manager',
          phoneNumber: '(894) 515-2053'
        }
      ],
      entities: { params: { id: 1 } }
    }
  ]
};
