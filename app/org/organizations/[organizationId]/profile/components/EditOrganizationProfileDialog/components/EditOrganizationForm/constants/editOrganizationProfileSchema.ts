import * as z from 'zod';

export const editOrganizationProfileSchema = z.object({
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
  }),
  rememberMe: z.boolean()
});

export type EditOrganizationProfileSchema = z.infer<typeof editOrganizationProfileSchema>;
