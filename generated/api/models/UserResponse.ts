/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserResponse = {
  /**
   * Идентификатор
   */
  id: string;
  /**
   * Email
   */
  email: string;
  /**
   * Дата создания
   */
  createdAt: string;
  /**
   * Дата обновления
   */
  updatedAt: string;
  /**
   * Роли
   */
  roles: Array<'SUPERADMIN' | 'ADMIN' | 'USER' | 'MANAGER' | 'MODERATOR' | 'SUPPORT' | 'LEADING'>;
  /**
   * Признак блокировки
   */
  isBlocked: boolean;
  /**
   * Признак активен или нет
   */
  isActive: boolean;
  /**
   * Имя
   */
  name: string;
  /**
   * Фамилия
   */
  surname: string;
  /**
   * Отчество
   */
  middleName: string;
  /**
   * Дата последней авторизации
   */
  lastLogin: string;
  /**
   * Идентификатор паспорта
   */
  passportId: string;
  /**
   * Пол
   */
  sex: 'MALE' | 'FEMALE';
  /**
   * Аватар
   */
  avatar: string;
  /**
   * Аватар
   */
  media: Array<any[]>;
  /**
   * Телефонный номер
   */
  phone: number;
};
