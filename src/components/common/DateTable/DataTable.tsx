'use client';

import type { ColumnDef, Table } from '@tanstack/react-table';

import { I18nText } from '@/components/common';
import { Table as TableComponent } from '@/components/ui/table';

import { DataTableBody } from './components/DataTableBody/DataTableBody';
import { DataTableHeader } from './components/DataTableHeader/DataTableHeader';
import { DataTablePagination } from './components/DataTablePagination/DataTablePagination';
import { DataTableToolbar } from './components/DataTableToolbar/DataTableToolbar';
import { useDataTable } from './hooks/useDataTable';

interface DataTableProps<Data> {
  rows: Data[];
  pagination: PaginationResponse;
  columns: ColumnDef<Data>[];
  toolbar: (table: Table<Data>) => React.ReactNode[];
  onPaginationButtonClick: (page: number) => void;
}

export const DataTable = <Data,>({
  rows,
  pagination,
  columns,
  toolbar,
  onPaginationButtonClick
}: DataTableProps<Data>) => {
  const table = useDataTable(rows, columns);

  return (
    <div className='mt-10 w-full rounded-md bg-background p-4'>
      <DataTableToolbar table={table} toolbar={toolbar} />
      <div className='rounded-md border'>
        <TableComponent>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} />
        </TableComponent>
      </div>
      {!!pagination.count && (
        <div className='mt-8 flex items-center justify-between mdx:flex-col'>
          <div className='text-sm text-muted-foreground mdx:pt-2'>
            {table.getFilteredSelectedRowModel().rows.length} <I18nText path='pagination.from' />{' '}
            {pagination.count} <I18nText path='pagination.selected' />
          </div>
          <div>
            <DataTablePagination
              onPaginationButtonClick={onPaginationButtonClick}
              pagination={pagination}
            />
          </div>
        </div>
      )}
    </div>
  );
};
