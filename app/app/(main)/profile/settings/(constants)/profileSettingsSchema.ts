import * as z from 'zod';

export const profileSettingsSchema = z.object({
  parent: z.boolean()
});

export type ProfileSettingsSchema = z.infer<typeof profileSettingsSchema>;
