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

import { OrganizationProfileCardInfo } from './components/OrganizationProfileCardInfo/OrganizationProfileCardInfo';

interface OrganizationProfileCardProps {
  organization: OrganizationResponse;
}

export const OrganizationProfileCard = ({ organization }: OrganizationProfileCardProps) => (
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
        <OrganizationProfileCardInfo title='organization.profile.information.name'>
          {organization.name}
        </OrganizationProfileCardInfo>
        <OrganizationProfileCardInfo title='organization.profile.information.contactName'>
          {organization.information?.contactName}
        </OrganizationProfileCardInfo>
        <OrganizationProfileCardInfo title='organization.profile.information.phone'>
          {organization.information?.phone}
        </OrganizationProfileCardInfo>
        <OrganizationProfileCardInfo title='organization.profile.information.email'>
          {organization.information?.email}
        </OrganizationProfileCardInfo>
        <OrganizationProfileCardInfo title='organization.profile.information.city'>
          {organization.information?.city}
        </OrganizationProfileCardInfo>
        <OrganizationProfileCardInfo title='organization.profile.information.social'>
          {organization.information?.social}
        </OrganizationProfileCardInfo>
      </div>
      <Separator className='mt-4' />
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border-none'>
          <AccordionTrigger className='text-md font-bold'>
            <I18nText path='organization.profile.legalInfo.title' />
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-3'>
            <OrganizationProfileCardInfo title='organization.profile.legalInfo.fullName'>
              {organization.information?.fullNameOfTheLegalEntity}
            </OrganizationProfileCardInfo>
            <OrganizationProfileCardInfo title='organization.profile.legalInfo.legalAddress'>
              {organization.information?.legalAddress}
            </OrganizationProfileCardInfo>
            <OrganizationProfileCardInfo title='organization.profile.legalInfo.postAddress'>
              {organization.information?.postAggress}
            </OrganizationProfileCardInfo>
            <OrganizationProfileCardInfo title='organization.profile.legalInfo.inn'>
              {organization.information?.inn}
            </OrganizationProfileCardInfo>
            <OrganizationProfileCardInfo title='organization.profile.legalInfo.kpp'>
              {organization.information?.kpp}
            </OrganizationProfileCardInfo>
            <OrganizationProfileCardInfo title='organization.profile.legalInfo.ogrn'>
              {organization.information?.ogrn}
            </OrganizationProfileCardInfo>
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
            <OrganizationProfileCardInfo title='organization.profile.requisites.bank'>
              {organization.requisites?.bank}
            </OrganizationProfileCardInfo>
            <OrganizationProfileCardInfo title='organization.profile.requisites.bik'>
              {organization.requisites?.bik}
            </OrganizationProfileCardInfo>
            <OrganizationProfileCardInfo title='organization.profile.requisites.checkingAccount'>
              {organization.requisites?.checkingAccount}
            </OrganizationProfileCardInfo>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </InfoCardContent>
  </InfoCard>
);
