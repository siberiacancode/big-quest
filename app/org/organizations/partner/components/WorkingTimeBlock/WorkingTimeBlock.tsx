import { I18nText } from '@/components/common';

import { WorkingTimeItem } from './components/WorkingTimeItem/WorkingTimeItem';

export const WorkingTimeBlock = () => (
  <div>
    <h3 className='font-medium'>
      <I18nText path='addressCard.description.workingTime' />
    </h3>
    <WorkingTimeItem day='Пн' />
    <WorkingTimeItem day='Вт' />
    <WorkingTimeItem day='Ср' />
    <WorkingTimeItem day='Чт' />
    <WorkingTimeItem day='Пт' />
    <WorkingTimeItem day='Сб' />
    <WorkingTimeItem day='Вс' />
  </div>
);
