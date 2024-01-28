import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import type { Table } from '@tanstack/react-table';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';
import { renderPageButtons } from '@/utils/helpers/renderPageButtons';

import type { Application } from '../../types';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export const TablePagination: React.FC<DataTablePaginationProps<Application>> = ({ table }) => {
  const { pageIndex } = table.getState().pagination;
  const pageCount = table.getPageCount();

  return (
    <div className='flex flex-col-reverse items-center justify-end gap-2 space-x-2 py-4 md:flex-row'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {table.getFilteredSelectedRowModel().rows.length} <I18nText path='pagination.text.from' />{' '}
        {table.getFilteredRowModel().rows.length} <I18nText path='pagination.text.selected' />
      </div>
      <div className='flex flex-col-reverse items-center gap-2 space-x-2 md:flex-row'>
        <span className='text-b text-sm font-semibold'>
          {pageCount < 10 ? `0${pageIndex + 1}` : pageIndex}{' '}
          <I18nText path='pagination.text.page' /> <I18nText path='pagination.text.from' />{' '}
          {pageCount}
        </span>
        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className='border-none'
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
                className='h-8 w-8 rounded-lg border border-secondary font-normal'
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
                className='h-8 w-8 rounded-lg border border-secondary font-normal'
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
            className='border-none'
          >
            <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
          </Button>
        </div>
      </div>
    </div>
  );
};
