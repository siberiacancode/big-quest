import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import { usePostOrganizationAddAddressMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

import { type AddAddressSchema, addAddressSchema } from '../constants/addAddressSchema';

interface UseAddAddressFormParams {
  onAdded: () => void;
}

export const useAddAddressForm = ({ onAdded }: UseAddAddressFormParams) => {
  const i18n = useI18n();
  const params = useParams<{ id: string }>();

  const addAddressForm = useForm<AddAddressSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addAddressSchema),
    defaultValues: {
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
        '6': { time: { from: '09:00', to: '18:00' }, dayOff: true }
      }
    }
  });

  const postOrganizationAddAddress = usePostOrganizationAddAddressMutation();

  const onSubmit = addAddressForm.handleSubmit(async (values) => {
    const formattedWorkingHours = Object.entries(values.workingHours).map(([day, element]) => {
      const [from1, from2] = element.time.from.split(':');
      const [to1, to2] = element.time.to.split(':');

      const fromHour = Number(from1);
      const fromMinutes = Number(from2);

      const toHour = Number(to1);
      const toMinutes = Number(to2);

      return {
        day: Number(day),
        from: { hour: fromHour, minutes: fromMinutes },
        to: { hour: toHour, minutes: toMinutes },
        dayOff: element.dayOff
      };
    });

    const formattedValues = { ...values, workingHours: formattedWorkingHours };

    await postOrganizationAddAddress.mutateAsync({
      ...formattedValues,
      organizationId: params.id
    });

    toast(i18n.formatMessage({ id: 'dialog.addAddress.success' }), {
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
