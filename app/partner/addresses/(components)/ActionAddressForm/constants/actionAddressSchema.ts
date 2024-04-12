import * as z from 'zod';

const timeSchema = z.object({
  from: z.string(),
  to: z.string()
});

const workingHourSchema = z.object({
  time: timeSchema,
  dayOff: z.boolean()
});

export const actionAddressSchema = z.object({
  locality: z.string().min(1, { message: 'validation.required' }),
  street: z.string().min(1, { message: 'validation.required' }),
  house: z.string().min(1, { message: 'validation.required' }),
  details: z.string(),
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
