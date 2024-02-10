import {
  Button,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui';

import { getPageIndex } from './helpers/getPageIndex';
import { getPaginationNumbers } from './helpers/getPaginationNumbers';

interface DataTablePaginationProps {
  pagination: PaginationResponse;
  onPaginationButtonClick: (page: number) => void;
}

export const DataTablePagination = ({
  pagination: { count, current, limit },
  onPaginationButtonClick
}: DataTablePaginationProps) => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href='#' onClick={() => onPaginationButtonClick(current - 1)} />
      </PaginationItem>
      {getPaginationNumbers({ current, count, limit }).map((page) => (
        <PaginationItem>
          {page === '...' && <PaginationEllipsis />}
          {page !== '...' && (
            <Button
              key={page}
              variant={current === page ? 'secondary' : 'outline'}
              size='sm'
              className='h-8 w-8 rounded-lg border border-secondary font-normal'
              onClick={() => onPaginationButtonClick(page)}
            >
              {getPageIndex(page)}
            </Button>
          )}
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationNext href='#' onClick={() => onPaginationButtonClick(current + 1)} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

// return (
//   <div className='flex flex-col-reverse items-center justify-end gap-2 space-x-2 py-3 md:flex-row'>
//     <span className='text-b text-sm font-semibold'>
//       {getPageIndex(current)} <I18nText path='pagination.page' />{' '}
//       <I18nText path='pagination.from' /> {getPageCount(limit, count)}
//     </span>
//     <div className='flex items-center gap-2'>
//       <Button
//         variant='outline'
//         size='sm'
//         disabled={current === 1}
//         className='border-none'
//         onClick={() => onPaginationButtonClick(current - 1)}
//       >
//         <ChevronLeftIcon className='h-6 w-6 stroke-2' />
//       </Button>

//       {getPaginationNumbers({ current, count, limit }).map((page) => (
//         <React.Fragment key={page}>
//           {page === '...' && <p>{page}</p>}
//           {page !== '...' && (
//             <Button
//               key={page}
//               variant={current === page ? 'secondary' : 'outline'}
//               size='sm'
//               className='h-8 w-8 rounded-lg border border-secondary font-normal'
//               onClick={() => onPaginationButtonClick(page)}
//             >
//               {getPageIndex(page)}
//             </Button>
//           )}
//         </React.Fragment>
//       ))}

//       <Button
//         variant='outline'
//         size='sm'
//         disabled={current + 1 >= getPageCount(limit, count)}
//         className='border-none'
//         onClick={() => onPaginationButtonClick(current + 1)}
//       >
//         <ChevronRightIcon className='h-6 w-6 stroke-2 font-normal' />
//       </Button>
//     </div>
//   </div>
// );
