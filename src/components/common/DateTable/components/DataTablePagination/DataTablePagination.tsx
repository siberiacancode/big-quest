import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';

import { getPageCount } from './helpers/getPageCount';
import { getPageIndex } from './helpers/getPageIndex';
import { getPaginationNumbers } from './helpers/getPaginationNumbers';
import { useDataTablePagination } from './hooks/useDataTablePagination';

interface DataTablePaginationProps extends PaginationResponse {}

export const DataTablePagination = ({ count, current, limit }: DataTablePaginationProps) => {
  const { functions } = useDataTablePagination();

  return (
    <div className='flex flex-col-reverse items-center justify-end gap-2 space-x-2 py-3 md:flex-row'>
      <span className='text-b text-sm font-semibold'>
        {getPageIndex(current)} <I18nText path='pagination.page' />{' '}
        <I18nText path='pagination.from' /> {getPageCount(limit, count)}
      </span>
      <div className='flex items-center gap-2'>
        <Button
          variant='outline'
          size='sm'
          disabled={current === 1}
          className='border-none'
          onClick={() => functions.onPaginationButtonClick(current - 1)}
        >
          <ChevronLeftIcon className='h-6 w-6 stroke-2' />
        </Button>

        {getPaginationNumbers({ current, count, limit }).map((page) => (
          <React.Fragment key={page}>
            {page === '...' && <p>{page}</p>}
            {page !== '...' && (
              <Button
                key={page}
                variant={current === page ? 'secondary' : 'outline'}
                size='sm'
                className='h-8 w-8 rounded-lg border border-secondary font-normal'
                onClick={() => functions.onPaginationButtonClick(page)}
              >
                {getPageIndex(page)}
              </Button>
            )}
          </React.Fragment>
        ))}

        <Button
          variant='outline'
          size='sm'
          disabled={current + 1 >= getPageCount(limit, count)}
          className='border-none'
          onClick={() => functions.onPaginationButtonClick(current + 1)}
        >
          <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
        </Button>
      </div>
    </div>
  );
};
