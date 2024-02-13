import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';

const pageIndex: number = 1;
const pageCount: number = 6;

export const TablePagination = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-end gap-2 space-x-2 py-3 md:flex-row'>
      <Typography variant='sub3' tag='p'>
        {pageCount < 10 ? `0${pageIndex + 1}` : pageIndex} <I18nText path='pagination.page' />{' '}
        <I18nText path='pagination.from' /> {pageCount}
      </Typography>
      <div className='flex items-center gap-2'>
        <Button variant='outline' size='sm' disabled={false} className='border-none'>
          <ChevronLeftIcon className='h-6 w-6 stroke-2' />
        </Button>
        <Button
          variant='outline'
          size='sm'
          disabled={pageIndex === 0}
          className='h-8 w-8 rounded-lg border border-secondary font-normal'
        >
          01
        </Button>
        <Typography variant='sub2' tag='p'>
          {pageIndex > 3 && <span className='mx-1'>...</span>}
        </Typography>
        {/* {renderPageButtons({ table })} */}
        {pageIndex < pageCount - 3 && (
          <>
            <Typography variant='sub2' tag='p'>
              {pageIndex < pageCount - 4 && <span className='mx-1'>...</span>}
            </Typography>
            <Button
              variant='outline'
              size='sm'
              disabled={pageIndex === pageCount - 1}
              className='h-8 w-8 rounded-lg border border-secondary font-normal'
            >
              {pageCount < 10 ? `0${pageCount}` : pageCount}
            </Button>
          </>
        )}

        <Button variant='outline' size='sm' disabled={false} className='border-none'>
          <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
        </Button>
      </div>
    </div>
  );
};
