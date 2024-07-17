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
