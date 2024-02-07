import React from 'react';

import { useSearchParams } from '@/utils/hooks';

export interface UseDataTableFacetedFilterParams {
  columnName: string;
}

export const useDataTableFacetedFilter = ({ columnName }: UseDataTableFacetedFilterParams) => {
  const { searchParams, setSearchParam } = useSearchParams();
  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    searchParams.getAll(columnName)
  );

  const onFilterSelect = (values: string[]) => {
    setSelectedValues(values);
    setSearchParam(columnName, values);
  };

  return { state: { selectedValues }, functions: { onFilterSelect } };
};
