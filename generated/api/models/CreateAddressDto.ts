/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkingHourDto } from './WorkingHourDto';
export type CreateAddressDto = {
  /**
   * Детали адреса в свободной форме
   */
  details: string;
  /**
   * Номер дома
   */
  house: string;
  /**
   * Населенный пункт
   */
  locality: string;
  /**
   * Улица
   */
  street: string;
  /**
   * Рабочие часы
   */
  workingHours: Array<WorkingHourDto>;
  /**
   * Идентификатор партнера
   */
  legalEntityId: string;
};
