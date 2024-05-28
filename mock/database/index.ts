import { ACTIVITY_LIST } from './activityList';
import { ADDRESSES } from './addresses';
import { CATEGORIES } from './categories';
import { EMPLOYEES } from './employees';
import { SCHEDULE } from './schedule';
import { USER } from './user';

export const DATABASE = {
  USER,
  CATEGORIES,
  SCHEDULE,
  ACTIVITY_LIST,
  ORGANIZATIONS: {
    EMPLOYEES,
    ADDRESSES
  }
};
