/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationListResponse } from './OrganizationListResponse';
import type { PaginationResponse } from './PaginationResponse';
export type OrganisationListPaginationResponse = {
  /**
   * Строки с данными
   */
  rows: Array<OrganizationListResponse>;
  /**
   * Пагинация
   */
  pagination: PaginationResponse;
};
