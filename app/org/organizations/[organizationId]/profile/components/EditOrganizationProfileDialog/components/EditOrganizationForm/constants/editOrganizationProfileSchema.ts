import * as z from 'zod';

export const editOrganizationProfileSchema = z.object({
  locality: z.string().min(1, { message: 'validation.required' }),
  name: z.string().min(1, { message: 'validation.required' }),
  description: z.string().min(1, { message: 'validation.required' }),
  inn: z.string().min(1, { message: 'validation.required' }),
  information: z.object({
    postAddress: z.string().min(1, { message: 'validation.required' }),
    contactName: z.string().min(1, { message: 'validation.required' }),
    phone: z.string().min(1, { message: 'validation.required' }),
    email: z.string().min(1, { message: 'validation.required' }),
    site: z.string().min(1, { message: 'validation.required' }),
    city: z.string().min(1, { message: 'validation.required' }),
    social: z.string().min(1, { message: 'validation.required' }),
    fullNameOfTheLegalEntity: z.string().min(1, { message: 'validation.required' }),
    legalAddress: z.string().min(1, { message: 'validation.required' }),
    kpp: z.string().min(1, { message: 'validation.required' }),
    ogrn: z.string().min(1, { message: 'validation.required' })
  }),
  requisites: z.object({
    bank: z.string().min(1, { message: 'validation.required' }),
    bik: z.string().min(1, { message: 'validation.required' }),
    checkingAccount: z.string().min(1, { message: 'validation.required' })
  })
});

export type EditOrganizationProfileSchema = z.infer<typeof editOrganizationProfileSchema>;
