export const convertSchedulesToTableRows = (schedules: $TSFIXME[]): $TSFIXME =>
  schedules.map((schedule) => ({
    id: schedule.id,
    activityName: schedule.activityId ?? '-',
    locality: schedule.address.street ?? '-',
    employee: schedule.leadingEmployeeId ?? '-',
    date: schedule.dateAndTime.date ?? '-',
    time: schedule.dateAndTime.timeFrom.hour ?? '-',
    maxNumberOfParticipants: schedule.maxNumberOfParticipants ?? '-',
    passed: schedule.regular ?? '-'
  }));
