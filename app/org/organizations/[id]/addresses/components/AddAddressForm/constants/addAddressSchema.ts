import * as z from 'zod';

// export const workingHoursSchema = z.object({
//   start: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
//     message: 'validation.invalidFormat'
//   }),
//   end: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
//     message: 'validation.invalidFormat'
//   })
// });

export const workingHoursSchema = z.object({
  start: z.string(),
  end: z.string()
});

export const addAddressSchema = z.object({
  organizationId: z.string(),
  location: z.string().min(1, { message: 'validation.required' }),
  street: z.string().min(1, { message: 'validation.required' }),
  house: z.string().min(1, { message: 'validation.required' }),
  details: z.string(),
  workingHours: z.object({
    Monday: workingHoursSchema,
    Tuesday: workingHoursSchema,
    Wednesday: workingHoursSchema,
    Thursday: workingHoursSchema,
    Friday: workingHoursSchema,
    Saturday: workingHoursSchema,
    Sunday: workingHoursSchema
  })
});

export type AddAddressSchema = z.infer<typeof addAddressSchema>;
