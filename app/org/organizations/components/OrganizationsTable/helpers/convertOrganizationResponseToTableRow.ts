export const convertOrganizationsResponseToTableRows = (
  organizations: OrganizationResponse[]
): OrganizationsTableRow[] =>
  organizations.map((organization) => ({
    daysAmount: 0,
    location: organization.addresses[0]?.locality ?? '',
    name: organization.name,
    rate: 0,
    stage: organization.stage,
    type: organization.type
  }));
