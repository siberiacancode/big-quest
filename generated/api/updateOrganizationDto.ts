/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { OrganizationInformationDto } from './organizationInformationDto';
import type { MediaDto } from './mediaDto';
import type { RequisitesDto } from './requisitesDto';
import type { UpdateOrganizationDtoStage } from './updateOrganizationDtoStage';

export interface UpdateOrganizationDto {
  /** Описание */
  description?: string;
  /** Юридическая информация */
  information?: OrganizationInformationDto;
  /** ИНН */
  inn?: string;
  /** Населенный пункт */
  locality?: string;
  /** Медиа */
  media?: MediaDto[];
  /** Название */
  name?: string;
  /** Реквизиты */
  requisites?: RequisitesDto;
  /** Статус */
  stage?: UpdateOrganizationDtoStage;
}
