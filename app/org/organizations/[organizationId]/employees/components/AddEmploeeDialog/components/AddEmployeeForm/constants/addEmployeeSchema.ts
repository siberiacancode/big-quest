import * as z from 'zod';

export const addEmployeeSchema = z.object({
  role: z.string().min(1, { message: 'validation.required' }), // Тут нужно enum бы
  surname: z.string().min(1, { message: 'validation.required' }),
  name: z.string().min(1, { message: 'validation.required' }),
  email: z.string().min(1, { message: 'validation.required' }),
  phone: z.string().min(1, { message: 'validation.required' })
});

export type AddEmployeeSchema = z.infer<typeof addEmployeeSchema>;
