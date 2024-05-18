import { WeekDayEnum } from '@/api-types';

export const getWeekDayByIndex = (index: number) => Object.values(WeekDayEnum)[index];
