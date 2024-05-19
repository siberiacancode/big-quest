/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { WorkingHourDto } from './workingHourDto';

export interface CreateAddressDto {
  /** Детали адреса в свободной форме */
  details: string;
  /** Номер дома */
  house: string;
  /** Идентификатор партнера */
  legalEntityId: string;
  /** Населенный пункт */
  locality: string;
  /** Улица */
  street: string;
  /** Рабочие часы */
  workingHours: WorkingHourDto[];
}
