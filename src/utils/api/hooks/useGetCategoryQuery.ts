import { useQuery } from '@tanstack/react-query';

import { getCategory } from '../requests/category';

export const useGetCategoryQuery = (settings?: QuerySettings<typeof getCategory>) =>
  useQuery({
    queryKey: ['getCategory', settings?.config?.params.address],
    queryFn: (params) =>
      getCategory({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
