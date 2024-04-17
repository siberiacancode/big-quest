/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChangeTariffDto = {
  /**
   * Идентификатор тарифа
   */
  id: string;
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
};
