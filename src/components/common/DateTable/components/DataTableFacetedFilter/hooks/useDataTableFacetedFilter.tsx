import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export interface UseDataTableFacetedFilterParams {
  columnName: string;
}

export const useDataTableFacetedFilter = ({ columnName }: UseDataTableFacetedFilterParams) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const onFilterSelect = (values: string[]) => {
    setSelectedValues(values);

    const current = new URLSearchParams(Array.from(searchParams.entries()));

    values.forEach((value) => {
      current.set(columnName, value);

      const search = current.toString();
      const query = search ? `?${search}` : '';

      router.push(`${pathname}${query}`);
    });
  };

  return { state: { selectedValues }, functions: { onFilterSelect } };
};
