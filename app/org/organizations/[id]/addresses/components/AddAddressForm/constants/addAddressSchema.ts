import * as z from 'zod';

// export const workingHoursSchema = z.object({
//   start: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
//     message: 'validation.invalidFormat'
//   }),
//   end: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
//     message: 'validation.invalidFormat'
//   })
// });

const workingTimeSchema = z.object({
  hour: z.number(),
  minutes: z.number()
});

const workingHourSchema = z.object({
  day: z.number(),
  from: workingTimeSchema,
  to: workingTimeSchema,
  dayOff: z.boolean()
});

export const addAddressSchema = z.object({
  organizationId: z.string(),
  locality: z.string().min(1, { message: 'validation.required' }),
  street: z.string().min(1, { message: 'validation.required' }),
  house: z.string().min(1, { message: 'validation.required' }),
  details: z.string(),
  workingHours: z.array(workingHourSchema)
});

export type AddAddressSchema = z.infer<typeof addAddressSchema>;
