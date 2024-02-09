'use client';

import { PlusCircledIcon } from '@radix-ui/react-icons';
import { XIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui';

import { AddAddressForm } from '../AddAddressForm/AddAddressForm';

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
      <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle className='text-xl font-bold'>
            <I18nText path='addressModal.title.addAddress' />
          </DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <AddAddressForm onAdded={functions.onAdded} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
