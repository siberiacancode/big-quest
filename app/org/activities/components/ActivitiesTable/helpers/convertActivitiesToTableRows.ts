export interface ActivitiesTableRow {
  id: string;
  organization: string;
  activity: string;
  location: string;
  status: string;
  category: string;
  view: string;
}

export const convertActivitiesToTableRows = (
  activities: ActivitiesResponse[]
): ActivitiesTableRow[] =>
  activities.map((activity) => ({
    id: activity.id,
    organization: activity.organization ?? '-',
    activity: activity.activity ?? '-',
    location: activity.location ?? '-',
    status: `organization.activities.status.${activity.status.toLowerCase()}`,
    category: activity.category ?? '-',
    view: `organization.activities.view.${activity.view.toLowerCase()}`
  }));
