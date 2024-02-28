import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePutOrganizationMutation } from '@/utils/api';

import type { EditOrganizationProfileSchema } from '../constants/editOrganizationProfileSchema';
import { editOrganizationProfileSchema } from '../constants/editOrganizationProfileSchema';
import { convertFormValuesToSocial } from '../helpers/convertFormValuesToSocial';
import { convertSocialToFormValues } from '../helpers/convertSocialToFormValues';

interface UseEditOrganizationFormParams {
  organization: OrganizationResponse;
  onEdited: () => void;
}

export const useEditOrganizationProfileForm = ({
  organization,
  onEdited
}: UseEditOrganizationFormParams) => {
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
        social: organization.information?.social
          ? convertSocialToFormValues(organization.information.social)
          : [{}],
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

  const socialField = useFieldArray({
    name: 'information.social',
    control: editOrganizationForm.control
  });

  const putOrganizationMutation = usePutOrganizationMutation();

  const onSubmit = editOrganizationForm.handleSubmit(async (values) => {
    const putOrganizationParams = {
      ...values,
      id: organization.id,
      information: {
        ...values.information,
        social: convertFormValuesToSocial(values.information.social)
      }
    };

    await putOrganizationMutation.mutateAsync({ params: putOrganizationParams });

    onEdited();
  });

  return {
    state: { isLoading: putOrganizationMutation.isPending },
    form: { ...editOrganizationForm, socialField },
    functions: { onSubmit }
  };
};
