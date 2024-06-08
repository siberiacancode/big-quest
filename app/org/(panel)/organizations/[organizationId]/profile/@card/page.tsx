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
import { getOrganizationById } from '@/utils/api/requests';

import { EditOrganizationProfileDialog } from './components/EditOrganizationProfileDialog/EditOrganizationProfileDialog';

interface OrganizationProfileCardSlotProps {
  params: { organizationId: string };
}

const OrganizationProfileCardPage = async ({ params }: OrganizationProfileCardSlotProps) => {
  const getOrganizationByIdResponse = await getOrganizationById({
    params: { id: params.organizationId },
    config: { cache: 'no-cache' }
  });

  return (
    <InfoCard className='h-fit w-1/2 smx:w-full'>
      <InfoCardHeader className='pb-0'>
        <InfoCardTitle>
          <Typography variant='h5' tag='h5'>
            <I18nText path='organization.profile.title' />
          </Typography>
        </InfoCardTitle>
        <InfoCardAction className='rounded-none bg-transparent'>
          <EditOrganizationProfileDialog
            organization={getOrganizationByIdResponse}
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
          {getOrganizationByIdResponse.description}
        </Typography>
        <Separator className='my-5' />
        <div className='flex flex-col gap-3 text-sm'>
          {getOrganizationByIdResponse.name && (
            <OrganizationProfileCardInfo>
              <OrganizationProfileCardInfoTitle>
                <I18nText path='organization.profile.name' />
              </OrganizationProfileCardInfoTitle>
              <OrganizationProfileCardInfoContent>
                {getOrganizationByIdResponse.name}
              </OrganizationProfileCardInfoContent>
            </OrganizationProfileCardInfo>
          )}
          {getOrganizationByIdResponse.contactName && (
            <OrganizationProfileCardInfo>
              <OrganizationProfileCardInfoTitle>
                <I18nText path='organization.profile.contactName' />
              </OrganizationProfileCardInfoTitle>
              <OrganizationProfileCardInfoContent>
                {getOrganizationByIdResponse.contactName}
              </OrganizationProfileCardInfoContent>
            </OrganizationProfileCardInfo>
          )}
          {getOrganizationByIdResponse.phone && (
            <OrganizationProfileCardInfo>
              <OrganizationProfileCardInfoTitle>
                <I18nText path='organization.profile.phone' />
              </OrganizationProfileCardInfoTitle>
              <OrganizationProfileCardInfoContent>
                {getOrganizationByIdResponse.phone}
              </OrganizationProfileCardInfoContent>
            </OrganizationProfileCardInfo>
          )}
          {getOrganizationByIdResponse.email && (
            <OrganizationProfileCardInfo>
              <OrganizationProfileCardInfoTitle>
                <I18nText path='organization.profile.email' />
              </OrganizationProfileCardInfoTitle>
              <OrganizationProfileCardInfoContent>
                {getOrganizationByIdResponse.email}
              </OrganizationProfileCardInfoContent>
            </OrganizationProfileCardInfo>
          )}
          {getOrganizationByIdResponse.locality && (
            <OrganizationProfileCardInfo>
              <OrganizationProfileCardInfoTitle>
                <I18nText path='organization.profile.locality' />
              </OrganizationProfileCardInfoTitle>
              <OrganizationProfileCardInfoContent>
                {getOrganizationByIdResponse.locality}
              </OrganizationProfileCardInfoContent>
            </OrganizationProfileCardInfo>
          )}
          {getOrganizationByIdResponse.social && (
            <OrganizationProfileCardInfo>
              <OrganizationProfileCardInfoTitle>
                <I18nText path='organization.profile.social' />
              </OrganizationProfileCardInfoTitle>
              <OrganizationProfileCardInfoContent>
                <span className='flex gap-2'>
                  {getOrganizationByIdResponse.social.map((link, index) => (
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
              <Typography variant='h6' tag='h6'>
                <I18nText path='organization.profile.information.title' />
              </Typography>
            </AccordionTrigger>
            {getOrganizationByIdResponse.information &&
              !!Object.keys(getOrganizationByIdResponse.information).length && (
                <AccordionContent className='flex flex-col gap-3'>
                  {getOrganizationByIdResponse.information.fullNameOfTheLegalEntity && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.information.fullName' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.information.fullNameOfTheLegalEntity}
                      </OrganizationProfileCardInfoContent>
                    </OrganizationProfileCardInfo>
                  )}
                  {getOrganizationByIdResponse.information.legalAddress && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.information.legalAddress' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.information.legalAddress}
                      </OrganizationProfileCardInfoContent>
                    </OrganizationProfileCardInfo>
                  )}
                  {getOrganizationByIdResponse.information.postAddress && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.information.postAddress' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.information.postAddress}
                      </OrganizationProfileCardInfoContent>
                    </OrganizationProfileCardInfo>
                  )}
                  {getOrganizationByIdResponse.information.inn && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.information.inn' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.information.inn}
                      </OrganizationProfileCardInfoContent>
                    </OrganizationProfileCardInfo>
                  )}
                  {getOrganizationByIdResponse.information.kpp && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.information.kpp' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.information.kpp}
                      </OrganizationProfileCardInfoContent>
                    </OrganizationProfileCardInfo>
                  )}
                  {getOrganizationByIdResponse.information.ogrn && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.information.ogrn' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.information.ogrn}
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
              <Typography variant='h6' tag='h6'>
                <I18nText path='organization.profile.requisites.title' />
              </Typography>
            </AccordionTrigger>
            {getOrganizationByIdResponse.requisites &&
              !!Object.keys(getOrganizationByIdResponse.requisites).length && (
                <AccordionContent className='flex flex-col gap-3'>
                  {getOrganizationByIdResponse.requisites.bank && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.requisites.bank' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.requisites.bank}
                      </OrganizationProfileCardInfoContent>
                    </OrganizationProfileCardInfo>
                  )}
                  {getOrganizationByIdResponse.requisites.bik && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.requisites.bik' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.requisites.bik}
                      </OrganizationProfileCardInfoContent>
                    </OrganizationProfileCardInfo>
                  )}
                  {getOrganizationByIdResponse.requisites.checkingAccount && (
                    <OrganizationProfileCardInfo>
                      <OrganizationProfileCardInfoTitle>
                        <I18nText path='organization.profile.requisites.checkingAccount' />
                      </OrganizationProfileCardInfoTitle>
                      <OrganizationProfileCardInfoContent>
                        {getOrganizationByIdResponse.requisites.checkingAccount}
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
};
export default OrganizationProfileCardPage;
