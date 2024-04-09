'use client';

import React from 'react';

import { I18nText } from '@/components/common';
import {
  DataTable,
  DataTableBody,
  DataTableBottomContent,
  DataTableComponent,
  DataTableCurrentPageLabel,
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
import { convertActivitiesToTableRows } from './helpers/convertActivitiesToTableRows';
import { useActivitiesTable } from './hooks/useActivitiesTable';

interface ActivitiesTableProps {
  activities: ActivitiesResponse[];
  pagination: PaginationResponse;
}

export const ActivitiesTable = ({ activities, pagination }: ActivitiesTableProps) => {
  const rows = React.useMemo(() => convertActivitiesToTableRows(activities), [activities]);
  const table = useDataTable(rows, columns);
  const { state, functions } = useActivitiesTable();

  return (
    <DataTable
      table={table}
      columns={columns}
      rows={rows}
      loading={state.isLoading}
      pagination={pagination}
    >
      <DataTableToolbar toolbar={state.toolbar} />
      <DataTableComponent>
        <DataTableHeader />
        <DataTableBody />
      </DataTableComponent>
      <DataTableBottomContent>
        <DataTableSelectedLabel>
          {(count, selectedCount) => (
            <>
              {selectedCount} <I18nText path='pagination.from' /> {count}{' '}
              <I18nText path='pagination.selected' />
            </>
          )}
        </DataTableSelectedLabel>
        <div className='flex flex-col-reverse items-center gap-2 py-3 md:flex-row'>
          <DataTableCurrentPageLabel>
            {(count, current, limit) => (
              <Typography variant='sub2' tag='p' className='text-nowrap'>
                {getPageIndex(current)} <I18nText path='pagination.page' />{' '}
                <I18nText path='pagination.from' /> {getPageIndex(getPageCount(limit, count))}
              </Typography>
            )}
          </DataTableCurrentPageLabel>

          <DataTablePagination onClick={functions.onPaginationClick} />
        </div>
      </DataTableBottomContent>
    </DataTable>
  );
};
