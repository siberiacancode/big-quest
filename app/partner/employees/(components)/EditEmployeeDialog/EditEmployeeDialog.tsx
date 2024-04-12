import React from 'react';
import { XIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Typography
} from '@/components/ui';

import type { EmployeeData } from '../../(constants)/types';
import { ActionEmployeeForm } from '../ActionEmployeeForm/ActionEmployeeForm';

interface EditEmployeeDialogProps extends React.ComponentProps<typeof Dialog> {
  onEdit: () => void;
  employee: EmployeeData;
}

export const EditEmployeeDialog = ({ onEdit, employee, ...props }: EditEmployeeDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='flex h-fit w-11/12 max-w-[500px] flex-col rounded-lg mdx:w-full'>
      <DialogClose>
        <XIcon className='h-6 w-6' />
      </DialogClose>
      <DialogHeader>
        <DialogTitle>
          <Typography variant='h4' tag='h4'>
            <I18nText path='dialog.addEmployee.title' />
          </Typography>
        </DialogTitle>
      </DialogHeader>

      <ActionEmployeeForm onAction={onEdit} actionType='edit' employee={employee} />
    </DialogContent>
  </Dialog>
);
