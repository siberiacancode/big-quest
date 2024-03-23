import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

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
  phone: z.string().min(1, { message: 'validation.required' }),
  image: z
    .any()
    .optional()
    .refine(
      (file) => {
        return !file || (file instanceof File && file.size <= MAX_FILE_SIZE);
      },
      { message: 'validation.max.photoSize' }
    )
    .refine(
      (file) => {
        if (!file) return true;
        return ACCEPTED_IMAGE_TYPES.includes(file?.type);
      },
      { message: 'validation.format.photo' }
    )
});

export type EmployeeSchema = z.infer<typeof employeeSchema>;
