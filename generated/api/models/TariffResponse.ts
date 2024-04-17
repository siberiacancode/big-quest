/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TariffResponse = {
  id: string;
  freeActivity: number;
  paidActivity: number;
  freeActivityPrice: number;
  paidActivityPrice: number;
  maxPricePaidActivity: number;
  freeActivityNuts: number;
  paidActivityNuts: number;
  totalPrice: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  periodMonth: number;
  dateStart: string;
  dateEnd: string;
  status: 'COORDINATION' | 'ACTIVE';
};
