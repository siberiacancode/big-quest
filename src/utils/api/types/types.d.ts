export interface Organization {
  id: 'string';
  name: 'string';
  description: 'string';
  inn: 'string';
  information: {
    contactName: 'string';
    phone: 'string';
    email: 'string';
    site: 'string';
    city: 'string';
    social: 'string';
    fullNameOfTheLegalEntity: 'string';
    legalAddress: 'string';
    postAggress: 'string';
    inn: 'string';
    kpp: 'string';
    ogrn: 'string';
  };
  addresses: [
    {
      locality: 'string';
      street: 'string';
      house: 'string';
      details: 'string';
      workingHours: [null];
    }
  ];
  requisites: {
    bank: 'string';
    bik: 'string';
    checkingAccount: 'string';
  };
  stage: 'REQUEST';
  type: 'PARTNER';
  createdAt: 'PARTNER';
  updatedAt: 'PARTNER';
}
