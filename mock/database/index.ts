import { ACTIVITIES } from './activities';
import { ADDRESSES } from './addresses';
import { CATEGORIES } from './categories';
import { EMPLOYEES } from './employees';
import { USER } from './user';

export const DATABASE = {
  USER,
  CATEGORIES,
  ACTIVITIES,
  ORGANIZATIONS: {
    EMPLOYEES,
    ADDRESSES
  }
};
