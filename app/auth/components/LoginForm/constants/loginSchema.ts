import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'validation.required'
    })
    .email({
      message: 'validation.email.format'
    }),
  password: z.string().min(1, {
    message: 'validation.required'
  })
});

export type LoginSchema = z.infer<typeof loginSchema>;
