/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityResponse } from './ActivityResponse';
import type { PaginationResponse } from './PaginationResponse';
export type ActivityWithPaginationResponse = {
  /**
   * Строки с данными
   */
  rows: Array<ActivityResponse>;
  /**
   * Пагинация
   */
  pagination: PaginationResponse;
};
