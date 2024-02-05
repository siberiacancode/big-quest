import { Edit3Icon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardHeader,
  InfoCardTitle,
  Separator
} from '@/components/ui';

import { RowInfo } from './components/RowInfo/RowInfo';

export const ProfileInformation = ({ organization }) => {
  const { information, requisites } = organization;
  return (
    <InfoCard className='h-fit w-1/2 smx:w-full'>
      <InfoCardHeader className=' pb-3 '>
        <InfoCardTitle className='text-lg font-bold'>
          <I18nText path='organization.profile.information.name' />
        </InfoCardTitle>
        <InfoCardAction className='rounded-none bg-transparent'>
          <Button variant='ghost' className='ml-3 mr-1 h-8 w-8 p-2'>
            <Edit3Icon size={20} strokeWidth={1.5} />
          </Button>
        </InfoCardAction>
      </InfoCardHeader>
      <InfoCardContent className='flex w-full flex-col px-7'>
        <p className='text-xs font-medium text-slate-500	'>{organization.description}</p>
        <Separator className='my-5' />
        <div className='flex flex-col gap-3'>
          <RowInfo title='organization.profile.information.name' value={organization.name} />
          <RowInfo
            title='organization.profile.information.contactName'
            value={information.contactName}
          />
          <RowInfo title='organization.profile.information.phone' value={information.phone} />
          <RowInfo title='organization.profile.information.email' value={information.email} />
          <RowInfo title='organization.profile.information.city' value={information.city} />
          <RowInfo title='organization.profile.information.social' value={information.social} />
        </div>
        <Separator className='mt-4' />
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1' className=' border-none'>
            <AccordionTrigger className='text-md font-bold'>
              <I18nText path='organization.profile.legalInfo.title' />
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-3'>
              <RowInfo
                title='organization.profile.legalInfo.fullName'
                value={information.fullNameOfTheLegalEntity}
              />
              <RowInfo
                title='organization.profile.legalInfo.legalAddress'
                value={information.legalAddress}
              />
              <RowInfo
                title='organization.profile.legalInfo.postAddress'
                value={information.postAggress}
              />
              <RowInfo title='organization.profile.legalInfo.inn' value={information.inn} />
              <RowInfo title='organization.profile.legalInfo.kpp' value={information.kpp} />
              <RowInfo title='organization.profile.legalInfo.ogrn' value={information.ogrn} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator />

        <Accordion type='single' collapsible>
          <AccordionItem value='item-1' className=' border-none'>
            <AccordionTrigger className='text-md font-bold'>
              <I18nText path='organization.profile.requisites.title' />
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-3'>
              <RowInfo title='organization.profile.requisites.bank' value={requisites.bank} />
              <RowInfo title='organization.profile.requisites.bik' value={requisites.bik} />
              <RowInfo
                title='organization.profile.requisites.checkingAccount'
                value={requisites.checkingAccount}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </InfoCardContent>
    </InfoCard>
  );
};
