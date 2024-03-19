import type { RestRequestConfig } from 'mock-config-server';

export const getOrganizationConfig: RestRequestConfig = {
  path: '/organization',
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
            name: 'Ankunding - Stokes',
            locality: '16209 E Market Street Suite 812',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '41b55bee-67bf-48bb-bb49-a9cfe78dfa7a'
          },
          {
            name: 'Barrows - Roberts',
            locality: '6670 N Broadway Street Apt. 583',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '40d1c089-39eb-465c-8651-c68cbf11b725'
          },
          {
            name: 'Bartoletti, Cremin and Raynor',
            locality: '95540 Riverside Avenue Suite 499',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '88aa5df3-5773-43e0-be50-f78f457a5bed'
          },
          {
            name: 'Bartoletti, Wiegand and Haag',
            locality: '7347 Antonio Meadows Suite 928',
            stage: 'CONCLUSION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '6a67629c-6197-4fbe-b6b7-5f74210b8f60'
          },
          {
            name: 'Barton - Towne',
            locality: '66900 Wehner Pike Apt. 936',
            stage: 'REQUEST',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '92930682-c2a8-4ec8-b7a5-a5641e5abb28'
          },
          {
            name: 'Bashirian - Schneider',
            locality: '1053 S 6th Street Suite 554',
            stage: 'NEGOTIATION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '9aee08e4-5ef9-45b3-aaa5-fb837c28a6e6'
          },
          {
            name: 'Beatty - Bogisich',
            locality: '40297 Woodlands Avenue Suite 845',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '5483abcf-5401-4bda-9e29-6ff1e3de001a'
          },
          {
            name: 'Becker Group',
            locality: '3747 Station Road Apt. 323',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '7b7a874b-cca0-491c-9340-3cd0d82f8875'
          },
          {
            name: 'Beier, Murazik and Predovic',
            locality: '79729 Flatley Highway Apt. 887',
            stage: 'CONCLUSION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '365',
            id: 'b230aebd-35dd-4695-aa41-28d3efa5870e'
          },
          {
            name: 'Blanda - Carroll',
            locality: '960 Russell Street Suite 836',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '88336ba0-3841-4a77-b7b1-8c310cd697d8'
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
            name: 'Blanda LLC',
            locality: '38622 Jacobs Extension Apt. 990',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '31',
            id: '5a100532-fb06-4ea4-bf38-4b437a68cf68'
          },
          {
            name: 'Bogisich and Sons',
            locality: '361 Wisozk Neck Apt. 417',
            stage: 'CONCLUSION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '31',
            id: '373838f4-b113-4f38-9efd-2c216a9c8ee2'
          },
          {
            name: 'Borer, Hamill and King',
            locality: '3637 Joaquin Way Suite 314',
            stage: 'REQUEST',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: 'bb02448f-19c4-496f-b274-b8078145f0d1'
          },
          {
            name: 'Borer, Hessel and Rolfson',
            locality: '1652 Donnelly Alley Suite 519',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '645c2f33-9290-4680-a63c-8725ebffbd02'
          },
          {
            name: 'Boyle - Homenick',
            locality: '244 State Line Road Suite 194',
            stage: 'REQUEST',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '184',
            id: 'd321bee2-f14e-4dfb-a8e1-1a04d4b856c3'
          },
          {
            name: 'Collins and Sons',
            locality: '529 Amina Wall Apt. 232',
            stage: 'NEGOTIATION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '92',
            id: 'cb256f94-fbaf-4f71-b4c6-edff0cd71954'
          },
          {
            name: 'Conroy - Shields',
            locality: '5854 Buford Green Apt. 935',
            stage: 'REQUEST',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '31',
            id: '051445c6-d415-45d8-81d1-05fd61621106'
          },
          {
            name: 'Cormier, Barrows and Gorczany',
            locality: '20431 Runte Heights Suite 978',
            stage: 'NEGOTIATION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '365',
            id: '6d2b697e-a85c-4ee6-84fd-01bcc8fbe0a6'
          },
          {
            name: 'Cremin, Nienow and Wuckert',
            locality: '668 Ryley Throughway Suite 239',
            stage: 'CONCLUSION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '92',
            id: 'd9fce041-f224-45b8-a26f-ead8ed68eb9d'
          },
          {
            name: "D'Amore - Rempel",
            locality: '5276 Elyssa Camp Suite 233',
            stage: 'CONCLUSION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '31',
            id: 'd1ef1d2f-5632-4790-92c4-eaaed11b6f71'
          }
        ]
      }
    },
    {
      entities: { query: { current: '1', limit: '10', stage: 'CONCLUSION' } },
      data: {
        pagination: {
          limit: 10,
          current: 1,
          count: 35
        },
        rows: [
          {
            name: 'Gleason, Greenfelder and Kreiger',
            locality: '64901 Emanuel Terrace Suite 601',
            stage: 'CONCLUSION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '02a94658-6dd5-4457-b948-d7293017a4c8'
          },
          {
            name: 'Haley - Gorczany',
            locality: '9130 S Park Street Apt. 274',
            stage: 'CONCLUSION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '31',
            id: 'c99a6e09-5ae5-4dcb-9102-81d95ca5eb9b'
          },
          {
            name: 'Hudson LLC',
            locality: '92532 Langworth Crescent Suite 251',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: 'bd4bdeee-3dbe-48ee-af24-576d66f13382'
          },
          {
            name: 'Jerde - Hettinger',
            locality: '2389 S Oak Street Suite 555',
            stage: 'CONCLUSION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '365',
            id: '4d72b603-50fe-4ea2-8ce0-8f210c8e20c9'
          },
          {
            name: 'Kiehn, Franecki and Orn',
            locality: '52837 Mill Road Suite 970',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '31',
            id: '5c240429-d75d-4f53-8bd1-a1d73e396bcd'
          },
          {
            name: 'Koch, Reichert and Nitzsche',
            locality: '68877 Cecilia Canyon Apt. 767',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '3d96649a-1f0e-4ba7-86ea-74ff80065f8a'
          },
          {
            name: 'Koepp, Mante and White',
            locality: '3828 Chapel Road Suite 411',
            stage: 'CONCLUSION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '964ecdd8-2b33-4a25-a195-1641d36020da'
          },
          {
            name: 'Krajcik - Will',
            locality: '12848 Predovic Glens Suite 773',
            stage: 'CONCLUSION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '50985d0a-3cfa-4e96-8f13-d125720a2d99'
          },
          {
            name: 'Kreiger, Deckow and Sauer',
            locality: '95072 Wilkinson Ports Suite 613',
            stage: 'CONCLUSION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '31',
            id: 'b3ef3494-9252-4272-b5d7-9930187f3a19'
          },
          {
            name: 'Kreiger - Stark',
            locality: '52532 Eusebio Parkway Suite 234',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '365',
            id: '55bf348f-7195-46c4-92dc-08ea1a3ef42c'
          }
        ]
      }
    },
    {
      entities: {
        query: { current: '1', limit: '10', stage: 'NEGOTIATION' }
      },
      data: {
        pagination: {
          limit: 10,
          current: 1,
          count: 32
        },
        rows: [
          {
            name: 'Ferry, Bode and Olson',
            locality: '7293 Graham Landing Suite 533',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '16423bc3-18bd-4c5a-965d-804c0d0bf4ea'
          },
          {
            name: 'Fisher - Treutel',
            locality: '57197 Watery Lane Apt. 405',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: 'f69602d4-1caf-4f21-a855-7a722162882e'
          },
          {
            name: 'Gleason - Williamson',
            locality: '5094 Bonita Creek Suite 258',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '92',
            id: 'd80280a5-07ef-41a7-92d3-e364a3faf74f'
          },
          {
            name: 'Gorczany, DuBuque and Emard',
            locality: '95307 Lynch Fords Suite 605',
            stage: 'NEGOTIATION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '365',
            id: 'df5d4587-cc62-4877-8fba-65ee8f17ffb5'
          },
          {
            name: 'Hackett LLC',
            locality: '859 Albany Road Suite 183',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '80eecba8-e799-485d-a9db-4d7f807553ab'
          },
          {
            name: 'Hauck - Herman',
            locality: '73762 Chapel Hill Apt. 306',
            stage: 'NEGOTIATION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '62b83c18-cb64-4e52-b0cd-87f6befff5ad'
          },
          {
            name: 'Huels and Sons',
            locality: '99531 Juvenal Unions Suite 143',
            stage: 'NEGOTIATION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '0c30cbb1-c244-4d59-be6e-907577629834'
          },
          {
            name: 'Jacobson - Lindgren',
            locality: '73640 Jaquan Shoal Suite 424',
            stage: 'NEGOTIATION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '365',
            id: '105744c4-7b17-40b1-a2d4-58f325b5944d'
          },
          {
            name: 'Jerde and Sons',
            locality: '458 Hodkiewicz Lodge Suite 933',
            stage: 'NEGOTIATION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '7a68af98-4675-41c0-95c4-faf2276083de'
          },
          {
            name: 'Krajcik - Spencer',
            locality: '7398 Breitenberg Points Suite 718',
            stage: 'NEGOTIATION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '31',
            id: '67b20b52-fe45-4b7a-85d4-6e817b3d1f8a'
          }
        ]
      }
    },
    {
      entities: {
        query: { current: '1', limit: '10', sort: 'name' }
      },
      data: {
        pagination: {
          limit: 10,
          current: 1,
          count: 100
        },
        rows: [
          {
            name: 'Ankunding - Stokes',
            locality: '16209 E Market Street Suite 812',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '41b55bee-67bf-48bb-bb49-a9cfe78dfa7a'
          },
          {
            name: 'Barrows - Roberts',
            locality: '6670 N Broadway Street Apt. 583',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '40d1c089-39eb-465c-8651-c68cbf11b725'
          },
          {
            name: 'Bartoletti, Cremin and Raynor',
            locality: '95540 Riverside Avenue Suite 499',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '88aa5df3-5773-43e0-be50-f78f457a5bed'
          },
          {
            name: 'Bartoletti, Wiegand and Haag',
            locality: '7347 Antonio Meadows Suite 928',
            stage: 'CONCLUSION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '6a67629c-6197-4fbe-b6b7-5f74210b8f60'
          },
          {
            name: 'Barton - Towne',
            locality: '66900 Wehner Pike Apt. 936',
            stage: 'REQUEST',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '♾️',
            id: '92930682-c2a8-4ec8-b7a5-a5641e5abb28'
          },
          {
            name: 'Bashirian - Schneider',
            locality: '1053 S 6th Street Suite 554',
            stage: 'NEGOTIATION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '9aee08e4-5ef9-45b3-aaa5-fb837c28a6e6'
          },
          {
            name: 'Beatty - Bogisich',
            locality: '40297 Woodlands Avenue Suite 845',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '5483abcf-5401-4bda-9e29-6ff1e3de001a'
          },
          {
            name: 'Becker Group',
            locality: '3747 Station Road Apt. 323',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '7b7a874b-cca0-491c-9340-3cd0d82f8875'
          },
          {
            name: 'Beier, Murazik and Predovic',
            locality: '79729 Flatley Highway Apt. 887',
            stage: 'CONCLUSION',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '365',
            id: 'b230aebd-35dd-4695-aa41-28d3efa5870e'
          },
          {
            name: 'Blanda - Carroll',
            locality: '960 Russell Street Suite 836',
            stage: 'NEGOTIATION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '88336ba0-3841-4a77-b7b1-8c310cd697d8'
          }
        ]
      }
    },
    {
      entities: {
        query: { current: '1', limit: '10', sort: '-name' }
      },
      data: {
        pagination: {
          limit: 10,
          current: 1,
          count: 100
        },
        rows: [
          {
            name: 'Zboncak LLC',
            locality: '57242 Deckow Heights Apt. 673',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '9a8d3762-e0c8-49f4-a556-5dbfa106c0d9'
          },
          {
            name: 'Wyman - Thompson',
            locality: '511 Vladimir Port Suite 601',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '3d9b90d7-0981-4681-b17b-5e85e783cde2'
          },
          {
            name: 'Wyman, Nicolas and Wintheiser',
            locality: '2955 Martin Luther King Jr Boulevard Suite 993',
            stage: 'CONCLUSION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '351190f1-b3a7-40a2-b7a2-c372dbb98cb4'
          },
          {
            name: 'Wintheiser LLC',
            locality: '471 Moen Pass Suite 774',
            stage: 'REQUEST',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '184',
            id: 'a78fee9c-d795-4e1e-bceb-85cac8750aff'
          },
          {
            name: 'Williamson Inc',
            locality: '71907 Federico Underpass Suite 321',
            stage: 'CONCLUSION',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '365',
            id: 'bf98289c-fffe-4aa4-ac87-f710b6ae8b62'
          },
          {
            name: 'Wilderman - Corwin',
            locality: '99337 Barrett Parkway Apt. 353',
            stage: 'REQUEST',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '31',
            id: 'a2fee072-072b-4a56-a7df-3a23a805b6cf'
          },
          {
            name: 'Wiegand LLC',
            locality: '49035 Harrison Street Suite 952',
            stage: 'REQUEST',
            type: 'PARTNER',
            tariff: 'Бесплатный',
            countDays: '184',
            id: '425d81db-4006-4794-91fe-06d34d677e70'
          },
          {
            name: 'Welch LLC',
            locality: '4704 Howell Parkways Suite 266',
            stage: 'REQUEST',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '31',
            id: '0e00a359-f3eb-4e1d-b503-7a71b2d415ef'
          },
          {
            name: 'Weissnat Group',
            locality: '90272 Drew Locks Apt. 887',
            stage: 'REQUEST',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '184',
            id: 'd36fde8a-30ac-4ee0-998d-a0147664544d'
          },
          {
            name: 'Wehner Inc',
            locality: '473 Terry Loaf Suite 588',
            stage: 'REQUEST',
            type: 'FRANCHISEE',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '04a5538f-a2b4-434a-a82f-ad82440b0dde'
          }
        ]
      }
    },
    {
      entities: { query: { current: '1', limit: '10', organization: 'Мега' } },
      data: {
        rows: [
          {
            name: 'Мега проверка поиска',
            locality: '57242 Deckow Heights Apt. 673',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '9a8d3762-e0c8-49f4-a556-5dbfa106c0d9'
          }
        ],
        pagination: { current: 1, count: 1, limit: 10 }
      }
    },
    {
      entities: { query: { current: '1', limit: '10', organization: 'what' } },
      data: { rows: [], pagination: { current: 1, count: 0, limit: 10 } }
    },
    {
      entities: { query: { current: '1', limit: '10', locality: 'г. Томск' } },
      data: {
        rows: [
          {
            name: 'Фильтрация по нас. пункту',
            locality: '57242 Deckow Heights Apt. 673',
            stage: 'CONCLUSION',
            type: 'SPONSOR',
            tariff: 'Бесплатный',
            countDays: '92',
            id: '9a8d3762-e0c8-49f4-a556-5dbfa106c0d9'
          }
        ],
        pagination: { current: 1, count: 1, limit: 10 }
      }
    }
  ]
};
