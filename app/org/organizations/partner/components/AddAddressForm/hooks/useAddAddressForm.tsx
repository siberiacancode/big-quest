import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePostAddOrganizationAddressMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

import { type AddAddressSchema, addAddressSchema } from '../constants/addAddressSchema';

interface UseAddAddressFormParams {
  onAdded: () => void;
}

export const useAddAddressForm = ({ onAdded }: UseAddAddressFormParams) => {
  const intl = useI18n();

  const addAddressForm = useForm<AddAddressSchema>({
    resolver: zodResolver(addAddressSchema),
    defaultValues: {
      organization: '',
      location: '',
      street: '',
      house: '',
      details: '',
      workingHours: ['']
    }
  });

  const postAddOrganizationAddress = usePostAddOrganizationAddressMutation();

  const onSubmit = addAddressForm.handleSubmit(async (values) => {
    console.log('Submitting form...', values);
    await postAddOrganizationAddress.mutateAsync(values);

    toast(intl.formatMessage({ id: 'feature.addAddress.success' }), {
      cancel: { label: 'Close' }
    });

    onAdded();
  });

  return {
    state: {
      isLoading: postAddOrganizationAddress.isPending
    },
    form: addAddressForm,
    functions: { onSubmit }
  };
};
