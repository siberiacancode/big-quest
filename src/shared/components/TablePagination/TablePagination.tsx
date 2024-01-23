import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import type { Application } from '@/features/organizations/components/Table/types';
import { renderPageButtons } from '@/features/organizations/helpers/renderPageButtons';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export const TablePagination: React.FC<DataTablePaginationProps<Application>> = ({ table }) => {
  const { pageIndex } = table.getState().pagination;
  const pageCount = table.getPageCount();

  return (
    <div className='flex items-center justify-end space-x-2 py-4'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {table.getFilteredSelectedRowModel().rows.length} из{' '}
        {table.getFilteredRowModel().rows.length} выбрано
      </div>
      <div className='flex items-center space-x-2'>
        <span className='text-b text-sm font-semibold'>
          {pageCount < 10 ? `0${pageCount + 1}` : pageCount} страница из {pageCount}
        </span>

        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='border-none '
        >
          <ChevronLeftIcon className='h-6 w-6 stroke-2' />
        </Button>
        {pageIndex > 2 && (
          <>
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.setPageIndex(0)}
              disabled={pageIndex === 0}
              className='h-8 w-8 rounded-lg border border-breadboard font-normal'
            >
              01
            </Button>
            {pageIndex > 3 && <span className='text-b mx-1 text-sm font-bold'>...</span>}
          </>
        )}
        {renderPageButtons({ table })}
        {pageIndex < pageCount - 3 && (
          <>
            {pageIndex < pageCount - 4 && (
              <span className='text-b mx-1 text-sm font-bold'>...</span>
            )}
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.setPageIndex(pageCount - 1)}
              disabled={pageIndex === pageCount - 1}
              className='h-8 w-8 rounded-lg border border-breadboard font-normal'
            >
              {pageCount < 10 ? `0${pageCount}` : pageCount}
            </Button>
          </>
        )}
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className='border-none '
        >
          <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
        </Button>
      </div>
    </div>
  );
};
