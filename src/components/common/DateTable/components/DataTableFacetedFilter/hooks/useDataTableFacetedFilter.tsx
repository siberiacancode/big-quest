import React from 'react';

import { useSearchParams } from '@/utils/hooks';

export interface UseDataTableFacetedFilterParams {
  columnName: string;
}

export const useDataTableFacetedFilter = ({ columnName }: UseDataTableFacetedFilterParams) => {
  const { setSearchParam } = useSearchParams();
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const onFilterSelect = (values: string[]) => {
    setSelectedValues(values);
    setSearchParam(columnName, values);
  };

  return { state: { selectedValues }, functions: { onFilterSelect } };
};
