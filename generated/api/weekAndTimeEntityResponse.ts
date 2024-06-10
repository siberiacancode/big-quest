/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Big Quest
 * ## API Big Quest
 * OpenAPI spec version: 1.0
 */
import type { WeekDayEnum } from './weekDayEnum';

export interface WeekAndTimeEntityResponse {
  /** Время окончания (час) */
  hourEnd?: number;
  /** Время начала (час) */
  hourStart: number;
  /** Время окончания (мин) */
  minEnd?: number;
  /** Время начала (мин) */
  minStart: number;
  weekDay: WeekDayEnum;
}
