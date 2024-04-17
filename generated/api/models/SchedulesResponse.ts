/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationResponse } from './PaginationResponse';
import type { ScheduleResponse } from './ScheduleResponse';
export type SchedulesResponse = {
  /**
   * Строки с данными
   */
  rows: Array<ScheduleResponse>;
  /**
   * Пагинация
   */
  pagination: PaginationResponse;
};
