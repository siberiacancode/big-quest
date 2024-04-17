/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateAndTime } from './DateAndTime';
import type { DatePeriodWithTimes } from './DatePeriodWithTimes';
import type { Points } from './Points';
import type { ScheduleAddress } from './ScheduleAddress';
export type UpdateScheduleActivityDto = {
  /**
   * Адрес
   */
  address: ScheduleAddress;
  /**
   * Идентификатор ведущего
   */
  leadingEmployeeId: string;
  /**
   * Предварительная запись
   */
  entry: boolean;
  /**
   * Регулярность
   */
  regular: boolean;
  /**
   * Максимальное кол-во участников
   */
  maxNumberOfParticipants: number;
  /**
   * Дата и время
   */
  dateAndTime: DateAndTime;
  /**
   * Период дат и время по л=дням недели
   */
  datePeriodWithTimes: DatePeriodWithTimes;
  /**
   * Координаты
   */
  points: Points;
};
