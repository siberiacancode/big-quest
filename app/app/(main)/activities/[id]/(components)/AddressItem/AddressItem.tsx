import { ChevronRightIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

import { FreeTimeItem } from '../FreeTimeItem/FreeTimeItem';

interface AddressItemProps {
  schedule: Schedule;
}

export const AddressItem = ({ schedule }: AddressItemProps) => (
  <Accordion type='single' collapsible className='rounded-lg border border-border px-3'>
    <AccordionItem value='item-1' className='border-none'>
      <AccordionTrigger>
        {schedule.address.street}, {schedule.address.house}
      </AccordionTrigger>
      <AccordionContent className='space-y-3'>
        <div className='flex gap-2'>
          <Typography variant='sub3' tag='h3'>
            <I18nText path='field.details.label' />
          </Typography>
          <Typography variant='body2' tag='p'>
            3 этаж, вход с ТЦ
          </Typography>
        </div>
        <div className='flex gap-3'>
          <div className='w-1/3 min-w-60'>
            <Typography variant='sub3' tag='h3' className='flex-1'>
              <I18nText path='field.nearestFreeTime.label' />
            </Typography>
          </div>
          <div className='flex flex-wrap gap-3'>
            {schedule.address.nearestFreeTime?.map((time) => <FreeTimeItem time={time} />)}
          </div>
        </div>
        <div className='flex'>
          <Typography variant='sub3' tag='h3' className='flex-1'>
            <I18nText path='field.chooseAnotherTime.label' />
          </Typography>
          <ChevronRightIcon />
        </div>
        <div className='flex'>
          <Typography variant='sub3' tag='h3' className='flex-1'>
            <I18nText path='field.goToSupportChat.label' />
          </Typography>
          <ChevronRightIcon />
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
