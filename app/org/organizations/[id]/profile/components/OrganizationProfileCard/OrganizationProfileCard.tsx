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
  Separator
} from '@/components/ui';

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
        {organization.information.contactName && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.contactName' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.information.contactName}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.information.phone && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.phone' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.information.phone}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.information.email && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.email' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.information.email}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.information.city && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.city' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              {organization.information.city}
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
        {organization.information.social && (
          <OrganizationProfileCardInfo>
            <OrganizationProfileCardInfoTitle>
              <I18nText path='organization.profile.information.social' />
            </OrganizationProfileCardInfoTitle>
            <OrganizationProfileCardInfoContent>
              <span className='flex gap-2'>
                {organization.information.social.map((link: string, index: number) => (
                  <OrganizationProfileCardInfoIcon key={index} link={link} />
                ))}
              </span>
            </OrganizationProfileCardInfoContent>
          </OrganizationProfileCardInfo>
        )}
      </div>
      <Separator className='mt-4' />
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border-none'>
          <AccordionTrigger className='text-md font-bold'>
            <I18nText path='organization.profile.legalInfo.title' />
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-3'>
            {organization.information.fullNameOfTheLegalEntity && (
              <OrganizationProfileCardInfo>
                <OrganizationProfileCardInfoTitle>
                  <I18nText path='organization.profile.legalInfo.fullName' />
                </OrganizationProfileCardInfoTitle>
                <OrganizationProfileCardInfoContent>
                  {organization.information.fullNameOfTheLegalEntity}
                </OrganizationProfileCardInfoContent>
              </OrganizationProfileCardInfo>
            )}
            {organization.information.legalAddress && (
              <OrganizationProfileCardInfo>
                <OrganizationProfileCardInfoTitle>
                  <I18nText path='organization.profile.legalInfo.legalAddress' />
                </OrganizationProfileCardInfoTitle>
                <OrganizationProfileCardInfoContent>
                  {organization.information.legalAddress}
                </OrganizationProfileCardInfoContent>
              </OrganizationProfileCardInfo>
            )}
            {organization.information.postAggress && (
              <OrganizationProfileCardInfo>
                <OrganizationProfileCardInfoTitle>
                  <I18nText path='organization.profile.legalInfo.postAddress' />
                </OrganizationProfileCardInfoTitle>
                <OrganizationProfileCardInfoContent>
                  {organization.information.postAggress}
                </OrganizationProfileCardInfoContent>
              </OrganizationProfileCardInfo>
            )}
            {organization.information.inn && (
              <OrganizationProfileCardInfo>
                <OrganizationProfileCardInfoTitle>
                  <I18nText path='organization.profile.legalInfo.inn' />
                </OrganizationProfileCardInfoTitle>
                <OrganizationProfileCardInfoContent>
                  {organization.information.inn}
                </OrganizationProfileCardInfoContent>
              </OrganizationProfileCardInfo>
            )}
            {organization.information.kpp && (
              <OrganizationProfileCardInfo>
                <OrganizationProfileCardInfoTitle>
                  <I18nText path='organization.profile.legalInfo.kpp' />
                </OrganizationProfileCardInfoTitle>
                <OrganizationProfileCardInfoContent>
                  {organization.information.kpp}
                </OrganizationProfileCardInfoContent>
              </OrganizationProfileCardInfo>
            )}
            {organization.information.ogrn && (
              <OrganizationProfileCardInfo>
                <OrganizationProfileCardInfoTitle>
                  <I18nText path='organization.profile.legalInfo.ogrn' />
                </OrganizationProfileCardInfoTitle>
                <OrganizationProfileCardInfoContent>
                  {organization.information.ogrn}
                </OrganizationProfileCardInfoContent>
              </OrganizationProfileCardInfo>
            )}
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
        </AccordionItem>
      </Accordion>
    </InfoCardContent>
  </InfoCard>
);
