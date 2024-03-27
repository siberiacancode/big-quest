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

  const addAddressForm = useForm<AddOrganizationChangeSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addOrganizationChangeSchema),
    defaultValues: {}
  });

  const postChangesMutation = usePostChangesMutation();

  const onSubmit = addAddressForm.handleSubmit(async (values) => {
    await postChangesMutation.mutateAsync({
      params: { ...values, criteria: organization.id }
    });
    router.refresh();
  });

  return {
    state: {
      isLoading: postChangesMutation.isPending
    },
    form: addAddressForm,
    functions: { onSubmit }
  };
};
