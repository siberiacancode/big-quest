/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RegisterOrganizationDto = {
  /**
   * Наименование организации
   */
  organization: string;
  /**
   * Населенный пункт
   */
  location: string;
  /**
   * Тип организации
   */
  type: 'PARTNER' | 'FRANCHISEE' | 'SPONSOR' | 'ORGANIZER';
  /**
   * Контактное имя
   */
  contactName: string;
  /**
   * Телефонный номер
   */
  phone: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * КПП
   */
  kpp?: string;
  /**
   * ОГРН
   */
  ogrn?: string;
};
