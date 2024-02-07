import { useSearchParams } from '@/utils/hooks';

export const useOrganizationsTable = () => {
  const { searchParams, setSearchParam } = useSearchParams();

  const organizationFilter = searchParams.get('organization');

  const onInputFilterChange = (value: string) => {
    setSearchParam('organization', value);
  };

  return { state: { organizationFilter }, functions: { onInputFilterChange } };
};
