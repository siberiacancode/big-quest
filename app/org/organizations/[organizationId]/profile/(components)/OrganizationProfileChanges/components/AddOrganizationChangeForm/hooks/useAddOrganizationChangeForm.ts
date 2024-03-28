import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { usePostChangesMutation } from '@/utils/api';

import {
  type AddOrganizationChangeSchema,
  addOrganizationChangeSchema
} from '../constants/addOrganizationChangeSchema';

export interface UseAddOrganizationChangeFormParams {
  organization: OrganizationResponse;
}

export const useAddOrganizationChangeForm = ({
  organization
}: UseAddOrganizationChangeFormParams) => {
  const router = useRouter();
  const addOrganizationChangeForm = useForm<AddOrganizationChangeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addOrganizationChangeSchema),
    defaultValues: { comment: '' }
  });

  const postChangesMutation = usePostChangesMutation();

  const onSubmit = addOrganizationChangeForm.handleSubmit(async (values) => {
    await postChangesMutation.mutateAsync({
      params: { criteria: organization.id, new: { comment: values.comment }, action: 'comment' }
    });
    addOrganizationChangeForm.reset();
    router.refresh();
  });

  return {
    state: {
      isLoading: postChangesMutation.isPending
    },
    form: addOrganizationChangeForm,
    functions: { onSubmit }
  };
};
