/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Big Quest
 * ## API Big Quest
 * OpenAPI spec version: 1.0
 */

export interface PaginationResponse {
  /** Общее кол-во строк в БД с учетом фильтра */
  count: number;
  /** Страница */
  current: number;
  /** Кол-во элементов на странице */
  limit: number;
}
