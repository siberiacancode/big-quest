import { NotebookTextIcon, TrendingUpIcon, UsersRoundIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  Button,
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardHeader,
  InfoCardItem,
  InfoCardItemDescription,
  InfoCardItemTitle,
  InfoCardTitle
} from '@/components/ui';

export const Statistics = () => {
  return (
    <>
      <InfoCard>
        <InfoCardHeader className='p-5'>
          <InfoCardTitle className='text-lg	 font-bold	'>
            <I18nText path='organization.profile.tariff.title' /> Бесплатный
          </InfoCardTitle>
          <InfoCardAction className='bg-transparent text-xs text-muted-foreground'>
            <Button variant='ghost' className=' p-2'>
              <I18nText path='organization.profile.tariff.button' />
            </Button>
          </InfoCardAction>
        </InfoCardHeader>
        <InfoCardContent className='mt-3 flex w-full justify-center'>
          <InfoCardItem className='flex flex-col items-center border-none'>
            <InfoCardItemTitle className='text-2xl font-medium'>10</InfoCardItemTitle>
            <InfoCardItemDescription className='flex'>
              <I18nText path='organization.profile.tariff.activity' />
            </InfoCardItemDescription>
          </InfoCardItem>
          <InfoCardItem className='flex flex-col items-center border-none'>
            <InfoCardItemTitle className='text-2xl font-medium'>10</InfoCardItemTitle>
            <InfoCardItemDescription className='flex'>
              <I18nText path='organization.profile.tariff.paid' />
            </InfoCardItemDescription>
          </InfoCardItem>
          <InfoCardItem className='flex flex-col items-center border-none'>
            <InfoCardItemTitle className='text-2xl font-medium'>10</InfoCardItemTitle>
            <InfoCardItemDescription className='flex'>
              <I18nText path='organization.profile.tariff.valid' />
            </InfoCardItemDescription>
          </InfoCardItem>
        </InfoCardContent>
      </InfoCard>
      <div className='flex gap-4'>
        <InfoCard>
          <InfoCardHeader className='p-5'>
            <InfoCardTitle className='text-base	font-medium'>
              <I18nText path='organization.profile.members' />
            </InfoCardTitle>
            <InfoCardAction>
              <UsersRoundIcon size={20} strokeWidth={1.5} />
            </InfoCardAction>
          </InfoCardHeader>
          <InfoCardContent>
            <InfoCardItem>
              <InfoCardItemTitle>560</InfoCardItemTitle>
              <InfoCardItemDescription className='flex gap-1'>
                <TrendingUpIcon size={14} /> +24 <I18nText path='infoCard.description.perMonth' />
              </InfoCardItemDescription>
            </InfoCardItem>
          </InfoCardContent>
        </InfoCard>
        <InfoCard>
          <InfoCardHeader className='p-5'>
            <InfoCardTitle className='text-base	font-medium'>
              <I18nText path='organization.profile.entries' />
            </InfoCardTitle>
            <InfoCardAction>
              <NotebookTextIcon size={20} strokeWidth={1.5} />
            </InfoCardAction>
          </InfoCardHeader>
          <InfoCardContent>
            <InfoCardItem>
              <InfoCardItemTitle>560</InfoCardItemTitle>
            </InfoCardItem>
          </InfoCardContent>
        </InfoCard>
      </div>
    </>
  );
};
