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
          phone: '(927) 424-3144',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        },
        {
          id: '59780ef9-391c-42ff-8141-080c2dc2db13',
          name: 'Dutch',
          surname: 'van der Linde',
          email: 'letafoster@coash.com',
          role: 'Manager',
          phone: '(809) 521-3230',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        },
        {
          id: 'b92e8d44-0e12-4cb1-9d4a-7c4de50987a3',
          name: 'Sadie',
          surname: 'Adler',
          email: 'jimmiemathis@tasmania.com',
          role: 'Manager',
          phone: '(948) 476-3906',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        },
        {
          id: '769c3212-82ef-4da1-900d-3e69f7aa2ec6',
          name: 'John',
          surname: 'Marston',
          email: 'mccrayharding@kidgrease.com',
          role: 'Manager',
          phone: '(981) 522-3212',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        },
        {
          id: '72ffc9af-2185-44db-a962-ad749525505c',
          name: 'Susan',
          surname: 'Grimshaw',
          email: 'maribelowens@liquicom.com',
          role: 'Manager',
          phone: '(929) 545-2962',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        },
        {
          id: '6280b394-7a6e-44b5-8d5e-a57f42901da6',
          name: 'Javier',
          surname: 'Escuella',
          email: 'sylviacalderon@veraq.com',
          role: 'Manager',
          phone: '(859) 535-3975',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        },
        {
          id: '51601aaa-4e8f-4a9a-8964-84a684c0c43a',
          name: 'Michael',
          surnmae: 'de Santa',
          email: 'douglasprice@calcula.com',
          role: 'Manager',
          phone: '(959) 483-3327',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        },
        {
          id: '64dc37a5-3e28-4dac-9af7-2ae06f697356',
          name: 'Trevor',
          surname: 'Phillips',
          email: 'hilldyer@cincyr.com',
          role: 'Manager',
          phone: '(908) 430-3932',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        },
        {
          id: 'be394658-eb7a-422d-8495-884b15861613',
          name: 'Franklin',
          surname: 'Clinton',
          email: 'dodsonchang@menbrain.com',
          role: 'Manager',
          phone: '(894) 515-2053',
          image: 'http://localhost:31299/api/1.0/static/employees/RDR2_Arthur_Morgan_Default.webp'
        }
      ],
      entities: { params: { id: 1 } }
    }
  ]
};
