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

export const addScheduleSchema = z
  .object({
    activityId: z.string().min(1, { message: 'validation.required' }),
    addressId: z.string().min(1, { message: 'validation.required' }),
    leadingId: z.string().min(1, { message: 'validation.required' }),
    preEntry: z.boolean().default(false),
    isRegularActivity: z.boolean().default(false),
    dateRange: dateSchema.optional(),
    date: z.date().optional(),
    time: timeSchema,
    numberOfSeats: z.string().optional(),
    workingHours: z.object({
      '0': workingHourSchema,
      '1': workingHourSchema,
      '2': workingHourSchema,
      '3': workingHourSchema,
      '4': workingHourSchema,
      '5': workingHourSchema,
      '6': workingHourSchema
    })
  })
  .superRefine((values, ctx) => {
    if (values.preEntry && !values.numberOfSeats) {
      ctx.addIssue({
        code: 'custom',
        message: 'validation.required',
        path: ['numberOfSeats']
      });
    }
    if (values.isRegularActivity && !values.dateRange) {
      ctx.addIssue({
        code: 'custom',
        message: 'validation.required',
        path: ['dateRange']
      });
    } else if (values.isRegularActivity && !values.dateRange?.to) {
      ctx.addIssue({
        code: 'custom',
        message: 'validation.dateEnd.required',
        path: ['dateRange']
      });
    }
    if (!values.isRegularActivity && !values.date) {
      ctx.addIssue({
        code: 'custom',
        message: 'validation.required',
        path: ['date']
      });
    }
    return true;
  });

export type AddScheduleSchema = z.infer<typeof addScheduleSchema>;
