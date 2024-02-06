import type { Control } from 'react-hook-form';

import { I18nText } from '@/components/common';

import type { AddAddressSchema } from '../AddAddressForm/constants/addAddressSchema';

import { WorkingTimeItem } from './components/WorkingTimeItem/WorkingTimeItem';

interface WorkingTimeBlockProps {
  control: Control<AddAddressSchema>;
}
export const WorkingTimeBlock = ({ control }: WorkingTimeBlockProps) => (
  <div>
    <h3 className='font-medium'>
      <I18nText path='addressCard.description.workingTime' />
    </h3>
    <WorkingTimeItem control={control} day='Monday' />
    <WorkingTimeItem control={control} day='Tuesday' />
    <WorkingTimeItem control={control} day='Wednesday' />
    <WorkingTimeItem control={control} day='Thursday' />
    <WorkingTimeItem control={control} day='Friday' />
    <WorkingTimeItem control={control} day='Saturday' />
    <WorkingTimeItem control={control} day='Sunday' />
  </div>
);
