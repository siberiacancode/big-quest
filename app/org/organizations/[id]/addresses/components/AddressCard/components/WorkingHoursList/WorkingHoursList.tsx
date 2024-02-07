import { I18nText } from '@/components/common';

interface WorkingHoursListProps {
  workingHours: WorkingHourDto[];
}

export const WorkingHoursList = ({ workingHours }: WorkingHoursListProps) => (
  <div className='m-3 mt-4 flex flex-wrap gap-5'>
    {workingHours.map((hour, index) => (
      <div key={index} className=''>
        <div className='flex justify-between gap-2'>
          <span>
            <I18nText path={`dayOfWeek.${hour.day + 1}` as LocaleMessageId} />
          </span>
          <span>{hour.dayOff && <I18nText path='dayOfWeek.dayOff' />}</span>
        </div>
        {!hour.dayOff && (
          <div>
            <span>
              {hour.from.hour}:{hour.from.minutes}
            </span>
            <span>
              - {hour.to.hour}:{hour.to.minutes}
            </span>
          </div>
        )}
      </div>
    ))}
  </div>
);
