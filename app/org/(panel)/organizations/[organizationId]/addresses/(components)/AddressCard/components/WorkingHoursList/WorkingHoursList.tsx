import React from 'react';

import { I18nText } from '@/components/common';
import { addLeadingZero } from '@/utils/helpers';

import type { WorkingHour } from '../../../../(constants)/types';

interface WorkingHoursListProps {
  workingHours: WorkingHour[];
}

export const WorkingHoursList = ({ workingHours }: WorkingHoursListProps) => {
  const formattedWorkingHours = workingHours.reduce(
    (acc, workingHour) => {
      if (workingHour.dayOff) {
        const dayOffKey = 'dayOfWeek.dayOff';
        if (acc[dayOffKey]) {
          acc[dayOffKey].push(workingHour);
        } else acc[dayOffKey] = [workingHour];
      }

      if (!workingHour.dayOff) {
        const timeKey = `${addLeadingZero(workingHour.from.hour)}:${addLeadingZero(workingHour.from.minutes)} - ${addLeadingZero(workingHour.to.hour)}:${addLeadingZero(workingHour.to.minutes)}`;
        if (acc[timeKey]) {
          acc[timeKey].push(workingHour);
        } else acc[timeKey] = [workingHour];
      }

      return acc;
    },
    {} as Record<string, WorkingHourDto[]>
  );

  return (
    <div className='flex flex-wrap gap-2'>
      {Object.entries(formattedWorkingHours).map(([key, workingHours], index) => (
        <div key={index}>
          {workingHours.map((workingHour, index) => (
            <React.Fragment key={index}>
              <I18nText path={`dayOfWeek.${workingHour.day + 1}` as LocaleMessageId} />
              {index !== workingHours.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}
          {key === 'dayOfWeek.dayOff' && (
            <>
              : <I18nText path='dayOfWeek.dayOff' />
            </>
          )}
          {key !== 'dayOfWeek.dayOff' && <>: {key}</>}
        </div>
      ))}
    </div>
  );
};
