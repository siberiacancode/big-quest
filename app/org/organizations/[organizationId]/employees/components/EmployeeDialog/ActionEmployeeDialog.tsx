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

import type { EmployeeData } from '../../(constants)/types';

import { ActionEmployeeForm } from './components/ActionEmployeeForm/ActionEmployeeForm';
import type { EmployeeActionType } from './constants/types';
import { useActionEmployeeDialog } from './hooks/useActionEmployeeDialog/useActionEmployeeDialog';

interface ActionEmployeeDialogProps extends React.ComponentProps<typeof Dialog> {
  trigger?: JSX.Element;
  actionType: EmployeeActionType;
  employee?: EmployeeData;
}

export const ActionEmployeeDialog = ({
  trigger,
  actionType,
  employee,
  ...props
}: ActionEmployeeDialogProps) => {
  const { functions } = useActionEmployeeDialog({ actionType });
  return (
    <Dialog {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
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
          <ActionEmployeeForm
            onAction={functions.onAction}
            actionType={actionType}
            employee={employee}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
