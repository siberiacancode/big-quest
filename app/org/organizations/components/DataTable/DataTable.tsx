'use client';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { Table } from '@/components/ui/table';

import { DataTableBody } from './components/DataTableBody/DataTableBody';
import { DataTableFilters } from './components/DataTableFilters/DataTableFilters';
import { DataTableHeader } from './components/DataTableHeader/DataTableHeader';
import { TablePagination } from './components/TablePagination/TablePagination';
import { columns } from './constants/columns';
import { useDataTable } from './hooks/useDataTable';
import type { Application } from './types';

interface DataTableProps {
  data: Application[];
}

export const DataTable = ({ data }: DataTableProps) => {
  const table = useDataTable(data, columns);

  return (
    <div className=' mt-10 w-full rounded-md bg-background p-4'>
      <DataTableFilters table={table} />
      <div className='rounded-md border'>
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} />
        </Table>
      </div>
      <div className='flex items-center justify-between mdx:flex-col'>
        <Typography variant='sub3' tag='p' className='text-muted-foreground mdx:pt-2'>
          {table.getFilteredSelectedRowModel().rows.length} <I18nText path='pagination.from' />{' '}
          {table.getFilteredRowModel().rows.length} <I18nText path='pagination.selected' />
        </Typography>
        <TablePagination />
      </div>
    </div>
  );
};
