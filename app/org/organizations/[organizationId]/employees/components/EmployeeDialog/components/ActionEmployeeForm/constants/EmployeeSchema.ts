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
  phone: z.string().min(1, { message: 'validation.required' }),
  image: z.instanceof(File)
  // image: z.any()
  // .refine((files) => {
  //   return files?.[0]?.size <= MAX_FILE_SIZE;
  // }, `Max image size is 5MB.`)
  // .refine(
  //   (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
  //   'Only .jpg, .jpeg, .png and .webp formats are supported.'
  // )
});

export type EmployeeSchema = z.infer<typeof employeeSchema>;
