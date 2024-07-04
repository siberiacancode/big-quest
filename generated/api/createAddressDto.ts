/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Big Quest
 * ## API Big Quest
 * OpenAPI spec version: 1.0
 */
import type { LocalityDto } from './localityDto';
import type { WorkingHourDto } from './workingHourDto';

export interface CreateAddressDto {
  /** Идентификатор партнера */
  legalEntityId: string;
  /** Объект адреса */
  locality: LocalityDto;
  /** Рабочие часы */
  workingHours: WorkingHourDto[];
}
