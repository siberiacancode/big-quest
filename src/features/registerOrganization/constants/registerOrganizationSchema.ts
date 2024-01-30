import * as z from 'zod';

const LEGAL_TYPE_ARRAY = Object.values(LegalType);

export const registerOrganizationSchema = z.object({
  organization: z.string().min(1, { message: 'validation.required' }),
  location: z.string().min(1, { message: 'validation.required' }),
  type: z.enum(LEGAL_TYPE_ARRAY).min(1, { message: 'validation.required' }),
  contactName: z.string().min(1, { message: 'validation.required' }),
  phone: z.string().min(1, { message: 'validation.required' })
});

export type RegisterOrganizationSchema = z.infer<typeof registerOrganizationSchema>;
