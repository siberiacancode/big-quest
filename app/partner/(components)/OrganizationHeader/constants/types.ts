export type PartnerRole = 'SUPERADMIN' | 'ADMIN' | 'USER' | 'MANAGER' | 'MODERATOR' | 'SUPPORT';

export interface PartnerData {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  roles: PartnerRole[];
  isBlocked: boolean;
  isActive: boolean;
  name: string;
  surname: string;
  middleName: string;
  lastLogin: string;
  passportId: string;
  sex: 'MALE' | 'FEMALE';
  avatar: string;
  phone: string;
  password: string;
}
