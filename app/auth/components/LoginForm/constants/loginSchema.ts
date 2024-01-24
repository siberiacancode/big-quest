import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Неверный формат электронной почты'
  }),
  password: z.string().min(1, {
    message: 'Данное поле не может быть пустым'
  })
});

export type LoginSchema = z.infer<typeof loginSchema>;
