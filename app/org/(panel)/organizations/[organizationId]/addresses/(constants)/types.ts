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
  city?: string;
  cityWithType?: string;
  country?: string;
  flat?: number;
  geoLat?: number;
  geoLon?: number;
  house?: string;
  id: string;
  legalEntityId: string;
  phoneNumber: string;
  postalCode?: string;
  region?: string;
  settlement?: string;
  settlementWithType?: string;
  street?: string;
  unrestrictedValue?: string;
  value?: string;
  workingHours: WorkingHour[];
}
