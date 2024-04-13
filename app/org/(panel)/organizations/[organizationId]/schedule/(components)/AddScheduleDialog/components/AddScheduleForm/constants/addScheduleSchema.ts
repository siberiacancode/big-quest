import * as z from 'zod';

const timeSchema = z.object({
  from: z.string(),
  to: z.string()
});

const dateSchema = z.object({
  from: z.date().optional(),
  to: z.date().optional()
});

const workingHourSchema = z.object({
  time: timeSchema,
  dayOff: z.boolean()
});

export const addScheduleSchema = z.object({
  activity: z.string().min(1, { message: 'validation.required' }),
  locality: z.string().min(1, { message: 'validation.required' }),
  lead: z.string().min(1, { message: 'validation.required' }),
  preEntry: z.boolean().default(false),
  isRepeat: z.boolean().default(false),
  dateRange: dateSchema.optional(),
  date: z.date(),
  time: timeSchema,
  placesCount: z.string(),
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

export type AddScheduleSchema = z.infer<typeof addScheduleSchema>;
