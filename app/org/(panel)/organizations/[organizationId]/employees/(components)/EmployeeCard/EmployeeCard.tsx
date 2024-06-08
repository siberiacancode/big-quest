'use client';

import React from 'react';
import { Edit3Icon, MailIcon, MoreHorizontalIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';

import { BoldText, I18nText } from '@/components/common';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Badge,
  Button,
  Card,
  CardContent,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
  Typography
} from '@/components/ui';
import { cn } from '@/lib/utils';

import type { EmployeeData } from '../../(constants)/types';
import { EditEmployeeDialog } from '../EditEmployeeDialog/EditEmployeeDialog';

import { useEmployeeCard } from './hooks/useEmployeeCard';

interface EmployeeCardProps {
  loading?: boolean;
  employee: EmployeeData;
}

export const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const { state, functions } = useEmployeeCard(employee);

  return (
    <Card className='relative min-w-[330px] flex-1'>
      <CardContent className='flex items-center justify-center p-8 pb-12 pr-5 pt-4'>
        <div>
          {employee.status === 'inactive' && (
            <div className='right absolute left-4 top-4'>
              <Badge>
                <I18nText path='employeeCard.status.inactive' />
              </Badge>
            </div>
          )}

          <div className='right absolute right-2 top-2 z-10 flex gap-1'>
            <EditEmployeeDialog
              open={state.editDialogOpen}
              onOpenChange={functions.onEditCloseClick}
              employee={employee}
              onEdit={functions.onEdit}
            />

            <AlertDialog open={state.deleteAlertOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    <I18nText path='employeeCard.deleteAlert.title' />
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <I18nText
                      path='employeeCard.deleteAlert.description'
                      values={{ bold: BoldText, name: employee.name }}
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' loading={state.isLoading}>
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {employee.status === 'inactive' && (
                  <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={functions.onSendConfirmationClick}
                  >
                    <MailIcon className='mr-2 h-4 w-4' />
                    <Typography tag='p' variant='body2'>
                      <I18nText path='button.sendConfirmation' />
                    </Typography>
                  </DropdownMenuItem>
                )}
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
        </div>

        <div
          className={cn('flex flex-1 flex-col items-center space-y-3 pt-4', {
            'opacity-70': employee.status === 'inactive'
          })}
        >
          <div className='mb-2 flex flex-col items-center'>
            <div className='relative h-16 w-16'>
              <Image src={employee.image} fill alt='user' className='rounded-full' />
            </div>
            <div className='mt-2 flex flex-col items-center space-y-1'>
              <Typography variant='h6' tag='p' className='flex-1'>
                {employee.name} {employee.surname}
              </Typography>
              <Typography variant='body3' tag='p' className='flex-1 text-muted-foreground'>
                {employee.role}
              </Typography>
            </div>
          </div>
          <Separator />
          <div className='flex space-x-6'>
            <div className='flex-1 space-y-2'>
              <Typography variant='sub2' tag='p' className='flex-1'>
                <I18nText path='organization.employee.email' />
              </Typography>
              <Typography variant='sub2' tag='p' className='flex-1'>
                <I18nText path='organization.employee.phoneNumber' />
              </Typography>
            </div>
            <div className='flex-1 space-y-2'>
              <Typography variant='body2' tag='p' className='flex-1'>
                {employee.email}
              </Typography>
              <Typography variant='body2' tag='p' className='flex-1'>
                {employee.phone}
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
