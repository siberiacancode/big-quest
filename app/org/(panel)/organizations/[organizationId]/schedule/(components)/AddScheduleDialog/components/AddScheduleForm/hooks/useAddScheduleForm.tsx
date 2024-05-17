import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePostScheduleMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';

import type { AddScheduleSchema } from '../constants/addScheduleSchema';
import { addScheduleSchema } from '../constants/addScheduleSchema';

interface UseAddScheduleFormParams {
  onAdded: () => void;
}

export const useAddScheduleForm = ({ onAdded }: UseAddScheduleFormParams) => {
  const i18n = useI18n();

  const addScheduleForm = useForm<AddScheduleSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addScheduleSchema),
    defaultValues: {
      activityId: '',
      addressId: '',
      leadingId: '',
      preEntry: false,
      isRegularActivity: false,
      numberOfSeats: '',
      time: { from: '09:00', to: '18:00' },
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

  const postScheduleMutation = usePostScheduleMutation();

  const onSubmit = addScheduleForm.handleSubmit(async (values) => {
    console.log(values);
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

    const formattedDate = {
      from: values.dateRange!.from?.toISOString() ?? '',
      to: values.dateRange!.to?.toISOString() ?? ''
    };

    const formattedValues = {
      ...values,
      workingHours: formattedWorkingHours,
      dateRange: formattedDate,
      date: values.date.toISOString()
    };
    console.log('@formattedValues', formattedValues);

    await postScheduleMutation.mutateAsync({
      params: { ...formattedValues }
    });

    toast(i18n.formatMessage({ id: 'dialog.addAddress.success' }), {
      cancel: { label: 'Close' }
    });

    onAdded();
  });

  return {
    state: {
      isLoading: postScheduleMutation.isPending
    },
    form: addScheduleForm,
    functions: { onSubmit }
  };
};
