export interface ActivitiesTableRow {
  id: string;
  organization: string;
  activity: string;
  location: string;
  status: string;
  category: string;
  type: string;
}

export const convertActivitiesToTableRows = (
  activities: ActivitiesResponse[]
): ActivitiesTableRow[] =>
  activities.map((activity) => ({
    id: activity.id,
    organization: activity.organization ?? '-',
    activity: activity.activity ?? '-',
    location: activity.location ?? '-',
    status: activity.status ?? '-',
    category: activity.category ?? '-',
    type: activity.type ?? '-'
  }));
