/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RegisterEmailDto = {
  /**
   * Email пользователя
   */
  email: string;
  /**
   * Пароль пользователя
   */
  password: string;
  /**
   * Фамилия участника
   */
  surname: string;
  /**
   * Имя участника
   */
  name: string;
  /**
   * Отчество участника
   */
  middleName?: string;
  /**
   * ID паспорта участника
   */
  passportId?: string;
};
