export interface ScheduleTableRow {
  id: string;
  activityName: string;
  locality: string;
  employee: string;
  date: string;
  time: string;
  maxNumberOfParticipants: number;
  passed: boolean;
}

export const convertSchedulesToTableRows = (schedules: ScheduleResponse[]): ScheduleTableRow[] =>
  schedules.map((schedule) => ({
    id: schedule.id,
    activityName: schedule.activityId ?? '-',
    locality: schedule.address.street ?? '-',
    employee: schedule.leadingEmployeeId ?? '-',
    date: schedule.dateAndTime.date ?? '-',
    time: schedule.time ?? '-',
    maxNumberOfParticipants: schedule.maxNumberOfParticipants ?? '-',
    passed: schedule.regular ?? '-'
  }));
