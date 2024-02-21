import * as z from 'zod';

import {
  bikSchema,
  checkingAccountSchema,
  innSchema,
  kppSchema,
  ogrnSchema
} from '@/components/ui';

export const editOrganizationProfileSchema = z.object({
  locality: z.string().min(1, { message: 'validation.required' }),
  name: z
    .string()
    .min(1, { message: 'validation.required' })
    .max(128, { message: 'validation.max' }),
  description: z.string().max(1000, { message: 'validation.max' }),
  inn: innSchema,
  information: z.object({
    postAddress: z.string().max(1000, { message: 'validation.max' }),
    contactName: z
      .string()
      .min(1, { message: 'validation.required' })
      .max(128, { message: 'validation.max' }),
    phone: z.string().min(1, { message: 'validation.required' }),
    email: z.string(),
    site: z.string(),
    city: z.string(),
    social: z.string(),
    fullNameOfTheLegalEntity: z.string().max(1000, { message: 'validation.max' }),
    legalAddress: z.string().max(1000, { message: 'validation.max' }),
    kpp: kppSchema,
    ogrn: ogrnSchema
  }),
  requisites: z.object({
    bank: z.string().max(128, { message: 'validation.max' }),
    bik: bikSchema,
    checkingAccount: checkingAccountSchema
  })
});

export type EditOrganizationProfileSchema = z.infer<typeof editOrganizationProfileSchema>;
