import { ACTIVITY_LIST } from './activityList';
import { ADDRESSES } from './addresses';
import { CATEGORIES } from './categories';
import { EMPLOYEES } from './employees';
import { SCHEDULES } from './schedules';
import { USER } from './user';

export const DATABASE = {
  USER,
  CATEGORIES,
  SCHEDULES,
  ACTIVITY_LIST,
  ORGANIZATIONS: {
    EMPLOYEES,
    ADDRESSES
  }
};
