import type { ScheduleResponse } from '@/api-types';

export interface ExtendedScheduleResponse extends ScheduleResponse {
  employeeNumber?: string;
  start?: string;
}

export interface AddressProps {
  id: string;
  value: string;
  details: string;
}

export interface Time {
  start: string;
  end: string;
}

export interface GroupedSchedule {
  date: Date;
  times: Time[];
  info: ExtendedScheduleResponse[];
}
