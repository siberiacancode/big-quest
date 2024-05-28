/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { Translations } from './translations';
import type { Locality } from './locality';
import type { MediaResponse } from './mediaResponse';
import type { ActivityStatus } from './activityStatus';
import type { ActivityView } from './activityView';

export interface ActivityListResponse {
  /** Возрастное ограничение */
  ageLimit: number[];
  /** Категория */
  category: Translations;
  /** Описание */
  description?: string;
  /** Продолжительность */
  duration: number;
  /** Идентификатор */
  id: string;
  /** Кол-во лайков */
  likes: number;
  /** Местоположение */
  locality: Locality;
  /** Медиа */
  media: MediaResponse[];
  /** Название активности */
  name: string;
  /** Кол-во орешков */
  nutsCount: number;
  /** Идентификатор организации */
  organizationId: string;
  /** Название организации */
  organizationName: string;
  /** Цена */
  price: number;
  /** Признак повтора */
  replay: boolean;
  status: ActivityStatus;
  view: ActivityView;
}
