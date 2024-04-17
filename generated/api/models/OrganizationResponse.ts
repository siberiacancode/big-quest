/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegalInformation } from './LegalInformation';
import type { MediaDto } from './MediaDto';
import type { Requisites } from './Requisites';
export type OrganizationResponse = {
  /**
   * Контактное имя
   */
  contactName: string;
  /**
   * Телефонный номер
   */
  phone: number;
  /**
   * Email организации
   */
  email?: string;
  /**
   * Сайт организации
   */
  site?: string;
  /**
   * Социальные сети
   */
  social?: string;
  /**
   * Фоновое изображение
   */
  background?: string;
  /**
   * Фото аватара
   */
  avatar?: string;
  /**
   * Населенный пункт
   */
  locality?: string;
  /**
   * Идентификатор организации
   */
  id: string;
  /**
   * Название
   */
  name?: string;
  /**
   * Описание
   */
  description?: string;
  /**
   * Юридическая информация
   */
  information?: LegalInformation;
  /**
   * Реквизиты
   */
  requisites?: Requisites;
  /**
   * Статус
   */
  stage: 'REQUEST' | 'NEGOTIATION' | 'CONCLUSION';
  /**
   * Тип юр лица
   */
  type: 'PARTNER' | 'FRANCHISEE' | 'SPONSOR' | 'ORGANIZER';
  /**
   * контент (фото/видео)
   */
  media: Array<MediaDto>;
};
