import { useMutation } from '@tanstack/react-query';

import type { PutTariffByIdRequestConfig } from '../requests';
import { putTariffById } from '../requests';

export const usePutTariffByIdMutation = (
  settings?: MutationSettings<PutTariffByIdRequestConfig, typeof putTariffById>
) =>
  useMutation({
    mutationKey: ['putTariffById'],
    mutationFn: ({ params, config }) =>
      putTariffById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
