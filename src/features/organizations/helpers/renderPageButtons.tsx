import type { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui';

export interface RenderPageButtonsProps<TData> {
  table: Table<TData>;
}

export const renderPageButtons = <TData,>({ table }: RenderPageButtonsProps<TData>) => {
  const pageCount: number = table.getPageCount();
  const currentPage: number = table.getState().pagination.pageIndex + 1;

  const renderPageButton = (page: number) => (
    <Button
      key={page}
      variant='outline'
      size='sm'
      onClick={() => table.setPageIndex(page - 1)}
      disabled={page === currentPage}
      className='rounded-lg'
    >
      {page}
    </Button>
  );

  const pageButtons = [];
  for (
    let page = Math.max(1, currentPage - 2);
    page <= Math.min(pageCount, currentPage + 2);
    page += 1
  ) {
    pageButtons.push(renderPageButton(page));
  }

  return pageButtons;
};
