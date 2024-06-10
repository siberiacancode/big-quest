/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Big Quest
 * ## API Big Quest
 * OpenAPI spec version: 1.0
 */
import type { LegalInformation } from './legalInformation';
import type { MediaDto } from './mediaDto';
import type { Requisites } from './requisites';
import type { OrganizationResponseStage } from './organizationResponseStage';
import type { OrganizationResponseType } from './organizationResponseType';

export interface OrganizationResponse {
  /** Контактное имя */
  contactName: string;
  /** Описание */
  description?: string;
  /** Email организации */
  email?: string;
  /** Идентификатор организации */
  id: string;
  /** Юридическая информация */
  information?: LegalInformation;
  /** Населенный пункт */
  locality?: string;
  /** контент (фото/видео) */
  media: MediaDto[];
  /** Название */
  name?: string;
  /** Телефонный номер */
  phone: number;
  /** Реквизиты */
  requisites?: Requisites;
  /** Сайт организации */
  site?: string;
  /** Социальные сети */
  social?: string[];
  /** Статус */
  stage: OrganizationResponseStage;
  /** Тип юр лица */
  type: OrganizationResponseType;
}
