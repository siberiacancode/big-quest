/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */

export type ChangesControllerGetChangesParams = {
  /**
   * Кол-во строк на странице
   */
  limit?: number;
  /**
   * Текущая страница
   */
  current?: number;
  /**
   * Условие для фильтрации
   */
  criteria: string;
};
