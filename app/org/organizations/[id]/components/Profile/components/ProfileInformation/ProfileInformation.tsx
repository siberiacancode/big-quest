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
import type { Organization } from '@/utils/api/types/types';

import { RowInfo } from './components/RowInfo/RowInfo';

interface ProfileInformationProps {
  organization: Organization;
}

export const ProfileInformation = ({ organization }: ProfileInformationProps) => (
  <InfoCard className='h-fit w-1/2 smx:w-full'>
    <InfoCardHeader className='pb-3'>
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
      <p className='text-xs font-medium text-muted-foreground'>{organization.description}</p>
      <Separator className='my-5' />
      <div className='flex flex-col gap-3'>
        <RowInfo title='organization.profile.information.name' value={organization.name} />
        <RowInfo
          title='organization.profile.information.contactName'
          value={organization.information?.contactName}
        />
        <RowInfo
          title='organization.profile.information.phone'
          value={organization.information?.phone}
        />
        <RowInfo
          title='organization.profile.information.email'
          value={organization.information?.email}
        />
        <RowInfo
          title='organization.profile.information.city'
          value={organization.information?.city}
        />
        <RowInfo
          title='organization.profile.information.social'
          value={organization.information?.social}
        />
      </div>
      <Separator className='mt-4' />
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border-none'>
          <AccordionTrigger className='text-md font-bold'>
            <I18nText path='organization.profile.legalInfo.title' />
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-3'>
            <RowInfo
              title='organization.profile.legalInfo.fullName'
              value={organization.information?.fullNameOfTheLegalEntity}
            />
            <RowInfo
              title='organization.profile.legalInfo.legalAddress'
              value={organization.information?.legalAddress}
            />
            <RowInfo
              title='organization.profile.legalInfo.postAddress'
              value={organization.information?.postAggress}
            />
            <RowInfo
              title='organization.profile.legalInfo.inn'
              value={organization.information?.inn}
            />
            <RowInfo
              title='organization.profile.legalInfo.kpp'
              value={organization.information?.kpp}
            />
            <RowInfo
              title='organization.profile.legalInfo.ogrn'
              value={organization.information?.ogrn}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />

      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border-none'>
          <AccordionTrigger className='text-md font-bold'>
            <I18nText path='organization.profile.requisites.title' />
          </AccordionTrigger>

          <AccordionContent className='flex flex-col gap-3'>
            <RowInfo
              title='organization.profile.requisites.bank'
              value={organization.requisites?.bank}
            />
            <RowInfo
              title='organization.profile.requisites.bik'
              value={organization.requisites?.bik}
            />
            <RowInfo
              title='organization.profile.requisites.checkingAccount'
              value={organization.requisites?.checkingAccount}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </InfoCardContent>
  </InfoCard>
);
