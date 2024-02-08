import { useDebounceCallback } from 'usehooks-ts';

import { useSearchParams } from '@/utils/hooks';

import { useOrganizationsTableToolbar } from './useOrganizationsTableToolbar';

const FILTER_INPUT_DELAY = 500;

export const useOrganizationsTable = () => {
  const { searchParams, setSearchParams } = useSearchParams();
  const organizationFilter = searchParams.get('organization');

  const onOrganizationFilterChange = useDebounceCallback(
    (value: string) =>
      setSearchParams([
        { key: 'organization', value },
        { key: 'current', value: '1' }
      ]),
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
