/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { MediaResponseFlag } from './mediaResponseFlag';
import type { MediaResponseType } from './mediaResponseType';

export interface MediaResponse {
  /** Флаг медиа */
  flag?: MediaResponseFlag;
  /** Идентификатор медиа */
  id: string;
  /** Тип медиа */
  type: MediaResponseType;
  /** Ссылка на файл */
  url: string;
}
