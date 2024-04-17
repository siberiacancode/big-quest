/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AddressResponseDto = {
  /**
   * Страна
   */
  country: string;
  /**
   * Регион
   */
  region: string;
  /**
   * Город
   */
  city: string;
  /**
   * Город с типом
   */
  cityWithType: string;
  /**
   * Населенный пункт
   */
  settlement: string;
  /**
   * Населенный пункт с типом
   */
  settlementWithType: string;
  /**
   * Почтовый индекс
   */
  postal_code: string;
  /**
   * Улица
   */
  street: string;
  /**
   * Номер дома
   */
  house: string;
  /**
   * Номер квартиры
   */
  flat: number;
  /**
   * Долгота
   */
  geo_lat: number;
  /**
   * Широта
   */
  geo_lon: number;
  /**
   * Неформатированное значение
   */
  unrestrictedValue: string;
  /**
   * Неформатированное значение
   */
  value: string;
};
