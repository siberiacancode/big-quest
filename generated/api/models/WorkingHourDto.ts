/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WorkingHourDto = {
  /**
   * Дни недели от 0 до 6, где 0 - понедельник
   */
  day: number;
  /**
   * Время С
   */
  from: WorkingHourDto;
  /**
   * Время По
   */
  to: WorkingHourDto;
  /**
   * Выходной
   */
  dayOff: boolean;
};
