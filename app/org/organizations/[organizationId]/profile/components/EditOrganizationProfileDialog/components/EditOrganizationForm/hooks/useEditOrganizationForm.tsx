import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { usePutOrganizationMutation } from '@/utils/api';

import type { EditOrganizationProfileSchema } from '../constants/editOrganizationProfileSchema';
import { editOrganizationProfileSchema } from '../constants/editOrganizationProfileSchema';

interface UseEditOrganizationFormParams {
  organization: OrganizationResponse;
}

export const useEditOrganizationForm = ({ organization }: UseEditOrganizationFormParams) => {
  const editOrganizationForm = useForm<EditOrganizationProfileSchema>({
    resolver: zodResolver(editOrganizationProfileSchema),
    defaultValues: {
      ...organization
    }
  });

  const putOrganizationMutation = usePutOrganizationMutation();

  const onSubmit = editOrganizationForm.handleSubmit(async () => {
    // TODO
    await putOrganizationMutation.mutateAsync({ id: organization.id });
  });

  return {
    state: { isLoading: putOrganizationMutation.isPending },
    form: editOrganizationForm,
    functions: { onSubmit }
  };
};
