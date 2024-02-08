import React from 'react';

import { useSearchParams } from '@/utils/hooks';

export interface UseDataTableFacetedFilterParams {
  columnName: string;
}

export const useDataTableFacetedFilter = ({ columnName }: UseDataTableFacetedFilterParams) => {
  const { searchParams, setSearchParams } = useSearchParams();
  const [selectedValues, setSelectedValues] = React.useState<string[]>(() =>
    searchParams.getAll(columnName)
  );

  const onFilterSelect = (values: string[]) => {
    setSearchParams([
      { key: columnName, value: values },
      { key: 'current', value: '1' }
    ]);

    setSelectedValues(values);
  };

  return { state: { selectedValues }, functions: { onFilterSelect } };
};
