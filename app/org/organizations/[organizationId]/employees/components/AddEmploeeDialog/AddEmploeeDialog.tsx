'use client';

import { XIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Typography
} from '@/components/ui';

import { AddEmployeeForm } from './components/AddEmployeeForm/AddEmployeeForm';
import { useAddEmployeeDialog } from './useAddEmployeeDialog/useAddEmployeeDialog';

interface AddEmploeeDialogProps {
  trigger: JSX.Element;
}

export const AddEmploeeDialog = ({ trigger }: AddEmploeeDialogProps) => {
  const { functions } = useAddEmployeeDialog();
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[713px] flex-col rounded-lg smx:max-h-[90%]'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle className='space-y-2'>
            <Typography variant='h4' tag='h4'>
              <I18nText path='dialog.addEmployee.title' />
            </Typography>
            <Typography variant='body1' tag='h4'>
              <I18nText path='dialog.addEmployee.description' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <AddEmployeeForm onAdded={functions.onAdded} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
