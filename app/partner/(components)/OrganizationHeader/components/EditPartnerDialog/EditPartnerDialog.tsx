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

import type { PartnerData } from '../../constants/types';
import { ActionPartnerForm } from '../ActionPartnerForm/ActionPartnerForm';

interface EditPartnerDialogProps extends React.ComponentProps<typeof Dialog> {
  onEdit: () => void;
  partner: PartnerData;
}

export const EditPartnerDialog = ({ onEdit, partner, ...props }: EditPartnerDialogProps) => (
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

      <ActionPartnerForm onAction={onEdit} partner={partner} />
    </DialogContent>
  </Dialog>
);
