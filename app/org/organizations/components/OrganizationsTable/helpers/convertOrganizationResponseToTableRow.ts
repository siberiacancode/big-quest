export const convertOrganizationsResponseToTableRows = (
  organizations: OrganizationResponse[]
): OrganizationsTableRow[] =>
  organizations?.map((organization) => ({
    id: organization.id,
    daysAmount: '-',
    location: organization?.information?.city ?? '-',
    name: organization.name,
    rate: '-',
    stage: `organization.stage.${organization.stage.toLowerCase()}`,
    type: `organization.legalType.${organization.type.toLowerCase()}`
  }));
