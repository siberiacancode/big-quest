import * as z from 'zod';

export const addAddressSchema = z.object({
  organization: z.string().min(1, { message: 'validation.required' }),
  location: z.string().min(1, { message: 'validation.required' }),
  street: z.string().min(1, { message: 'validation.required' }),
  house: z.string().min(1, { message: 'validation.required' }),
  details: z.string(),
  workingHours: z.array(z.string()).min(1, { message: 'validation.required' })
});

export type AddAddressSchema = z.infer<typeof addAddressSchema>;
