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
      <div className='space-x-2'>
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

        {/* <Button
          variant='outline'
          size='sm'
          onClick={() => table.setPageIndex(0)}
          disabled={table.getState().pagination.pageIndex === 0}
        >
          1
        </Button> */}

        {renderPageButtons({ table })}

        {/* <Button
          variant='outline'
          size='sm'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={table.getState().pagination.pageIndex === table.getPageCount() - 1}
        >
          {table.getPageCount()}
        </Button> */}
        <ChevronRightIcon className='inline-flex h-8 w-8' />
        {/* <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon />
        </Button> */}
      </div>
    </div>
  );
};
