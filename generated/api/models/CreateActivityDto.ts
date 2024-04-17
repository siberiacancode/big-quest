/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaDto } from './MediaDto';
export type CreateActivityDto = {
  /**
   * Медиа
   */
  media?: Array<MediaDto>;
  /**
   * Название
   */
  name: string;
  /**
   * Категория
   */
  category: string;
  /**
   * Описание
   */
  description?: string;
  /**
   * Возрастное ограничение ОТ и ДО
   */
  ageLimit: Array<number>;
  /**
   * Стоимость
   */
  price: number;
  /**
   * Продолжительность (мин)
   */
  duration: number;
  /**
   * Повторное прохождение
   */
  replay: boolean;
  /**
   * Идентификатор организации
   */
  organizationId: string;
};
