import { useSearchParams } from '@/utils/hooks';

export const useDataTablePagination = () => {
  const { searchParams, setSearchParam } = useSearchParams();
  const currentParam = Number(searchParams.get('current')) ?? 1;

  const onPaginationButtonClick = (pageIndex: number) =>
    setSearchParam('current', String(pageIndex));

  return { state: { currentParam }, functions: { onPaginationButtonClick } };
};
