import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Typography } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

import type { AddressProps } from '../../(constants)/types';

export interface AddressItemProps {
  id: string;
  address: AddressProps;
}

export const AddressItem = ({ address, id }: AddressItemProps) => {
  return (
    <Link
      href={ROUTES.APP.ACTIVITIES.SCHEDULE(id)}
      className='flex justify-between rounded-lg border border-border px-3'
    >
      <Typography variant='sub3' tag='h3'>
        {address.value}
      </Typography>
      <ChevronRight />
      {/* <div className='flex gap-2'>
            <Typography variant='sub3' tag='h3'>
              <I18nText path='field.details.label' />
            </Typography>
             <Typography variant='body5' tag='p'>
              {address.schedule?.details}
            </Typography> 
          </div> */}

      {/* <div className='flex'>
          <Typography variant='sub3' tag='h3' className='flex-1'>
            <I18nText path='field.chooseAnotherTime.label' />
          </Typography>
          <ChevronRightIcon className='stroke-muted-foreground' />
        </div>
        <div className='flex'>
          <Typography variant='sub3' tag='h3' className='flex-1'>
            <I18nText path='field.goToSupportChat.label' />
          </Typography>
          <ChevronRightIcon className='stroke-muted-foreground' />
        </div> */}
    </Link>
  );
};
