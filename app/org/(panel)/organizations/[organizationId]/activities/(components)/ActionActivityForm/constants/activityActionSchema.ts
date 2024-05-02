import * as z from 'zod';

export const activityActionSchema = z.object({
  name: z.string().min(1, { message: 'validation.required' }),
  category: z.string().min(1, { message: 'validation.required' }),
  description: z.string().optional(),
  ageLimit: z.object({
    min: z.coerce.number().min(1, { message: 'validation.required' }),
    max: z.coerce.number().min(0, { message: 'validation.required' })
  }),
  price: z.coerce.number().min(0, { message: 'validation.required' }),
  duration: z.coerce.number().min(1, { message: 'validation.required' }),
  replay: z.boolean().default(false),
  status: z.string().min(1, { message: 'validation.required' })
});

export type ActivityActionSchema = z.infer<typeof activityActionSchema>;
