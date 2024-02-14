import * as z from 'zod';

export const registerOrganizationSchema = z.object({
  organization: z.string().min(1, { message: 'validation.required' }),
  location: z.string().min(1, { message: 'validation.required' }),
  type: z.enum(['SPONSOR', 'PARTNER']),
  contactName: z.string().min(1, { message: 'validation.required' }),
  phone: z.string().min(1, { message: 'validation.required' })
});

export type RegisterOrganizationSchema = z.infer<typeof registerOrganizationSchema>;
