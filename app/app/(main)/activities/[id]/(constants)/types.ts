import type { ScheduleResponse } from '@/api-types';

export interface ExtendedScheduleResponse extends ScheduleResponse {
  employeeNumber?: string;
}

export interface ExtendedInfoResponse extends ScheduleResponse {
  formattedTime?: string;
}

export interface AddressProps {
  id: number;
  value: string;
}

export interface GroupedSchedule {
  date: Date;
  times: string[];
  info: ExtendedInfoResponse[];
}
