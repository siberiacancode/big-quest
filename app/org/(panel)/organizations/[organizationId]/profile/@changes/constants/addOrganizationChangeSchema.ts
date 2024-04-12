import * as z from 'zod';

export const addOrganizationChangesSchema = z.object({
  comment: z
    .string()
    .min(1, { message: 'validation.required' })
    .max(255, { message: 'validation.max' })
});

export type AddOrganizationChangesSchema = z.infer<typeof addOrganizationChangesSchema>;
