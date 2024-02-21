import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePutOrganizationMutation } from '@/utils/api';

import type { EditOrganizationProfileSchema } from '../constants/editOrganizationProfileSchema';
import { editOrganizationProfileSchema } from '../constants/editOrganizationProfileSchema';

interface UseEditOrganizationFormParams {
  organization: OrganizationResponse;
}

export const useEditOrganizationProfileForm = ({ organization }: UseEditOrganizationFormParams) => {
  const editOrganizationForm = useForm<EditOrganizationProfileSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(editOrganizationProfileSchema),
    defaultValues: {
      locality: organization.locality ?? '',
      name: organization.name ?? '',
      description: organization.description,
      inn: organization.inn,
      information: {
        postAddress: organization.information?.postAddress,
        contactName: organization.information?.contactName ?? '',
        phone: organization.information?.phone ?? '',
        email: organization.information?.email,
        site: organization.information?.site,
        city: organization.information?.city,
        social: organization.information?.social,
        fullNameOfTheLegalEntity: organization.information?.fullNameOfTheLegalEntity,
        legalAddress: organization.information?.legalAddress,
        kpp: organization.information?.kpp,
        ogrn: organization.information?.ogrn
      },
      requisites: {
        bank: organization.requisites?.bank,
        bik: organization.requisites?.bik,
        checkingAccount: organization.requisites?.checkingAccount
      }
    }
  });

  const putOrganizationMutation = usePutOrganizationMutation();

  const onSubmit = editOrganizationForm.handleSubmit(async (values) => {
    // @ts-ignore
    // ? Тут что-то тайпскрипт шалит, не смог пока исправить
    await putOrganizationMutation.mutateAsync(values);
  });

  return {
    state: { isLoading: putOrganizationMutation.isPending },
    form: editOrganizationForm,
    functions: { onSubmit }
  };
};
