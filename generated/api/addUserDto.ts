/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { MediaDto } from './mediaDto';
import type { AddUserDtoRole } from './addUserDtoRole';

export interface AddUserDto {
  /** Email сотрудника */
  email: string;
  /** Идентификатор организации, в которую добавляется сотрудник */
  legalEntityId: string;
  /** Медиа */
  media?: MediaDto[];
  /** Имя сотрудника */
  name: string;
  /** Телефон сотрудника */
  phone: string;
  /** Роль сотрудника */
  role: AddUserDtoRole;
  /** Фамилия сотрудника */
  surname: string;
}
