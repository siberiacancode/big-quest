'use client';

import { DataTable } from '@/components/common';

import { columns } from './constants/columns';
import { convertOrganizationsToTableRows } from './helpers/convertOrganizationsToTableRows';
import { useOrganizationsTable } from './hooks/useOrganizationsTable';

interface OrganizationsTableProps {
  organizations: OrganizationResponse[];
  pagination: PaginationResponse;
}

export const OrganizationsTable = ({ organizations, pagination }: OrganizationsTableProps) => {
  const { functions, state } = useOrganizationsTable();

  return (
    <DataTable
      data={convertOrganizationsToTableRows(organizations)}
      columns={columns}
      pagination={pagination}
      onPaginationButtonClick={functions.onPaginationButtonClick}
      toolbar={state.toolbar}
    />
  );
};
