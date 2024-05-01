import * as z from 'zod';

export const loginSchema = z.object({
  userId: z.string().min(1, {
    message: 'validation.required'
  }),
  code: z.string().min(1, {
    message: 'validation.required'
  })
});

export type LoginSchema = z.infer<typeof loginSchema>;
