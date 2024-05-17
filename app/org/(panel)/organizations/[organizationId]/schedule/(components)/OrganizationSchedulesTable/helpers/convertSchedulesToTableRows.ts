import type { ScheduleResponse } from '@/api-types';
import { addLeadingZero } from '@/utils/helpers';

export interface SchedulesTableRow {
  id: string;
  activity: string;
  address: string;
  leading: string;
  date: string;
  time: string;
  numberOfSeats: number;
  passed: boolean;
}

export const convertSchedulesToTableRows = (schedules: ScheduleResponse[]): SchedulesTableRow[] =>
  schedules.map((schedule) => ({
    id: schedule.id,
    activity: schedule.activity?.name ?? '-',
    address: schedule.address?.value ?? '-',
    leading: `${schedule.leading?.surname ?? ''} ${schedule.leading?.name ?? ''}` ?? '-',
    date: schedule.date ?? '-',
    time: schedule.weekAndTime
      ? schedule.weekAndTime
          .map(
            (weekDay) => `${addLeadingZero(weekDay.hourStart)}:${addLeadingZero(weekDay.minStart)}`
          )
          .join('/')
      : '-',
    numberOfSeats: schedule.numberOfSeats ?? 0,
    passed: true
  }));
