import * as z from 'zod';

export const editOrganizationTariffSchema = z.object({
  freeActivity: z.string().min(1, { message: 'validation.required' }),
  paidActivity: z.string().min(1, { message: 'validation.required' }),
  periodMonth: z.string().min(1, { message: 'validation.required' }),
  totalPrice: z.string().min(1, { message: 'validation.required' })
});

export type EditOrganizationTariffSchema = z.infer<typeof editOrganizationTariffSchema>;
