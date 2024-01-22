import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { renderPageButtons } from '@/features/organizations/helpers/renderPageButtons';

import type { Application } from '../../../features/organizations/components/Table/types';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export const TablePagination: React.FC<DataTablePaginationProps<Application>> = ({ table }) => {
  return (
    <div className='flex items-center justify-end space-x-2 py-4'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className='flex items-center space-x-2'>
        <span className='text-b text-sm font-bold'>
          {table.getState().pagination.pageIndex + 1} страница из {table.getPageCount()}
        </span>

        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon />
        </Button>

        {renderPageButtons({ table })}
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};
