'use client';

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
  OrganizationProfileCardInfo,
  OrganizationProfileCardInfoContent,
  OrganizationProfileCardInfoIcon,
  OrganizationProfileCardInfoTitle,
  Separator,
  Typography
} from '@/components/ui';

import { EditOrganizationProfileDialog } from '../EditOrganizationProfileDialog/EditOrganizationProfileDialog';

interface OrganizationProfileCardProps {
  organization: OrganizationResponse;
}

export const OrganizationProfileCard = ({ organization }: OrganizationProfileCardProps) => (
  <InfoCard className='h-fit w-1/2 smx:w-full'>
    <InfoCardHeader className='pb-0'>
      <InfoCardTitle>
        <Typography variant='h5' tag='h5'>
          <I18nText path='organization.profile.information.title' />
        </Typography>
      </InfoCardTitle>
      <InfoCardAction className='rounded-none bg-transparent'>
        <EditOrganizationProfileDialog
          organization={organization}
          trigger={
            <Button variant='ghost' className='ml-3 mr-1 h-8 w-8 p-2'>
              <Edit3Icon size={20} strokeWidth={1.5} />
            </Button>
          }
        />
      </InfoCardAction>
    </InfoCardHeader>
    <InfoCardContent className='flex w-full flex-col px-7'>
      <Typography variant='body2' tag='p' className='text-muted-foreground'>
        {organization.description}
      </Typography>
      <Separator className='my-5' />
      <div className='flex flex-col gap-3 text-sm'>
        {organization.name && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.name' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.name}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.contactName && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.contactName' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.contactName}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.phone && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.phone' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.phone}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.email && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.email' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.email}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.locality && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.locality' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.locality}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.social && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.social' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              <span className='flex gap-2'>
                {organization.social.map((link, index) => (
                  <OrganizationProfileCardInfoIcon key={index} link={link} />
                ))}
              </span>
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
      </div>
      <Separator className='mt-4' />
      <Accordion type='single' collapsible>
        <AccordionItem value='organization.legalInfo' className='border-none'>
          <AccordionTrigger>
            <Typography variant='h7' tag='h6'>
              <I18nText path='organization.profile.legalInfo.title' />
            </Typography>
          </AccordionTrigger>
          {organization.legalInfo && (
            <AccordionContent className='flex flex-col gap-3'>
              {organization.legalInfo.fullNameOfTheLegalEntity && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.legalInfo.fullName' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.legalInfo.fullNameOfTheLegalEntity}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.legalInfo.legalAddress && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.legalInfo.legalAddress' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.legalInfo.legalAddress}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.legalInfo.postAggress && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.legalInfo.postAddress' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.legalInfo.postAggress}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.legalInfo.inn && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.legalInfo.inn' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.legalInfo.inn}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.legalInfo.kpp && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.legalInfo.kpp' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.legalInfo.kpp}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.legalInfo.ogrn && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.legalInfo.ogrn' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.legalInfo.ogrn}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
      <Separator />
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border-none'>
          <AccordionTrigger>
            <Typography variant='h7' tag='h6'>
              <I18nText path='organization.profile.requisites.title' />
            </Typography>
          </AccordionTrigger>
          {organization.requisites && (
            <AccordionContent className='flex flex-col gap-3'>
              {organization.requisites.bank && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.requisites.bank' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.requisites.bank}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.requisites.bik && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.requisites.bik' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.requisites.bik}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.requisites.checkingAccount && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.requisites.checkingAccount' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.requisites.checkingAccount}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    </InfoCardContent>
  </InfoCard>
);
