'use client';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

import type { AddressData } from '../../(constants)/types';
import { ActionAddressDialog } from '../ActionAddressDialog/ActionAddressDialog';

import { WorkingHoursList } from './components/WorkingHoursList/WorkingHoursList';
import { useAddressCard } from './hooks/useAddressCard';

interface AddressCardProps {
  address: AddressData;
}

export const AddressCard = ({ address }: AddressCardProps) => {
  const { state, functions } = useAddressCard(address);

  return (
    <Card className='min-w-[340px] flex-1'>
      <CardContent className='flex flex-row-reverse justify-between p-8 pb-12 pr-5 pt-4'>
        <div className='right absolute right-2 top-2 z-10 flex gap-1'>
          <ActionAddressDialog
            open={state.editDialogOpen}
            onOpenChange={functions.onEditCloseClick}
            actionType='edit'
            address={address}
          />
        </div>
        <div className='mt-6 flex flex-1 flex-col space-y-3'>
          <div className='flex justify-between'>
            <Typography variant='sub2' tag='h3' className='flex-1'>
              <I18nText path='table.column.location' />
            </Typography>
            <Typography variant='body2' tag='p' className='flex-1'>
              {address.locality}
            </Typography>
          </div>

          <div className='flex justify-between'>
            <Typography variant='sub2' tag='h3' className='flex-1'>
              <I18nText path='field.street.label' />
            </Typography>
            <Typography variant='body2' tag='p' className='flex-1'>
              {address.street}
            </Typography>
          </div>

          <div className='flex justify-between'>
            <Typography variant='sub2' tag='h3' className='flex-1'>
              <I18nText path='field.house.label' />
            </Typography>
            <Typography variant='body2' tag='p' className='flex-1'>
              {address.house}
            </Typography>
          </div>

          <div className='flex justify-between'>
            <Typography variant='sub2' tag='h3' className='flex-1'>
              <I18nText path='field.details.label' />
            </Typography>
            <Typography variant='body2' tag='p' className='flex-1'>
              {address.details}
            </Typography>
          </div>

          <div className='flex justify-between'>
            <Typography variant='sub2' tag='h3' className='flex-1'>
              <I18nText path='addressCard.description.workingTime' />
            </Typography>
            <Typography variant='body2' className='flex-1'>
              <WorkingHoursList workingHours={address.workingHours} />
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
