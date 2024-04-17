/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaDto } from './MediaDto';
import type { OrganizationInformationDto } from './OrganizationInformationDto';
import type { RequisitesDto } from './RequisitesDto';
export type UpdateOrganizationDto = {
  /**
   * Медиа
   */
  media?: Array<MediaDto>;
  /**
   * Населенный пункт
   */
  locality?: string;
  /**
   * Название
   */
  name?: string;
  /**
   * Описание
   */
  description?: string;
  /**
   * ИНН
   */
  inn?: string;
  /**
   * Юридическая информация
   */
  information?: OrganizationInformationDto;
  /**
   * Реквизиты
   */
  requisites?: RequisitesDto;
  /**
   * Статус
   */
  stage?: 'REQUEST' | 'NEGOTIATION' | 'CONCLUSION';
};
