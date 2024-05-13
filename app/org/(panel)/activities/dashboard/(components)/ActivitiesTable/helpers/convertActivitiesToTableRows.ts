export interface ActivitiesTableRow {
  id: string;
  organization: string;
  activity: string;
  location: string;
  status: string;
  category: string;
  view: string;
}

export const convertActivitiesToTableRows = (activities: $TSFIXME[]): ActivitiesTableRow[] =>
  activities.map((activity) => ({
    id: activity.id,
    organization: activity.organization ?? '-',
    activity: activity.activity ?? '-',
    location: activity.location ?? '-',
    status: activity.status,
    category: `organization.activities.category.${activity.category.toLowerCase()}`,
    view: activity.view
  }));
