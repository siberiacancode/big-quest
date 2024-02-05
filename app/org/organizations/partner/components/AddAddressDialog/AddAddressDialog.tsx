'use client';

import { PlusCircledIcon } from '@radix-ui/react-icons';

import { I18nText } from '@/components/common';
import { Button } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { AddAddressForm } from '../AddAddressForm/AddAddressForm';

// import { WorkingTimeBlock } from '../WorkingTimeBlock/WorkingTimeBlock';
import { useAddAddressDialog } from './hooks/useAddAddressDialog';

export const AddAddressDialog = () => {
  const { functions } = useAddAddressDialog();
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant='secondary'
          className='mx-2 bg-background p-5 font-medium hover:bg-background '
          size='sm'
        >
          <PlusCircledIcon className='mr-2 h-4 w-4' />
          <I18nText path='button.addAddress' />
        </Button>
      </DialogTrigger>
      <DialogContent className='flex h-[550px] w-11/12 max-w-[713px] flex-col rounded-lg smx:h-fit'>
        <DialogHeader>
          <DialogTitle className='text-xl font-bold'>
            <I18nText path='addressModal.title.addAddress' />
          </DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between rounded-lg border p-5'>
          <AddAddressForm onAdded={functions.onAdded} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
