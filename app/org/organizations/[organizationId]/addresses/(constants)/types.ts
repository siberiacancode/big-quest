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
  locality: string;
  street: string;
  house: string;
  details?: string;
  workingHours: WorkingHour[];
}
