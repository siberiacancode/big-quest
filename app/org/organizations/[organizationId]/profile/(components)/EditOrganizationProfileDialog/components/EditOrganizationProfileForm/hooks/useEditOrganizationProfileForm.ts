import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const editOrganizationForm = useForm<EditOrganizationProfileSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(editOrganizationProfileSchema),
    defaultValues: {
      locality: organization.locality ?? '',
      name: organization.name ?? '',
      description: organization.description,
      inn: organization.information.inn,
      information: {
        postAddress: organization.information.postAddress,
        contactName: organization.contactName ?? '',
        phone: organization.phone ? String(organization.phone).slice(1) : '',
        email: organization.email,
        site: organization.site,
        city: organization.information.city,
        social: organization.social ? convertSocialToFormValues(organization.social) : [{}],
        fullNameOfTheLegalEntity: organization.information.fullNameOfTheLegalEntity,
        legalAddress: organization.information.legalAddress,
        kpp: organization.information.kpp,
        ogrn: organization.information.ogrn
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
        phone: `7${values.information.phone}`,
        social: convertFormValuesToSocial(values.information.social)
      }
    };

    await putOrganizationMutation.mutateAsync({ params: putOrganizationParams });
    router.refresh();

    onEdited();
  });

  return {
    state: { isLoading: putOrganizationMutation.isPending },
    form: { ...editOrganizationForm, socialField },
    functions: { onSubmit }
  };
};
