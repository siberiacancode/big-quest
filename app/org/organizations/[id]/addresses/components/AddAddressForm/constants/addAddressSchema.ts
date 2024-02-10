import * as z from 'zod';

const timeSchema = z.object({
  from: z
    .string()
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: 'validation.time.format' })
    .optional()
    .or(z.literal('')),
  to: z
    .string()
    .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: 'validation.time.format' })
    .optional()
    .or(z.literal(''))
});

const workingHourSchema = z
  .object({
    time: timeSchema,
    dayOff: z.boolean()
  })
  .refine(
    (data) => {
      const { from, to } = data.time;
      return (from !== '' && to !== '') || (from === '' && to === '');
    },
    {
      message: 'validation.time.requiredBoth'
    }
  );

export const addAddressSchema = z.object({
  organizationId: z.string(),
  locality: z.string(),
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

export type AddAddressSchema = z.infer<typeof addAddressSchema>;
