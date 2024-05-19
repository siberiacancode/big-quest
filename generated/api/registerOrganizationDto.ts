/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { RegisterOrganizationDtoType } from './registerOrganizationDtoType';

export interface RegisterOrganizationDto {
  /** Контактное имя */
  contactName: string;
  /** ИНН */
  inn?: string;
  /** КПП */
  kpp?: string;
  /** Населенный пункт */
  location: string;
  /** ОГРН */
  ogrn?: string;
  /** Наименование организации */
  organization: string;
  /** Телефонный номер */
  phone: string;
  /** Тип организации */
  type: RegisterOrganizationDtoType;
}
