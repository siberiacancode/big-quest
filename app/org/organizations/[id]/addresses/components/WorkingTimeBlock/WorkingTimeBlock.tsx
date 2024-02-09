import { I18nText } from '@/components/common';

import { WorkingTimeItem } from './components/WorkingTimeItem/WorkingTimeItem';

interface WorkingTimeBlockProps {
  form: any;
}
export const WorkingTimeBlock = ({ form }: WorkingTimeBlockProps) => (
  <>
    <h3 className='font-medium'>
      <I18nText path='addressCard.description.workingTime' />
    </h3>
    <WorkingTimeItem day={0} form={form} />
    <WorkingTimeItem day={1} form={form} />
    <WorkingTimeItem day={2} form={form} />
    <WorkingTimeItem day={3} form={form} />
    <WorkingTimeItem day={4} form={form} />
    <WorkingTimeItem day={5} form={form} />
    <WorkingTimeItem day={6} form={form} />
  </>
);
