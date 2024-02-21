'use client';

import { XIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Typography
} from '@/components/ui';

import { AddActivityForm } from './components/AddActivityForm/AddActivityForm';
import { AddActivityImages } from './components/AddActivityImages/AddActivityImages';
import { useAddActivityDialog } from './hooks/useAddActivityDialog';

interface AddActivityDialogProps {
  trigger: JSX.Element;
}

export const AddActivityDialog = ({ trigger }: AddActivityDialogProps) => {
  const { functions } = useAddActivityDialog();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle>
            <Typography variant='h4' tag='h1'>
              <I18nText path='dialog.addActivity.title' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <div className='flex h-max gap-4 px-5 smx:px-0'>
          <AddActivityImages />
        </div>
        <div className='mx-5 flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5 px-5 smx:mx-0'>
          <AddActivityForm onAdded={functions.onAdded} />
        </div>
        <div className='flex w-full justify-center'>
          <Button className='h-8 w-28' size='sm' type='submit' variant='secondary'>
            <Typography variant='sub4'>
              <I18nText path='button.save' />
            </Typography>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
