export interface ActivitiesTableRow {
  id: string;
  organization: string;
  activity: string;
  location: string;
  stage: string;
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
    stage: activity.stage ?? '-',
    category: activity.category ?? '-',
    type: activity.type ?? '-'
  }));
