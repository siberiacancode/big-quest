import * as z from 'zod';

export const addActivitySchema = z.object({
  name: z.string().min(1, { message: 'validation.required' }),
  description: z.string().min(1, { message: 'validation.required' }),
  ageRestriction: z.string().min(1, { message: 'validation.required' }),
  duration: z.string().min(1, { message: 'validation.required' }),
  price: z.string().min(1, { message: 'validation.required' }),
  allowRepeat: z.string().min(1, { message: 'validation.required' })
});

export type AddActivitySchema = z.infer<typeof addActivitySchema>;
