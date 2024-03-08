import { useQuery } from '@tanstack/react-query';

import { getCategory } from '../requests/category';

export const useGetCategoryQuery = (settings?: QuerySettings<typeof getCategory>) =>
  useQuery({
    queryKey: ['getCategory'],
    queryFn: () => getCategory({ config: settings?.config }),
    ...settings?.options
  });
