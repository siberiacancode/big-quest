import * as z from 'zod';

export const activitySchema = z.object({
  name: z.string().min(1, { message: 'validation.required' }),
  category: z.string().min(1, { message: 'validation.required' }),
  description: z.string().min(1, { message: 'validation.required' }),
  ageLimit: z.object({
    min: z.number().min(0, { message: 'validation.required' }),
    max: z.number().min(0, { message: 'validation.required' })
  }),
  price: z.number().min(0, { message: 'validation.required' }),
  duration: z.number().min(0, { message: 'validation.required' }),
  replay: z.boolean().default(false).optional(),
  status: z.string().min(1, { message: 'validation.required' }).optional(),
  organizationId: z.string().min(1, { message: 'validation.required' })
});

export type ActivitySchema = z.infer<typeof activitySchema>;
