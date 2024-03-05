import { Edit3Icon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Separator, Typography } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

import { ActionEmployeeDialog } from '../EmployeeDialog/ActionEmployeeDialog';

export interface EmployeeData {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: string;
  phone: string;
}

interface EmployeeCardProps {
  employee: EmployeeData;
}

export const EmployeeCard = ({ employee }: EmployeeCardProps) => (
  <Card className='relative min-w-[330px] flex-1'>
    <CardContent className='flex flex-row-reverse items-center justify-center p-8 pb-12 pr-5 pt-4'>
      <ActionEmployeeDialog
        trigger={
          <Edit3Icon className='right absolute right-4 top-4 cursor-pointer text-placeholder' />
        }
        actionType='edit'
        employee={employee}
      />

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
