'use server';

import { activities } from './activities';
import { categories } from './categories';

export const getCategories = () => {
  return categories;
};

export const getActivities = async ({ search, category, page, limit }) => {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
    // console.log(Date(), 'API getActivities');
    const filteredActivities = activities.filter((activity) => {
      const isMatch = search ? activity.title.toLowerCase().includes(search.toLowerCase()) : true;
      const isCategoryMatch =
        category && category !== 'ALL' ? activity.category === category : true;
      return isMatch && isCategoryMatch;
    });

    const totalCount = filteredActivities.length;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedActivities = filteredActivities.slice(startIndex, endIndex);

    return { activities: paginatedActivities, count: totalCount };
  } catch (error) {
    console.error('Произошла ошибка при получении списка активностей:', error);
    return { activities: [], count: 0 };
  }
};

export const getActivityById = async (id) => {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
    // console.log(Date(), 'API getActivityById');
    const activity = activities.find((item) => item.id === id);
    return activity || undefined;
  } catch (error) {
    console.error('Произошла ошибка при получении активности по ID:', error);
    return undefined;
  }
};
