import { ChevronRight } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

import type { AddressProps } from '../../(constants)/types';

export interface AddressItemProps {
  address: AddressProps;
}

export const AddressItem = ({ address }: AddressItemProps) => (
  <>
    <div className='flex flex-col gap-2'>
      <Typography variant='sub3' tag='h3' className='break-words'>
        {address.value}
      </Typography>
      <div className='flex items-center gap-3'>
        <Typography variant='sub6' tag='h3'>
          <I18nText path='field.details.label' />
        </Typography>
        <Typography variant='body3' tag='p'>
          {address.details}
        </Typography>
      </div>
    </div>
    <ChevronRight className='size-6 flex-shrink-0' />
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
  </>
);
