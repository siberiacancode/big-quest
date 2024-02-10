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
      workingHours: {
        '0': { from: '9:00', to: '18:00', dayOff: false },
        '1': { from: '9:00', to: '18:00', dayOff: false },
        '2': { from: '9:00', to: '18:00', dayOff: false },
        '3': { from: '9:00', to: '18:00', dayOff: false },
        '4': { from: '9:00', to: '18:00', dayOff: false },
        '5': { from: '9:00', to: '18:00', dayOff: false },
        '6': { from: '9:00', to: '18:00', dayOff: false }
      }
    }
  });

  const postOrganizationAddAddress = usePostOrganizationAddAddressMutation();

  const onSubmit = addAddressForm.handleSubmit(async (values) => {
    const formattedWorkingHours = Object.entries(values.workingHours).map(([day, element]) => ({
      day: Number(day),
      from: {
        hour: Number(element.from.split(':')[0]),
        minutes: Number(element.from.split(':')[1])
      },
      to: {
        hour: Number(element.to.split(':')[0]),
        minutes: Number(element.to.split(':')[1])
      },
      dayOff: element.dayOff
    }));

    const formattedValues = { ...values, workingHours: formattedWorkingHours };

    await postOrganizationAddAddress.mutateAsync(formattedValues);

    toast(intl.formatMessage({ id: 'feature.addAddress.success' }), {
      cancel: { label: 'Close' }
    });

    onAdded();
  });

  return {
    state: {
      isLoading: postOrganizationAddAddress.isPending
    },
    form: addAddressForm,
    functions: { onSubmit }
  };
};
