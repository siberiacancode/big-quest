interface OrganizationInformation {
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
}

interface OrganizationAddresses {
  locality: 'string';
  street: 'string';
  house: 'string';
  details: 'string';
  workingHours: [null];
}

interface OrganizationRequisites {
  bank: 'string';
  bik: 'string';
  checkingAccount: 'string';
}

export interface Organization {
  id: 'string';
  name: 'string';
  description: 'string';
  inn: 'string';
  information: OrganizationInformation;
  addresses: Array<OrganizationAddresses>;
  requisites: OrganizationRequisites;
  stage: StageType;
  type: LegalType;
  createdAt: 'string';
  updatedAt: 'string';
}
