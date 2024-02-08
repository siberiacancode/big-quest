import type { Control } from 'react-hook-form';

import { I18nText } from '@/components/common';

import type { AddAddressSchema } from '../AddAddressForm/constants/addAddressSchema';

import { WorkingTimeItem } from './components/WorkingTimeItem/WorkingTimeItem';

interface WorkingTimeBlockProps {
  control: Control<AddAddressSchema>;
}
export const WorkingTimeBlock = ({ control }: WorkingTimeBlockProps) => (
  <>
    <h3 className='font-medium'>
      <I18nText path='addressCard.description.workingTime' />
    </h3>
    <WorkingTimeItem control={control} day={0} />
    <WorkingTimeItem control={control} day={1} />
    <WorkingTimeItem control={control} day={2} />
    <WorkingTimeItem control={control} day={3} />
    <WorkingTimeItem control={control} day={4} />
    <WorkingTimeItem control={control} day={5} />
    <WorkingTimeItem control={control} day={6} />
  </>
);
