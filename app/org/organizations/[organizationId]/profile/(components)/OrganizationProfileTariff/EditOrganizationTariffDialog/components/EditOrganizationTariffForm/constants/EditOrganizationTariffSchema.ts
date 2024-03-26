import * as z from 'zod';

export const editOrganizationTariffSchema = z.object({
  freeActivity: z.number().min(1, { message: 'validation.required' }),
  paidActivity: z.number().min(1, { message: 'validation.required' }),
  periodMonth: z.number().min(1, { message: 'validation.required' }),
  totalPrice: z.number().min(1, { message: 'validation.required' })
});

export type EditOrganizationTariffSchema = z.infer<typeof editOrganizationTariffSchema>;
