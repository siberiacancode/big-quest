/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrganizationListResponse = {
  /**
   * Идентификатор организации
   */
  id: string;
  /**
   * Название организации
   */
  name: string;
  /**
   * Населенный пункт
   */
  locality: string;
  /**
   * Тариф. Бесплатный | Смена | Стоимость тарифа
   */
  tariff: string;
  /**
   * Кол-во дней действия тарифа. Без даты - INFINITY
   */
  countDays: string;
  /**
   * Статус
   */
  stage: 'REQUEST' | 'NEGOTIATION' | 'CONCLUSION';
  /**
   * Тип юр лица
   */
  type: 'PARTNER' | 'FRANCHISEE' | 'SPONSOR' | 'ORGANIZER';
};
