import * as z from 'zod';

export const addEmployeeSchema = z.object({
  role: z.string().min(1, { message: 'validation.required' }), // Тут нужно enum бы или просто через union строки
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

export type AddEmployeeSchema = z.infer<typeof addEmployeeSchema>;
