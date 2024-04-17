/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateChangesDto = {
  /**
   * Условие для фильтрации, например идентификатор организации
   */
  criteria: string;
  /**
   * Старые данные в свободной форме до изменения
   */
  old: Record<string, any>;
  /**
   * Новые данные в свободной форме после изменения
   */
  new: Record<string, any>;
  /**
   * Название действия
   */
  action: string;
};
