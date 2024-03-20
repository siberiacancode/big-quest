import * as z from 'zod';

import { phoneNumberSchema } from '@/components/ui';

export const registerOrganizationSchema = z.object({
  organization: z.string().min(1, { message: 'validation.required' }),
  location: z.string().min(1, { message: 'validation.required' }),
  type: z.enum(['SPONSOR', 'PARTNER']),
  contactName: z.string().min(1, { message: 'validation.required' }),
  phone: phoneNumberSchema.min(1, { message: 'validation.required' })
});

export type RegisterOrganizationSchema = z.infer<typeof registerOrganizationSchema>;
