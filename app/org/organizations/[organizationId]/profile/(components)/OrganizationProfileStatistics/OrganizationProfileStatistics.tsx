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
  InfoCardTitle,
  Typography
} from '@/components/ui';

export const OrganizationProfileStatistics = () => (
  <>
    <InfoCard>
      <InfoCardHeader className='p-5'>
        <InfoCardTitle>
          <Typography variant='h5' tag='p'>
            <I18nText path='organization.profile.tariff.title' /> Бесплатный
          </Typography>
        </InfoCardTitle>
        <InfoCardAction className='bg-transparent '>
          <Button variant='ghost' className='p-2'>
            <I18nText path='organization.profile.tariff.button' />
          </Button>
        </InfoCardAction>
      </InfoCardHeader>
      <InfoCardContent className='mt-3 flex w-full justify-center'>
        <InfoCardItem className='flex flex-col items-center border-none'>
          <InfoCardItemTitle>
            <Typography variant='h3' tag='h3'>
              10
            </Typography>
          </InfoCardItemTitle>
          <InfoCardItemDescription className='flex'>
            <Typography variant='body2' tag='p' className='text-muted-foreground'>
              <I18nText path='organization.profile.tariff.activity' />
            </Typography>
          </InfoCardItemDescription>
        </InfoCardItem>
        <InfoCardItem className='flex flex-col items-center border-none'>
          <InfoCardItemTitle>
            <Typography variant='h3' tag='h3'>
              10
            </Typography>
          </InfoCardItemTitle>
          <InfoCardItemDescription className='flex'>
            <Typography variant='body2' tag='p' className='text-muted-foreground'>
              <I18nText path='organization.profile.tariff.paid' />
            </Typography>
          </InfoCardItemDescription>
        </InfoCardItem>
        <InfoCardItem className='flex flex-col items-center border-none'>
          <InfoCardItemTitle>
            <Typography variant='h3' tag='h3'>
              10
            </Typography>
          </InfoCardItemTitle>
          <InfoCardItemDescription className='flex'>
            <Typography variant='body2' tag='p' className='text-muted-foreground'>
              <I18nText path='organization.profile.tariff.valid' />
            </Typography>
          </InfoCardItemDescription>
        </InfoCardItem>
      </InfoCardContent>
    </InfoCard>
    <div className='flex gap-4'>
      <InfoCard>
        <InfoCardHeader className='p-5'>
          <InfoCardTitle>
            <Typography variant='sub1' tag='p'>
              <I18nText path='organization.profile.members' />
            </Typography>
          </InfoCardTitle>
          <InfoCardAction>
            <UsersRoundIcon size={20} strokeWidth={1.5} />
          </InfoCardAction>
        </InfoCardHeader>
        <InfoCardContent>
          <InfoCardItem>
            <InfoCardItemTitle>560</InfoCardItemTitle>
            <InfoCardItemDescription className='flex gap-1'>
              <TrendingUpIcon size={14} />
              <Typography variant='body4' tag='p'>
                +24 <I18nText path='infoCard.description.perMonth' />
              </Typography>
            </InfoCardItemDescription>
          </InfoCardItem>
        </InfoCardContent>
      </InfoCard>
      <InfoCard>
        <InfoCardHeader className='p-5'>
          <InfoCardTitle>
            <Typography variant='sub1' tag='p'>
              <I18nText path='organization.profile.entries' />
            </Typography>
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
