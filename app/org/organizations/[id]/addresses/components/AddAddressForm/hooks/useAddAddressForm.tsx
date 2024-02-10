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
        '0': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '1': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '2': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '3': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '4': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '5': { time: { from: '09:00', to: '18:00' }, dayOff: false },
        '6': { time: { from: '09:00', to: '18:00' }, dayOff: false }
      }
    }
  });

  const postOrganizationAddAddress = usePostOrganizationAddAddressMutation();

  const onSubmit = addAddressForm.handleSubmit(async (values) => {
    const formattedWorkingHours = Object.entries(values.workingHours).map(([day, element]) => {
      const fromParts = (element.time.from || '').split(':');
      const toParts = (element.time.to || '').split(':');

      const fromHour = fromParts[0] ? Number(fromParts[0]) : 0;
      const fromMinutes = fromParts[1] ? Number(fromParts[1]) : 0;

      const toHour = toParts[0] ? Number(toParts[0]) : 0;
      const toMinutes = toParts[1] ? Number(toParts[1]) : 0;

      return {
        day: Number(day),
        from: { hour: fromHour, minutes: fromMinutes },
        to: { hour: toHour, minutes: toMinutes },
        dayOff: !element.time.from && !element.time.to
      };
    });

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
