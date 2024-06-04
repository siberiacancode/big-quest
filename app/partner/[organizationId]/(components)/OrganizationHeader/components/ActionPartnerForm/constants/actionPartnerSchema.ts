import * as z from 'zod';

import { UserResponseRolesItem } from '@/api-types';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const actionPartnerSchema = z.object({
  // @ts-ignore
  role: z.enum(Object.values(UserResponseRolesItem)),
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
  password: z.string().min(1, { message: 'validation.required' }),
  file: z
    .custom<File>((file) => file instanceof File)
    .optional()
    .refine((file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE), {
      message: 'validation.photo.max'
    })
    .refine(
      (file) => {
        if (!file) return true;
        return ACCEPTED_IMAGE_TYPES.includes(file?.type);
      },
      { message: 'validation.photo.format' }
    )
});

export type ActionPartnerSchema = z.infer<typeof actionPartnerSchema>;
