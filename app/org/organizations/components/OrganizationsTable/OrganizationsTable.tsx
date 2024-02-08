'use client';

import { DataTable } from '@/components/common';

import { columns } from './constants/columns';
import { convertOrganizationsResponseToTableRows } from './helpers/convertOrganizationResponseToTableRow';
import { useOrganizationsTable } from './hooks/useOrganizationsTable';

interface OrganizationsTableProps {
  organizations: OrganizationResponse[];
  pagination: PaginationResponse;
}

export const OrganizationsTable = ({ organizations, pagination }: OrganizationsTableProps) => {
  const { state } = useOrganizationsTable();

  return (
    <DataTable
      data={convertOrganizationsResponseToTableRows(organizations)}
      columns={columns}
      pagination={pagination}
      toolbar={state.toolbar}
    />
  );
};
