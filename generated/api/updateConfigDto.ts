/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { UpdateConfigDtoData } from './updateConfigDtoData';

export interface UpdateConfigDto {
  /** Объект настроек */
  data: UpdateConfigDtoData;
  /** Группа настроек */
  group: string;
  /** Идентификатор настроек */
  id: string;
  /** Ключ настроек */
  ident: string;
}
