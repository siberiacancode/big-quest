'use client';

import * as React from 'react';

import { Table } from '@/components/ui/table';
import { useDataTable } from '@/features/organizations/hooks/useDataTable';
import { TablePagination } from '@/shared/components';

import { columns } from './data/columns';
import { data } from './data/data';
import { DataTableBody, DataTableFilters, DataTableHeader } from './components';

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
