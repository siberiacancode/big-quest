import * as z from 'zod';

export const addPartnerProfileChangesSchema = z.object({
  comment: z
    .string()
    .min(1, { message: 'validation.required' })
    .max(255, { message: 'validation.max' })
});

export type AddPartnerProfileChangesSchema = z.infer<typeof addPartnerProfileChangesSchema>;
