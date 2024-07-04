/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Big Quest
 * ## API Big Quest
 * OpenAPI spec version: 1.0
 */
import type { EmployeePosition } from './employeePosition';

export interface EmployeeResponse {
  /** Фото аватара */
  avatar?: string;
  /** Email сотрудника */
  email: string;
  /** Имя */
  firstName: string;
  /** Идентификатор сотрудника */
  id: string;
  /** Фамилия */
  lastName: string;
  /** Отчество */
  middleName?: string;
  /** Идентификатор организации */
  organizationId: string;
  /** Тел номер */
  phone: string;
  position: EmployeePosition;
  /** Идентификатор пользователя */
  userId: string;
}
