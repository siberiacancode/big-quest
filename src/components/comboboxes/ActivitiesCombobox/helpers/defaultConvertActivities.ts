import type { ActivityListResponse } from '@/api-types';

export const defaultConvertActivities = (activities: ActivityListResponse[]) =>
  activities.map((activity) => ({
    label: activity.name,
    value: activity.id
  }));
