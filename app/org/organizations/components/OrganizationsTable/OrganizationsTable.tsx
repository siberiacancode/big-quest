'use client';

import React from 'react';

import { I18nText } from '@/components/common';
import {
  DataTable,
  DataTableBody,
  DataTableBottomContent,
  DataTableComponent,
  DataTableHeader,
  DataTablePagination,
  DataTableSelectedLabel,
  DataTableToolbar,
  getPageCount,
  getPageIndex,
  Typography,
  useDataTable
} from '@/components/ui';

import { columns } from './constants/columns';
import { convertOrganizationsToTableRows } from './helpers/convertOrganizationsToTableRows';
import { useOrganizationsTable } from './hooks/useOrganizationsTable';

interface OrganizationsTableProps {
  organizations: OrganizationResponse[];
  pagination: PaginationResponse;
}

export const OrganizationsTable = ({ organizations, pagination }: OrganizationsTableProps) => {
  const rows = React.useMemo(() => convertOrganizationsToTableRows(organizations), [organizations]);
  const table = useDataTable(rows, columns);
  const { state, functions } = useOrganizationsTable();

  return (
    <DataTable table={table} columns={columns} rows={rows} loading={state.isLoading}>
      <DataTableToolbar toolbar={state.toolbar} />
      <DataTableComponent>
        <DataTableHeader />
        <DataTableBody />
      </DataTableComponent>
      <DataTableBottomContent>
        <DataTableSelectedLabel count={pagination.count}>
          {(count, selectedCount) => (
            <>
              {selectedCount} <I18nText path='pagination.from' /> {count}{' '}
              <I18nText path='pagination.selected' />
            </>
          )}
        </DataTableSelectedLabel>
        <div className='flex flex-col-reverse items-center gap-2 py-3 md:flex-row'>
          <Typography variant='sub2' tag='p' className='text-nowrap'>
            {getPageIndex(pagination.current)} <I18nText path='pagination.page' />{' '}
            <I18nText path='pagination.from' /> {getPageCount(pagination.limit, pagination.count)}
          </Typography>
          <DataTablePagination pagination={pagination} onClick={functions.onPaginationClick} />
        </div>
      </DataTableBottomContent>
    </DataTable>
  );
};
