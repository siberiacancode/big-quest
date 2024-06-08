import type { ScheduleAddress } from '@/api-types';

export interface WorkingHour {
  day: number;
  from: {
    hour: number;
    minutes: number;
  };
  to: {
    hour: number;
    minutes: number;
  };
  dayOff: boolean;
}

export interface AddressData {
  id: string;
  locality: ScheduleAddress;
  workingHours: WorkingHour[];
  details?: string;
}
