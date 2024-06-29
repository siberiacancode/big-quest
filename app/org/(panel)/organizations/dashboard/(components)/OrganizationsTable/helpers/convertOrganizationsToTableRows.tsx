import { InfinityIcon } from 'lucide-react';

import type { OrganizationListResponse } from '@/api-types';

export interface OrganizationsTableRow {
  id: string;
  name: string;
  locality: string;
  countDays: string | JSX.Element;
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
    countDays:
      organization.countDays === 'INFINITY' ? (
        <InfinityIcon className='size-5' />
      ) : (
        organization.countDays
      ),
    tariff: organization.tariff ?? '-',
    stage: `page.organization.stage.${organization.stage.toLowerCase()}`,
    type: `page.organization.legalType.${organization.type.toLowerCase()}`
  }));
