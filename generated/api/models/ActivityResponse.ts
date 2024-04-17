/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaDto } from './MediaDto';
import type { ScheduleResponse } from './ScheduleResponse';
export type ActivityResponse = {
  /**
   * Идентификатор
   */
  id: string;
  /**
   * Обложка
   */
  cover: string;
  /**
   * контент (фото/видео)
   */
  media: Array<MediaDto>;
  /**
   * Название
   */
  name: string;
  /**
   * Описание
   */
  description: string;
  /**
   * Возрастное ограничение ОТ и ДО
   */
  ageLimit: Array<number>;
  /**
   * Стоимость
   */
  price: number;
  /**
   * Кол-во орешков
   */
  nutsCount: number;
  /**
   * Продолжительность (мин)
   */
  duration: number;
  /**
   * Повторное прохождение
   */
  replay: boolean;
  /**
   * Вид
   */
  view: 'ONLINE' | 'OFFLINE';
  /**
   * Статус
   */
  status: 'DRAFT' | 'MODERATION' | 'EDITING' | 'PUBLISHED' | 'CLOSED';
  /**
   * Категория
   */
  category: string;
  /**
   * Расписание
   */
  schedule: Array<ScheduleResponse>;
  /**
   * Лайки
   */
  likes: number;
  /**
   * Участники
   */
  participants: number;
};
