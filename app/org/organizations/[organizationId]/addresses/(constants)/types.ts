export interface AddressData {
  organizationId: string;
  locality: string;
  street: string;
  house: string;
  details?: string;
  workingHours: WorkingHourDto[];
}
