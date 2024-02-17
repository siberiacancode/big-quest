import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

  const onSubmit = editOrganizationForm.handleSubmit(async () => {
    // TODO
    // await postAuthLoginEmail.mutateAsync(values);
  });

  return { state: {}, form: editOrganizationForm, functions: { onSubmit } };
};
