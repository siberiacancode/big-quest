/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { CreateChangesDtoNew } from './createChangesDtoNew';
import type { CreateChangesDtoOld } from './createChangesDtoOld';

export interface CreateChangesDto {
  /** Название действия */
  action: string;
  /** Условие для фильтрации, например идентификатор организации */
  criteria: string;
  /** Новые данные в свободной форме после изменения */
  new: CreateChangesDtoNew;
  /** Старые данные в свободной форме до изменения */
  old: CreateChangesDtoOld;
}
