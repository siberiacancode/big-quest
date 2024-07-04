import * as z from 'zod';

import { phoneNumberSchema } from '@/components/ui';

export const registerOrganizationSchema = z.object({
  organization: z.string().min(1, { message: 'validation.required' }),
  // location: z.string().min(1, { message: 'validation.required' }),
  location: z.object(
    { id: z.string(), label: z.string(), value: z.string() },
    { message: 'validation.required' }
  ),
  // locality: z.object(
  //   {
  //     id: z.string(),
  //     label: z.string(),
  //     value: z.object({
  //       city: z.string(),
  //       cityWithType: z.string(),
  //       country: z.string(),
  //       flat: z.number(), //
  //       geoLat: z.number(), //
  //       geoLon: z.number(), //
  //       house: z.string(),
  //       postalCode: z.string(),
  //       region: z.string(),
  //       settlement: z.string(),
  //       settlementWithType: z.string(),
  //       street: z.string(),
  //       unrestrictedValue: z.string(),
  //       value: z.string()
  //     })
  //   },
  //   { message: 'validation.required' }
  // ),
  type: z.enum(['SPONSOR', 'PARTNER']),
  contactName: z.string().min(1, { message: 'validation.required' }),
  phone: phoneNumberSchema.min(1, { message: 'validation.required' })
});

export type RegisterOrganizationSchema = z.infer<typeof registerOrganizationSchema>;
