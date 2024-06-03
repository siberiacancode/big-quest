/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Big Quest
 * ## API Big Quest
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
