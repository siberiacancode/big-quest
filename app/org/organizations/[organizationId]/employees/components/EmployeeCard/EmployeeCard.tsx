import { Edit3Icon, SendIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Badge,
  Button,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Typography
} from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

import type { EmployeeData } from '../../(constants)/types';
import { ActionEmployeeDialog } from '../EmployeeDialog/ActionEmployeeDialog';

interface EmployeeCardProps {
  loading?: boolean;
  employee: EmployeeData;
  onSendConfirmation?: () => void;
}

export const EmployeeCard = ({
  employee,
  loading = false,
  onSendConfirmation
}: EmployeeCardProps) => {
  const status = 'requested' as const;

  return (
    <Card className='relative min-w-[330px] flex-1'>
      <CardContent className='flex items-center justify-center p-8 pb-12 pr-5 pt-4'>
        <div>
          {status === 'requested' && (
            <div className='right absolute left-4 top-4'>
              <Badge>{status}</Badge>
            </div>
          )}

          <div className='right absolute right-2 top-2 flex gap-1'>
            {onSendConfirmation && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      disabled={loading}
                      onClick={onSendConfirmation}
                      variant='ghost'
                      size='icon'
                    >
                      <SendIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Отправить подтверждение повторно</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <ActionEmployeeDialog
              trigger={
                <Button disabled={loading} variant='ghost' size='icon'>
                  <Edit3Icon />
                </Button>
              }
              actionType='edit'
              employee={employee}
            />
          </div>
        </div>

        <div className='flex flex-1 flex-col items-center space-y-3 pt-4'>
          <div className='mb-2 flex flex-col items-center'>
            <div className='h-16 w-16 rounded-full bg-slate-700' />
            <div className='mt-2 flex flex-col items-center space-y-1'>
              <Typography variant='h7' tag='p' className='flex-1'>
                {employee.name} {employee.surname}
              </Typography>
              <Typography variant='body3' tag='p' className='flex-1'>
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
              <Typography variant='sub3' tag='p' className='flex-1 font-normal'>
                {employee.email}
              </Typography>
              <Typography variant='sub3' tag='p' className='flex-1 font-normal'>
                {employee.phone}
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
