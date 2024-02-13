import { Edit3Icon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

import { WorkingHoursList } from './components/WorkingHoursList/WorkingHoursList';

interface AddressCardProps {
  address: OrganizationAddressDto;
}

export const AddressCard = ({
  address: { locality, street, house, details, workingHours }
}: AddressCardProps) => (
  <Card className='min-w-[340px] flex-1'>
    <CardContent className='flex flex-row-reverse justify-between p-8 pb-12 pr-5 pt-4'>
      <div>
        <Edit3Icon className='right text-placeholder' />
      </div>
      <div className='mt-6 flex flex-1 flex-col space-y-3'>
        <div className='flex justify-between'>
          <Typography variant='sub2' tag='h3' className='flex-1'>
            <I18nText path='table.column.location' />
          </Typography>
          <Typography variant='body2' tag='p' className='flex-1'>
            {locality}
          </Typography>
        </div>

        <div className='flex justify-between'>
          <Typography variant='sub2' tag='h3' className='flex-1'>
            <I18nText path='field.street.label' />
          </Typography>
          <Typography variant='body2' tag='p' className='flex-1'>
            {street}
          </Typography>
        </div>

        <div className='flex justify-between'>
          <Typography variant='sub2' tag='h3' className='flex-1'>
            <I18nText path='field.house.label' />
          </Typography>
          <Typography variant='body2' tag='p' className='flex-1'>
            {house}
          </Typography>
        </div>

        <div className='flex justify-between'>
          <Typography variant='sub2' tag='h3' className='flex-1'>
            <I18nText path='field.details.label' />
          </Typography>
          <Typography variant='body2' tag='p' className='flex-1'>
            {details}
          </Typography>
        </div>

        <div className='flex justify-between'>
          <Typography variant='sub2' tag='h3' className='flex-1'>
            <I18nText path='addressCard.description.workingTime' />
          </Typography>
          <Typography variant='body2' className='flex-1'>
            <WorkingHoursList workingHours={workingHours} />
          </Typography>
        </div>
      </div>
    </CardContent>
  </Card>
);
