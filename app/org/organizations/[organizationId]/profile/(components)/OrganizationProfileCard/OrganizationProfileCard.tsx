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
          <I18nText path='organization.profile.title' />
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
              <I18nText path='organization.profile.name' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.name}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.contactName && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.contactName' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.contactName}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.phone && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.phone' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.phone}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.email && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.email' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.email}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.locality && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.locality' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.locality}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.social && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.social' />
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
        <AccordionItem value='organization.information' className='border-none'>
          <AccordionTrigger>
            <Typography variant='h7' tag='h6'>
              <I18nText path='organization.profile.information.title' />
            </Typography>
          </AccordionTrigger>
          {organization.information && !!Object.keys(organization.information).length && (
            <AccordionContent className='flex flex-col gap-3'>
              {organization.information.fullNameOfTheLegalEntity && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.information.fullName' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.information.fullNameOfTheLegalEntity}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.information.legalAddress && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.information.legalAddress' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.information.legalAddress}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.information.postAddress && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.information.postAddress' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.information.postAddress}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.information.inn && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.information.inn' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.information.inn}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.information.kpp && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.information.kpp' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.information.kpp}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
              {organization.information.ogrn && (
                <OrganizationProfileCardInfo>
                  <OrganizationProfileCardInfoTitle>
                    <I18nText path='organization.profile.information.ogrn' />
                  </OrganizationProfileCardInfoTitle>
                  <OrganizationProfileCardInfoContent>
                    {organization.information.ogrn}
                  </OrganizationProfileCardInfoContent>
                </OrganizationProfileCardInfo>
              )}
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
      <Separator />
      <Accordion type='single' collapsible>
        <AccordionItem value='organization.requisites' className='border-none'>
          <AccordionTrigger>
            <Typography variant='h7' tag='h6'>
              <I18nText path='organization.profile.requisites.title' />
            </Typography>
          </AccordionTrigger>
          {organization.requisites && !!Object.keys(organization.requisites).length && (
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
