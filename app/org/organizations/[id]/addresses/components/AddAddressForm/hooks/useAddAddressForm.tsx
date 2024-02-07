import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePostOrganizationAddAddressMutation } from '@/utils/api';
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
      organizationId: '',
      locality: '',
      street: '',
      house: '',
      details: '',
      workingHours: [
        {
          day: 0,
          from: { hour: 0, minutes: 0 },
          to: { hour: 0, minutes: 0 },
          dayOff: false
        },
        {
          day: 1,
          from: { hour: 0, minutes: 0 },
          to: { hour: 0, minutes: 0 },
          dayOff: false
        },
        {
          day: 2,
          from: { hour: 0, minutes: 0 },
          to: { hour: 0, minutes: 0 },
          dayOff: false
        },
        {
          day: 3,
          from: { hour: 0, minutes: 0 },
          to: { hour: 0, minutes: 0 },
          dayOff: false
        },
        {
          day: 4,
          from: { hour: 0, minutes: 0 },
          to: { hour: 0, minutes: 0 },
          dayOff: false
        },
        {
          day: 5,
          from: { hour: 0, minutes: 0 },
          to: { hour: 0, minutes: 0 },
          dayOff: false
        },
        {
          day: 6,
          from: { hour: 0, minutes: 0 },
          to: { hour: 0, minutes: 0 },
          dayOff: false
        }
      ]
    }
  });

  const postAddOrganizationAddress = usePostOrganizationAddAddressMutation();

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
