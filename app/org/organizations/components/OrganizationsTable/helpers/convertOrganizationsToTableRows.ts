export interface OrganizationsTableRow {
  id: string;
  name: string;
  stage: string;
  type: string;
  daysAmount: string;
  location: string;
  rate: string;
}

export const convertOrganizationsToTableRows = (
  organizations: OrganizationResponse[]
): OrganizationsTableRow[] =>
  organizations.map((organization) => ({
    id: organization.id,
    daysAmount: '-',
    location: organization?.information?.city ?? '-',
    name: organization.name ?? '-',
    rate: '-',
    stage: `organization.stage.${organization.stage.toLowerCase()}`,
    type: `organization.legalType.${organization.type.toLowerCase()}`
  }));
