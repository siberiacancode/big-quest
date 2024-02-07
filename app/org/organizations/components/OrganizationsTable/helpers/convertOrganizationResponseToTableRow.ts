export const convertOrganizationsResponseToTableRows = (
  organizations: OrganizationResponse[]
): OrganizationsTableRow[] =>
  organizations?.map((organization) => ({
    id: organization.id,
    daysAmount: 0,
    location: organization?.information?.city ?? 'Нема',
    name: organization.name,
    rate: 0,
    stage: `organization.stage.${organization.stage.toLowerCase()}`,
    type: `organization.legalType.${organization.type.toLowerCase()}`
  }));
