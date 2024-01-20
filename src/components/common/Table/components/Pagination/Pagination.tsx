import * as React from 'react';
import type { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';

import type { Application } from '../../data/types';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export const Pagination: React.FC<DataTablePaginationProps<Application>> = ({ table }) => {
  return (
    <div className='flex items-center justify-end space-x-2 py-4'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className='space-x-2'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
