'use client';

import * as React from 'react';

import { Table } from '@/components/ui/table';

import { TablePagination } from '../TablePagination/TablePagination';

import { DataTableBody } from './components/DataTableBody/DataTableBody';
import { DataTableFilters } from './components/DataTableFilters/DataTableFilters';
import { DataTableHeader } from './components/DataTableHeader/DataTableHeader';
import { columns } from './constants/columns';
import { data } from './constants/data';
import { useDataTable } from './hooks/useDataTable';

export const DataTable = () => {
  const table = useDataTable(data, columns);

  return (
    <div className=' mt-10 w-full rounded-md bg-white p-4'>
      <DataTableFilters table={table} />
      <div className='rounded-md border'>
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} />
        </Table>
      </div>
      <TablePagination table={table} />
    </div>
  );
};
