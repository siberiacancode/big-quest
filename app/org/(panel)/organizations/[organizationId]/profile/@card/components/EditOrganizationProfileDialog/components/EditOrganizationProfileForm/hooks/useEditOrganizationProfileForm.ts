import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import type { OrganizationResponse } from '@/api-types';
import type { ComboBoxOption } from '@/components/ui';
import { usePutOrganizationByIdMutation } from '@/utils/api';

import type { EditOrganizationProfileSchema } from '../constants/editOrganizationProfileSchema';
import { editOrganizationProfileSchema } from '../constants/editOrganizationProfileSchema';
import { convertFormValuesToSocial } from '../helpers/convertFormValuesToSocial';
import { convertSocialToFormValues } from '../helpers/convertSocialToFormValues';

interface UseEditOrganizationProfileFormParams {
  organization: OrganizationResponse;
  onEdited: () => void;
}

export const useEditOrganizationProfileForm = ({
  organization,
  onEdited
}: UseEditOrganizationProfileFormParams) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const editOrganizationForm = useForm<EditOrganizationProfileSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(editOrganizationProfileSchema),
    defaultValues: {
      stage: organization.stage ?? 'REQUEST',
      locality:
        {
          id: organization.locality,
          label: organization.locality,
          value: organization.locality
        } ?? ({} as ComboBoxOption<string>),
      name: organization.name ?? '',
      description: organization.description ?? undefined,
      inn: organization.information?.inn ?? undefined,
      information: {
        postAddress:
          {
            id: organization.information?.postAddress,
            label: organization.information?.postAddress,
            value: organization.information?.postAddress
          } ?? ({} as ComboBoxOption<string>),
        contactName: organization.contactName ?? '',
        phone: organization.phone ? String(organization.phone).slice(1) : '',
        email: organization.email ?? undefined,
        site: organization.site ?? undefined,
        social: organization.social ? convertSocialToFormValues(organization.social) : [{}],
        fullNameOfTheLegalEntity: organization.information?.fullNameOfTheLegalEntity ?? undefined,
        legalAddress:
          {
            id: organization.information?.legalAddress,
            label: organization.information?.legalAddress,
            value: organization.information?.legalAddress
          } ?? ({} as ComboBoxOption<string>),
        kpp: organization.information?.kpp ?? undefined,
        ogrn: organization.information?.ogrn ?? undefined
      },
      requisites: {
        bank: organization.requisites?.bank ?? undefined,
        bik: organization.requisites?.bik ?? undefined,
        checkingAccount: organization.requisites?.checkingAccount ?? undefined
      }
    }
  });

  const socialField = useFieldArray({
    name: 'information.social',
    control: editOrganizationForm.control
  });

  const putOrganizationByIdMutation = usePutOrganizationByIdMutation();

  const onSubmit = editOrganizationForm.handleSubmit(async (values) => {
    const putOrganizationByIdParams = {
      ...values,
      id: organization.id,
      locality: values.locality.value,
      information: {
        ...values.information,
        postAddress: values.information.postAddress.value,
        phone: `7${values.information.phone}`,
        social: convertFormValuesToSocial(values.information.social),
        legalAddress: values.information.legalAddress.value
      }
    };

    await putOrganizationByIdMutation.mutateAsync({ params: putOrganizationByIdParams });
    router.refresh();
    queryClient.invalidateQueries({ queryKey: ['getChanges'] });

    onEdited();
  });

  return {
    state: { isLoading: putOrganizationByIdMutation.isPending },
    form: { ...editOrganizationForm, socialField },
    functions: { onSubmit }
  };
};
