import { Edit3Icon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';

interface AddressCardProps {
  location?: string;
  street?: string;
  house?: number;
  details?: string;
  workingTime?: string;
}

export const AddressCard = ({
  location,
  street,
  house,
  details,
  workingTime
}: AddressCardProps) => {
  return (
    <Card className='min-w-80 flex-1 bg-background'>
      <CardContent className='flex flex-row-reverse justify-between p-8 pb-12 pr-5 pt-4'>
        <div>
          <Edit3Icon className='right text-placeholder' />
        </div>
        <div className='mt-6 flex flex-1 flex-col space-y-3'>
          <div className='flex justify-between'>
            <h3 className='flex-1 text-sm font-bold'>
              <I18nText path='table.column.location' />
            </h3>
            <span className='flex-1 text-sm'>{location}</span>
          </div>

          <div className='flex justify-between'>
            <h3 className='flex-1 text-sm font-bold'>
              <I18nText path='addressCard.description.street' />
            </h3>
            <span className='flex-1 text-sm'>{street}</span>
          </div>

          <div className='flex justify-between'>
            <h3 className='flex-1 text-sm font-bold'>
              <I18nText path='addressCard.description.house' />
            </h3>
            <span className='flex-1 text-sm'>{house}</span>
          </div>

          <div className='flex justify-between'>
            <h3 className='flex-1 text-sm font-bold'>
              <I18nText path='addressCard.description.details' />
            </h3>
            <span className='flex-1 text-sm'>{details}</span>
          </div>

          <div className='flex justify-between'>
            <h3 className='flex-1 text-sm font-bold'>
              <I18nText path='addressCard.description.workingTime' />
            </h3>
            <span className='flex-1 text-sm'>{workingTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
