/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * BQ
 * ## API BQ
 * OpenAPI spec version: 1.0
 */
import type { TariffResponseStatus } from './tariffResponseStatus';

export interface TariffResponse {
  createdAt: string;
  dateEnd: string;
  dateStart: string;
  discount: number;
  freeActivity: number;
  freeActivityNuts: number;
  freeActivityPrice: number;
  id: string;
  maxPricePaidActivity: number;
  paidActivity: number;
  paidActivityNuts: number;
  paidActivityPrice: number;
  periodMonth: number;
  status: TariffResponseStatus;
  totalPrice: number;
  updatedAt: string;
}
