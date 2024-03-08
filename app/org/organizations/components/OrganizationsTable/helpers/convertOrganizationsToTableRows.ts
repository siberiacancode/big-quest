export interface OrganizationsTableRow {
  id: string;
  name: string;
  locality: string;
  countDays: string;
  tariff: string;
  stage: string;
  type: string;
}

export const convertOrganizationsToTableRows = (
  organizations: OrganizationListResponse[]
): OrganizationsTableRow[] =>
  organizations.map((organization) => ({
    id: organization.id,
    name: organization.name ?? '-',
    locality: organization.locality ?? '-',
    countDays: organization.countDays ?? '-',
    tariff: organization.tariff ?? '-',
    stage: `organization.stage.${organization.stage.toLowerCase()}`,
    type: `organization.legalType.${organization.type.toLowerCase()}`
  }));
