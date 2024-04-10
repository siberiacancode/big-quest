'use client';

import { Edit3Icon, MoreHorizontalIcon, Trash2Icon } from 'lucide-react';

import { BoldText, I18nText } from '@/components/common';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Card,
  CardContent,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Typography
} from '@/components/ui';

import type { AddressData } from '../../(constants)/types';
import { EditAddressDialog } from '../EditAddressDialog/EditAddressDialog';

import { WorkingHoursList } from './components/WorkingHoursList/WorkingHoursList';
import { useAddressCard } from './hooks/useAddressCard';

interface AddressCardProps {
  address: AddressData;
}

export const AddressCard = ({ address }: AddressCardProps) => {
  const { state, functions } = useAddressCard({ address });

  return (
    <Card className='relative min-w-[340px] flex-1'>
      <AlertDialog open={state.deleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <I18nText path='addressCard.deleteAlert.title' />
            </AlertDialogTitle>
            <AlertDialogDescription>
              <I18nText
                path='addressCard.deleteAlert.description'
                values={{
                  bold: BoldText,
                  name: `${address.locality} ${address.street}, ${address.house}`
                }}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              variant='outline'
              disabled={state.isLoading}
              onClick={functions.onDeleteCloseClick}
            >
              <I18nText path='button.cancel' />
            </Button>

            <Button loading={state.isLoading} onClick={functions.onAlertDeleteClick}>
              <I18nText path='button.delete' />
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <CardContent className='flex flex-row-reverse justify-between p-8 pb-12 pr-5 pt-4'>
        <div className='right absolute right-2 top-2 z-10 flex gap-1'>
          <EditAddressDialog
            open={state.editDialogOpen}
            onOpenChange={functions.onEditCloseClick}
            address={address}
            onEdit={functions.onEdit}
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' loading={state.isLoading}>
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className='cursor-pointer' onClick={functions.onEditClick}>
                <Edit3Icon className='mr-2 h-4 w-4' />
                <Typography tag='p' variant='body2'>
                  <I18nText path='button.edit' />
                </Typography>
              </DropdownMenuItem>
              <DropdownMenuItem
                className='cursor-pointer text-red-600 focus:text-red-600'
                onClick={functions.onDeleteClick}
              >
                <Trash2Icon className='mr-2 h-4 w-4' />
                <Typography tag='p' variant='body2'>
                  <I18nText path='button.delete' />
                </Typography>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
