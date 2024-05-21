import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import type { WeekAndTime } from '@/api-types';
import type { PostScheduleParams } from '@/utils/api';
import { usePostScheduleMutation } from '@/utils/api';
import { useI18n } from '@/utils/contexts';
import { getWeekDayByIndex } from '@/utils/helpers';

import type { AddScheduleSchema } from '../constants/addScheduleSchema';
import { addScheduleSchema } from '../constants/addScheduleSchema';

interface UseAddScheduleFormParams {
  onAdded: () => void;
}

export const useAddScheduleForm = ({ onAdded }: UseAddScheduleFormParams) => {
  const i18n = useI18n();
  const params = useParams<{ organizationId: string }>();
  const addScheduleForm = useForm<AddScheduleSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(addScheduleSchema),
    defaultValues: {
      activityId: '',
      addressId: '',
      leadingId: '1',
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
    let weekAndTime: WeekAndTime[] | undefined;
    let dateStart = '';
    let dateEnd: string | undefined;
    let numberOfSeats: number | undefined;
    if (values.isRegularActivity && values.dateRange?.from) {
      weekAndTime = Object.entries(values.workingHours)
        .filter(([, element]) => !element.dayOff)
        .map(([day, element]): WeekAndTime => {
          const [from1, from2] = element.time.from.split(':');
          const [to1, to2] = element.time.to.split(':');

          const fromHour = Number(from1);
          const fromMinutes = Number(from2);

          const toHour = Number(to1);
          const toMinutes = Number(to2);

          return {
            weekDay: getWeekDayByIndex(+day),
            hourStart: fromHour,
            minStart: fromMinutes,
            hourEnd: toHour,
            minEnd: toMinutes
          };
        });
      dateStart = values.dateRange?.from?.toISOString();
      dateEnd = values.dateRange?.to?.toISOString();
    } else if (!values.isRegularActivity && values.date) {
      dateStart = values.date.toISOString();
    }
    if (values.preEntry && values.numberOfSeats) {
      numberOfSeats = +values.numberOfSeats;
    }

    const postScheduleMutationParams: PostScheduleParams = {
      ...values,
      weekAndTime,
      dateStart,
      dateEnd,
      numberOfSeats
    };
    await postScheduleMutation.mutateAsync({
      params: postScheduleMutationParams
    });
    toast(i18n.formatMessage({ id: 'dialog.addAddress.success' }), {
      cancel: { label: 'Close' }
    });

    onAdded();
  });

  return {
    state: {
      isLoading: postScheduleMutation.isPending,
      organizationId: params.organizationId
    },
    form: addScheduleForm,
    functions: { onSubmit }
  };
};
