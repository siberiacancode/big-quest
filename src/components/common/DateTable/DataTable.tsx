'use client';

import type { ColumnDef, Table } from '@tanstack/react-table';

import { I18nText } from '@/components/common';
import { Table as TableComponent } from '@/components/ui/table';

import { DataTableBody } from './components/DataTableBody/DataTableBody';
import { DataTableHeader } from './components/DataTableHeader/DataTableHeader';
import { DataTablePagination } from './components/DataTablePagination/DataTablePagination';
import { DataTableToolbar } from './components/DataTableToolbar/DataTableToolbar';
import { useDataTable } from './hooks/useDataTable';

interface DataTableProps<TData> {
  data: TData[];
  pagination: Pagination;
  columns: ColumnDef<TData>[];
  toolbar: (table: Table<TData>) => React.ReactNode[];
}

export const DataTable = <TData,>({
  data,
  pagination,
  columns,
  toolbar
}: DataTableProps<TData>) => {
  const table = useDataTable(data, columns);

  return (
    <div className='mt-10 w-full rounded-md bg-background p-4'>
      <DataTableToolbar table={table} toolbar={toolbar} />
      <div className='rounded-md border'>
        <TableComponent>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} />
        </TableComponent>
      </div>
      <div className='flex items-center justify-between mdx:flex-col'>
        <div className='text-sm text-muted-foreground mdx:pt-2'>
          {table.getFilteredSelectedRowModel().rows.length} <I18nText path='pagination.from' />{' '}
          {pagination.count} <I18nText path='pagination.selected' />
        </div>
        <DataTablePagination {...pagination} />
      </div>
    </div>
  );
};
