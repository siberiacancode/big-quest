/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { ActivityControllerGetPublicActivitysSortBy } from './activityControllerGetPublicActivitysSortBy';
import type { SortDirectionEnum } from './sortDirectionEnum';
import type { ActivityControllerGetPublicActivitysStatus } from './activityControllerGetPublicActivitysStatus';

export type ActivityControllerGetPublicActivitysParams = {
  current?: number;
  limit?: number;
  sortBy?: ActivityControllerGetPublicActivitysSortBy;
  sortDirection?: SortDirectionEnum;
  /**
   * Строка поиска
   */
  query?: string;
  /**
   * Название города или адрес
   */
  city?: string;
  /**
   * Категория
   */
  category?: string;
  /**
   * Статус
   */
  status?: ActivityControllerGetPublicActivitysStatus;
  /**
   * Идентификатор организации
   */
  organizationId?: string;
};
