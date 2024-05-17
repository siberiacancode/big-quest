import type { ScheduleResponse } from '@/api-types';

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
    leading: `${schedule.leading?.surname} ${schedule.leading?.name}` ?? '-',
    date: schedule.date ?? '-',
    time: schedule.weekAndTime?.[0].weekDay ?? '-',
    numberOfSeats: schedule.numberOfSeats ?? 0,
    passed: true
  }));
