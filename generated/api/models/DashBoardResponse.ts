/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Legals } from './Legals';
export type DashBoardResponse = {
  /**
   * Партнеры и их прирост за месяц
   */
  partners: Legals;
  /**
   * Спонсоры и их прирост за месяц
   */
  sponsors: Legals;
  /**
   * Заявки
   */
  applications: number;
  /**
   * Переговоры
   */
  negotiation: number;
  /**
   * Смена тарифа
   */
  tariffChange: number;
};
