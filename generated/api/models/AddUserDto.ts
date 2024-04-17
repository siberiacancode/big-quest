/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaDto } from './MediaDto';
export type AddUserDto = {
  /**
   * Роль сотрудника
   */
  role: 'SUPERADMIN' | 'ADMIN' | 'USER' | 'MANAGER' | 'MODERATOR' | 'SUPPORT' | 'LEADING';
  /**
   * Фамилия сотрудника
   */
  surname: string;
  /**
   * Имя сотрудника
   */
  name: string;
  /**
   * Email сотрудника
   */
  email: string;
  /**
   * Телефон сотрудника
   */
  phone: string;
  /**
   * Идентификатор организации, в которую добавляется сотрудник
   */
  legalEntityId: string;
  /**
   * Медиа
   */
  media?: Array<MediaDto>;
};
