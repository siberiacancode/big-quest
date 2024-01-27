import * as z from 'zod';

export const loginEmailSchema = z.object({
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

export type LoginEmailSchema = z.infer<typeof loginEmailSchema>;
