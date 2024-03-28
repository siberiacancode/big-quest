import * as z from 'zod';

export const addOrganizationChangeSchema = z.object({
  comment: z.string().min(1, { message: 'validation.required' })
});

export type AddOrganizationChangeSchema = z.infer<typeof addOrganizationChangeSchema>;
