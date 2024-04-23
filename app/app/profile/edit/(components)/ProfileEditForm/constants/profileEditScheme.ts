import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const profileEditSchema = z.object({
  name: z.string().min(1, { message: 'validation.required' }),
  surname: z.string().min(1, { message: 'validation.required' }),
  birthdate: z.date(),
  userID: z.string().min(1, { message: 'validation.required' }),
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

export type ProfileEditSchema = z.infer<typeof profileEditSchema>;
