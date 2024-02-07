interface WorkingHoursListProps {
  workingHours: WorkingHourDto[];
}

export const WorkingHoursList = ({ workingHours }: WorkingHoursListProps) => (
  <div className='m-3 mt-4 flex flex-wrap gap-5'>
    {workingHours.map((hour, index) => (
      <div key={index} className=''>
        <div className='flex justify-between'>
          <span>
            Day: {hour.day} {` `}
          </span>
          <span> Day off: {hour.dayOff ? 'Yes' : 'No'}</span>
        </div>
        <div>
          <span>
            {hour.from.hour}:{hour.from.minutes}
          </span>
          <span>
            - {hour.to.hour}:{hour.to.minutes}
          </span>
        </div>
      </div>
    ))}
  </div>
);
