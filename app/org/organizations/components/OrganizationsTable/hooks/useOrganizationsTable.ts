import { useDebounceCallback } from 'usehooks-ts';

import { useSearchParams } from '@/utils/hooks';

const FILTER_INPUT_DELAY = 500;

export const useOrganizationsTable = () => {
  const { searchParams, setSearchParam } = useSearchParams();

  const organizationFilter = searchParams.get('organization');

  const onFilterInputChange = useDebounceCallback(
    (value: string) => setSearchParam('organization', value),
    FILTER_INPUT_DELAY
  );

  return { state: { organizationFilter }, functions: { onFilterInputChange } };
};
