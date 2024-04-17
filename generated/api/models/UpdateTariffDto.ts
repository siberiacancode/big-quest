/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateTariffDto = {
  /**
   * Бесплатные активности
   */
  freeActivity?: number;
  /**
   * Платные активности
   */
  paidActivity?: number;
  /**
   * Период
   */
  periodMonth?: 1 | 3 | 6 | 12;
  /**
   * Цена бесплатной активности
   */
  freeActivityPrice?: number;
  /**
   * Цена платной активности
   */
  paidActivityPrice?: number;
  /**
   * Максимальная цена платной активности
   */
  maxPricePaidActivity?: number;
  /**
   * Кол-во шишек бесплатных активностей
   */
  freeActivityNuts?: number;
  /**
   * Кол-во шишек платных активностей
   */
  paidActivityNuts?: number;
  /**
   * Итоговая стоимость. Если не задана - расчет производится на бэке
   */
  totalPrice?: number;
  /**
   * Статус
   */
  status?: 'COORDINATION' | 'ACTIVE';
};
