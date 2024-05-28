import type { ScheduleResponse } from '@/api-types';

export interface FreeTime {
  date: string;
  times: string[];
}

export interface ExtendedScheduleResponse extends ScheduleResponse {
  employeeNumber?: string;
}

export interface AddressProps {
  id: number;
  value: string;
  schedule: ExtendedScheduleResponse[];
}
