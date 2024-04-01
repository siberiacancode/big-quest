export const defaultConvertActivities = (activities: ActivityListItemResponse[]) =>
  activities.map((activity) => ({
    label: activity.name,
    value: activity.id
  }));
