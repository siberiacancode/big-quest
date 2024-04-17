/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationResponse } from './PaginationResponse';
import type { UserResponse } from './UserResponse';
export type UsersResponse = {
  /**
   * Строки с данными
   */
  rows: Array<UserResponse>;
  /**
   * Пагинация
   */
  pagination: PaginationResponse;
};
