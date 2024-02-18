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
  }),
  rememberMe: z.boolean()
});

export type LoginSchema = z.infer<typeof loginSchema>;
