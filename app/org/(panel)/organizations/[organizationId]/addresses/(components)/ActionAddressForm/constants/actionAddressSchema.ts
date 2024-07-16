import * as z from 'zod';

import { phoneNumberSchema } from '@/components/ui';

const timeSchema = z.object({
  from: z.string(),
  to: z.string()
});

const workingHourSchema = z.object({
  time: timeSchema,
  dayOff: z.boolean()
});

export const actionAddressSchema = z.object({
  city: z.string().min(1, { message: 'validation.required' }),
  locality: z.object(
    { id: z.string(), label: z.string(), value: z.any() },
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
  details: z.string(),
  phoneNumber: phoneNumberSchema.min(1, { message: 'validation.required' }),
  workingHours: z.object({
    '0': workingHourSchema,
    '1': workingHourSchema,
    '2': workingHourSchema,
    '3': workingHourSchema,
    '4': workingHourSchema,
    '5': workingHourSchema,
    '6': workingHourSchema
  })
});

export type ActionAddressSchema = z.infer<typeof actionAddressSchema>;
