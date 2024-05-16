export const defaultConvertActivities = (activities: $TSFIXME[]) =>
  activities.map((activity) => ({
    label: activity.name,
    value: activity.id
  }));
