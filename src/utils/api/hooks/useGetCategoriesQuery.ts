import { useQuery } from '@tanstack/react-query';

import type { GetCategoriesParams } from '../requests';
import { getCategories } from '../requests';

export const useGetCategoriesQuery = (
  params: GetCategoriesParams,
  settings?: QuerySettings<typeof getCategories>
) =>
  useQuery({
    queryKey: ['getCategories'],
    queryFn: () => getCategories({ params, config: settings?.config }),
    ...settings?.options
  });
