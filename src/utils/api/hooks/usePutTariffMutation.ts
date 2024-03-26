import { useMutation } from '@tanstack/react-query';

import type { PutTariffRequestConfig } from '../requests';
import { putTariff } from '../requests';

export const usePutTariffMutation = (
  settings?: MutationSettings<PutTariffRequestConfig, typeof putTariff>
) =>
  useMutation({
    mutationKey: ['putTariff'],
    mutationFn: ({ params, config }) =>
      putTariff({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
