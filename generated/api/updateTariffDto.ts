/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { UpdateTariffDtoPeriodMonth } from './updateTariffDtoPeriodMonth';
import type { UpdateTariffDtoStatus } from './updateTariffDtoStatus';

export interface UpdateTariffDto {
  /** Бесплатные активности */
  freeActivity?: number;
  /** Кол-во шишек бесплатных активностей */
  freeActivityNuts?: number;
  /** Цена бесплатной активности */
  freeActivityPrice?: number;
  /** Максимальная цена платной активности */
  maxPricePaidActivity?: number;
  /** Платные активности */
  paidActivity?: number;
  /** Кол-во шишек платных активностей */
  paidActivityNuts?: number;
  /** Цена платной активности */
  paidActivityPrice?: number;
  /** Период */
  periodMonth?: UpdateTariffDtoPeriodMonth;
  /** Статус */
  status?: UpdateTariffDtoStatus;
  /** Итоговая стоимость. Если не задана - расчет производится на бэке */
  totalPrice?: number;
}
