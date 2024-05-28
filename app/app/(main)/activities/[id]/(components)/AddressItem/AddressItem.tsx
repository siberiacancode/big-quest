import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

import type { AddressProps } from '../../(constants)/types';

export interface AddressItemProps {
  address: AddressProps;
}

export const AddressItem = ({ address }: AddressItemProps) => {
  return (
    <Accordion type='single' collapsible className='rounded-lg border border-border px-3'>
      <AccordionItem value='item-1' className='border-none'>
        <AccordionTrigger>{address.value}</AccordionTrigger>
        <AccordionContent className='space-y-3'>
          {/* <div className='flex gap-2'>
            <Typography variant='sub3' tag='h3'>
              <I18nText path='field.details.label' />
            </Typography>
             <Typography variant='body5' tag='p'>
              {address.schedule?.details}
            </Typography> 
          </div> */}
          <div className='flex flex-col gap-3 md:flex-row'>
            <div className='w-1/3 min-w-60'>
              <Typography variant='sub3' tag='h3' className='flex-1'>
                <I18nText path='field.workTime.label' />
              </Typography>
              {address.schedule.some((schedule) => schedule.isRegularActivity) && (
                <Typography variant='body5' tag='p' className='flex-1'>
                  <I18nText path='field.workTime.preEntry.label' />
                </Typography>
              )}
              {!address.schedule.some((schedule) => schedule.isRegularActivity) && (
                <Typography variant='body5' tag='p' className='flex-1'>
                  <I18nText path='field.workTime.preEntry.label' />
                </Typography>
              )}
            </div>
            <div className='w-1/3 min-w-60'>
              <Typography variant='sub3' tag='h3' className='flex-1'>
                <I18nText path='field.employee.number.label' />
              </Typography>
              <div>{address.schedule[0].employeeNumber ?? '+791300000000'}</div>
            </div>
            {/* <div className='w-1/3 min-w-60'>
              <Typography variant='sub3' tag='h3' className='flex-1'>
                <I18nText path='field.nearestFreeTime.label' />
              </Typography>
            </div>
           
            {groupTimesByDate(address.schedule).map((schedule) => (
              <FreeTimeItem value={schedule} />
            ))} */}
          </div>
          {/* <div className='flex'>
          <Typography variant='sub3' tag='h3' className='flex-1'>
            <I18nText path='field.chooseAnotherTime.label' />
          </Typography>
          <ChevronRightIcon className='stroke-muted-foreground' />
        </div>
        <div className='flex'>
          <Typography variant='sub3' tag='h3' className='flex-1'>
            <I18nText path='field.goToSupportChat.label' />
          </Typography>
          <ChevronRightIcon className='stroke-muted-foreground' />
        </div> */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
