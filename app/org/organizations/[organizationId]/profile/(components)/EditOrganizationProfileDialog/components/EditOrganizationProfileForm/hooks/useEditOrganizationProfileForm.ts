import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { usePutOrganizationMutation } from '@/utils/api';

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
      locality: organization.locality ?? '',
      name: organization.name ?? '',
      description: organization.description ?? undefined,
      inn: organization.information?.inn ?? undefined,
      information: {
        postAddress: organization.information?.postAddress ?? undefined,
        contactName: organization.contactName ?? '',
        phone: organization.phone ? String(organization.phone).slice(1) : '',
        email: organization.email ?? undefined,
        site: organization.site ?? undefined,
        social: organization.social ? convertSocialToFormValues(organization.social) : [{}],
        fullNameOfTheLegalEntity: organization.information?.fullNameOfTheLegalEntity ?? undefined,
        legalAddress: organization.information?.legalAddress ?? undefined,
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
    queryClient.invalidateQueries({ queryKey: ['getChanges'] });

    onEdited();
  });

  return {
    state: { isLoading: putOrganizationMutation.isPending },
    form: { ...editOrganizationForm, socialField },
    functions: { onSubmit }
  };
};
