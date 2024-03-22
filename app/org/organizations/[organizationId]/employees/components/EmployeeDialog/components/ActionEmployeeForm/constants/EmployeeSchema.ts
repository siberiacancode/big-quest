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
    .instanceof(File)
    .refine(
      (file) => {
        return file?.size <= MAX_FILE_SIZE;
      },
      { message: `Max image size is 5MB.` }
    )
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
      message: 'Only .jpg, .jpeg, .png, .svg and .webp formats are supported.'
    })
});

export type EmployeeSchema = z.infer<typeof employeeSchema>;
