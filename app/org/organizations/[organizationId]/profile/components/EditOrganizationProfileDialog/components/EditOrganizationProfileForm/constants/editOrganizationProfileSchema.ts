import * as z from 'zod';

import {
  bikSchema,
  checkingAccountSchema,
  innSchema,
  kppSchema,
  ogrnSchema,
  phoneNumberSchema
} from '@/components/ui';

export const editOrganizationProfileSchema = z.object({
  locality: z.string().min(1, { message: 'validation.required' }),
  name: z
    .string()
    .min(1, { message: 'validation.required' })
    .max(128, { message: 'validation.max' }),
  description: z.string().max(1000, { message: 'validation.max' }).optional(),
  inn: innSchema.optional(),
  information: z.object({
    postAddress: z.string().max(1000, { message: 'validation.max' }).optional(),
    contactName: z
      .string()
      .min(1, { message: 'validation.required' })
      .max(128, { message: 'validation.max' }),
    phone: phoneNumberSchema.min(1, { message: 'validation.required' }),
    email: z.string().optional(),
    site: z.string().optional(),
    city: z.string().optional(),
    social: z
      .array(
        z.object({
          value: z.string().url({ message: 'validation.url.format' }).optional()
        })
      )
      .optional(),
    fullNameOfTheLegalEntity: z.string().max(1000, { message: 'validation.max' }).optional(),
    legalAddress: z.string().max(1000, { message: 'validation.max' }).optional(),
    kpp: kppSchema.optional(),
    ogrn: ogrnSchema.optional()
  }),
  requisites: z.object({
    bank: z.string().max(128, { message: 'validation.max' }).optional(),
    bik: bikSchema.optional(),
    checkingAccount: checkingAccountSchema.optional()
  })
});

export type EditOrganizationProfileSchema = z.infer<typeof editOrganizationProfileSchema>;
