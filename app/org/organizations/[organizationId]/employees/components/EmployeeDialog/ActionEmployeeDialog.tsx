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

import type { EmployeeData } from '../EmployeeCard/EmployeeCard';

import { EmployeeForm } from './components/EmployeeForm/EmployeeForm';
import { useActionEmployeeDialog } from './useActionEmployeeDialog/useActionEmployeeDialog';

interface ActionEmployeeDialogProps {
  trigger: JSX.Element;
  actionType: 'add' | 'edit';
  employee?: EmployeeData;
}

export const ActionEmployeeDialog = ({
  trigger,
  actionType,
  employee
}: ActionEmployeeDialogProps) => {
  const { functions } = useActionEmployeeDialog({ actionType });
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className='flex h-fit w-11/12 max-w-[500px] flex-col rounded-lg mdx:w-full'>
        <DialogClose>
          <XIcon className='h-6 w-6' />
        </DialogClose>
        <DialogHeader>
          <DialogTitle className='space-y-2'>
            <Typography variant='h4' tag='h4'>
              <I18nText path={`dialog.${actionType}Employee.title`} />
            </Typography>
            <Typography variant='body1' tag='h4'>
              <I18nText path='dialog.addEmployee.description' />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <div className='flex h-full flex-col items-end justify-between overflow-y-auto rounded-lg border p-5'>
          <EmployeeForm onAction={functions.onAction} actionType={actionType} employee={employee} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
