import { useQuery } from '@tanstack/react-query';

import { getDadata } from '../requests/dadata';

export const useGetDadataQuery = (settings?: QuerySettings<typeof getDadata>) =>
  useQuery({
    queryKey: ['getDadata', settings?.config?.query.address],
    queryFn: (params) =>
      getDadata({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  });
