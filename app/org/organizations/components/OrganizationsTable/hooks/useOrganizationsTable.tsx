import { useDebounceCallback } from 'usehooks-ts';

import { useSearchParams } from '@/utils/hooks';

import { useOrganizationsTableToolbar } from './useOrganizationsTableToolbar';

const FILTER_INPUT_DELAY = 500;

export const useOrganizationsTable = () => {
  const { searchParams, setSearchParam } = useSearchParams();
  const organizationFilter = searchParams.get('organization');

  const onOrganizationFilterChange = useDebounceCallback(
    (value: string) => setSearchParam('organization', value),
    FILTER_INPUT_DELAY
  );

  const { toolbar } = useOrganizationsTableToolbar({
    onOrganizationFilterChange,
    organizationFilter
  });

  return {
    state: { toolbar }
  };
};
