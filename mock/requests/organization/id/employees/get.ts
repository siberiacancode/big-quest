import type { RestRequestConfig } from 'mock-config-server';

export const getOrganizationEmployees: RestRequestConfig = {
  path: '/organization/:id/employees',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: '909ddfab-9c32-4d78-88d2-366de0814b76',
          name: 'Arthur',
          surname: 'Morgan',
          email: 'katinalang@bunga.com',
          role: 'Manager',
          phone: '+7 (927) 424-3144',
          status: 'active',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        },
        {
          id: '59780ef9-391c-42ff-8141-080c2dc2db13',
          name: 'Dutch',
          surname: 'van der Linde',
          email: 'letafoster@coash.com',
          role: 'Manager',
          phone: '+7 (809) 521-3230',
          status: 'active',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        },
        {
          id: 'b92e8d44-0e12-4cb1-9d4a-7c4de50987a3',
          name: 'Sadie',
          surname: 'Adler',
          email: 'jimmiemathis@tasmania.com',
          role: 'Manager',
          phone: '+7 (948) 476-3906',
          status: 'active',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        },
        {
          id: '769c3212-82ef-4da1-900d-3e69f7aa2ec6',
          name: 'John',
          surname: 'Marston',
          email: 'mccrayharding@kidgrease.com',
          role: 'Manager',
          phone: '+7 (981) 522-3212',
          status: 'active',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        },
        {
          id: '72ffc9af-2185-44db-a962-ad749525505c',
          name: 'Susan',
          surname: 'Grimshaw',
          email: 'maribelowens@liquicom.com',
          role: 'Manager',
          phone: '+7 (929) 545-2962',
          status: 'active',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        },
        {
          id: '6280b394-7a6e-44b5-8d5e-a57f42901da6',
          name: 'Javier',
          surname: 'Escuella',
          email: 'sylviacalderon@veraq.com',
          role: 'Manager',
          phone: '+7 (859) 535-3975',
          status: 'inactive',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        },
        {
          id: '51601aaa-4e8f-4a9a-8964-84a684c0c43a',
          name: 'Michael',
          surnmae: 'de Santa',
          email: 'douglasprice@calcula.com',
          role: 'Manager',
          phone: '+7 (959) 483-3327',
          status: 'inactive',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        },
        {
          id: '64dc37a5-3e28-4dac-9af7-2ae06f697356',
          name: 'Trevor',
          surname: 'Phillips',
          email: 'hilldyer@cincyr.com',
          role: 'Manager',
          phone: '+7 (908) 430-3932',
          status: 'inactive',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        },
        {
          id: 'be394658-eb7a-422d-8495-884b15861613',
          name: 'Franklin',
          surname: 'Clinton',
          email: 'dodsonchang@menbrain.com',
          role: 'Manager',
          phone: '+7 (894) 515-2053',
          status: 'inactive',
          image: 'http://localhost:31299/api/1.0/static/employees/avatar.webp'
        }
      ],
      entities: { params: { id: 1 } }
    }
  ]
};
