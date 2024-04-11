'use server';

import { activities } from './activities';
import { categories } from './categories';

export const getCategories = async () => {
  return categories;
};

export const getActivities = async ({ search, category }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 0));
    //console.log(Date(), 'API getActivities');
    const filteredActivities = activities.filter((activity) => {
      const isMatch = search ? activity.title.toLowerCase().includes(search.toLowerCase()) : true;
      const isCategoryMatch =
        category && category !== 'ALL' ? activity.category === category : true;
      return isMatch && isCategoryMatch;
    });
    return filteredActivities;
  } catch (error) {
    console.error('Произошла ошибка при получении списка активностей:', error);
    return [];
  }
};

export const getActivityById = async (id) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 0));
    //console.log(Date(), 'API getActivityById');
    const activity = activities.find((item) => item.id === id);
    return activity ? activity : undefined;
  } catch (error) {
    console.error('Произошла ошибка при получении активности по ID:', error);
    return undefined;
  }
};
