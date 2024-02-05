import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useDataTablePagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onPaginationButtonClick = (pageIndex: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.set('offset', String(pageIndex));

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };

  return { functions: { onPaginationButtonClick } };
};
