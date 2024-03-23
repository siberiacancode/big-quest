export interface ScheduleTableRow {
  id: string;
  activityName: string;
  locality: string;
  date: string;
  time: string;
  registrationCount: number;
  passed: boolean;
}

export const convertSchedulesToTableRows = (
  schedules: OrganizationScheduleResponse[]
): ScheduleTableRow[] =>
  schedules.map((schedule) => ({
    id: schedule.id,
    activityName: schedule.activityName ?? '-',
    locality: schedule.locality ?? '-',
    date: schedule.date ?? '-',
    time: schedule.time ?? '-',
    registrationCount: schedule.registrationCount,
    passed: schedule.passed ?? '-'
  }));
