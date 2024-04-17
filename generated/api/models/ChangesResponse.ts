/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChangesResponse = {
  /**
   * Идентификатор записи
   */
  id: string;
  /**
   * Дата создания
   */
  createdAt: string;
  /**
   * Автор истории
   */
  author: Record<string, any>;
  /**
   * Идентификатор в рамках которого пишется история
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
