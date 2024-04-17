/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangesResponse } from './ChangesResponse';
import type { PaginationResponse } from './PaginationResponse';
export type ChangesResponseWithPagination = {
  rows: Array<ChangesResponse>;
  /**
   * Пагинация
   */
  pagination: PaginationResponse;
};
