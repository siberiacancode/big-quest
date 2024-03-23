import * as z from 'zod';

export const employeeSchema = z.object({
  role: z.enum(['Administrator', 'Leading', 'Manager']),
  surname: z.string().min(1, { message: 'validation.required' }),
  name: z.string().min(1, { message: 'validation.required' }),
  email: z
    .string()
    .min(1, {
      message: 'validation.required'
    })
    .email({
      message: 'validation.email.format'
    }),
  phone: z.string().min(1, { message: 'validation.required' })
});

export type EmployeeSchema = z.infer<typeof employeeSchema>;
