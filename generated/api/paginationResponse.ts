/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
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
