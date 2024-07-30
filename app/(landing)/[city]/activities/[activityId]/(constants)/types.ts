import type { ExtendedScheduleResponse } from '@/utils/api';

export interface AddressProps {
  id: string;
  value: string;
  details: string;
}

export interface Time {
  start: string;
  end: string;
  info: ExtendedScheduleResponse;
}

export interface GroupedSchedule {
  date: Date;
  times: Time[];
}
