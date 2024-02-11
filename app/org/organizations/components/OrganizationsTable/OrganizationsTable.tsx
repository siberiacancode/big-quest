'use client';

import { useDataTable } from '@/components/common/DateTable/hooks/useDataTable';
import {
  DataTable,
  DataTableBody,
  DataTableComponent,
  DataTableHeader,
  DataTablePagination,
  DataTableBottomContent,
  DataTableSelectedLabel,
  DataTableToolbar
} from '@/components/ui';

import { columns } from './constants/columns';
import { convertOrganizationsToTableRows } from './helpers/convertOrganizationsToTableRows';
import { useOrganizationsTable } from './hooks/useOrganizationsTable';

interface OrganizationsTableProps {
  organizations: OrganizationResponse[];
  pagination: PaginationResponse;
}

export const OrganizationsTable = ({ organizations, pagination }: OrganizationsTableProps) => {
  const rows = convertOrganizationsToTableRows(organizations);
  const table = useDataTable(rows, columns);
  const { functions, state } = useOrganizationsTable();

  return (
    <DataTable table={table} columns={columns} rows={rows}>
      <DataTableToolbar toolbar={state.toolbar} />
      <DataTableComponent>
        <DataTableHeader />
        <DataTableBody />
      </DataTableComponent>
      <DataTableBottomContent>
        <DataTableSelectedLabel count={pagination.count} />
        <DataTablePagination pagination={pagination} onClick={functions.onPaginationButtonClick} />
      </DataTableBottomContent>
    </DataTable>
  );
};
