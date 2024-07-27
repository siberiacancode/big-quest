'use client';

import { Clock4Icon, Edit3Icon, UserRoundIcon } from 'lucide-react';

import type { ActivityListResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import {
  ActivityCard,
  ActivityCardBanner,
  ActivityCardCategory,
  ActivityCardContent,
  ActivityCardContentItem,
  ActivityCardDivider,
  ActivityCardHeader,
  ActivityCardHeaderTop,
  ActivityCardImage,
  ActivityCardName,
  ActivityCardStatus,
  Button,
  Typography
} from '@/components/ui';

import { EditActivityDialog } from '../EditActivityDialog/EditActivityDialog';
import { InfoAddressDialog } from '../InfoAddressDialog/InfoAddressDialog';

import { useOrganizationActivityCard } from './(hooks)/useOrganizationActivityCard';

interface ActivityCardProps {
  activity: ActivityListResponse;
}

export const OrganizationActivityCard = ({ activity }: ActivityCardProps) => {
  const { state, functions } = useOrganizationActivityCard();
  const activityCover = activity.media.find((item) => item.flag === 'AVATAR')!;

  return (
    <div className='h-fit w-full rounded-lg bg-background p-4'>
      <ActivityCard key={activity.id} className='max-w-none'>
        <div className='relative'>
          <div className='relative mdx:max-h-[256px]'>
            <ActivityCardImage
              src={activityCover.url}
              alt={activity.name}
              className='mdx:max-h-[256px] md:rounded-[16px]'
            />
          </div>
          <ActivityCardBanner>
            {activity.status && (
              <ActivityCardStatus>
                <Typography variant='sub4' tag='p'>
                  <I18nText
                    path={
                      `organization.activities.status.${activity.status.toLowerCase()}` as LocaleMessageId
                    }
                  />
                </Typography>
              </ActivityCardStatus>
            )}

            <Button
              onClick={functions.onEditClick}
              variant='secondary'
              size='sm'
              className='rounded-full px-[10px] py-2'
            >
              <Edit3Icon className='h-4 w-4' />
            </Button>

            <EditActivityDialog
              open={state.editDialogOpen}
              onOpenChange={functions.onEditCloseClick}
              onEdit={functions.onEdit}
              activity={activity}
            />
          </ActivityCardBanner>
        </div>
        <div
          className='flex cursor-pointer flex-col gap-2 md:gap-4'
          tabIndex={0}
          onClick={functions.onInfoClick}
          onKeyDown={(event) => {
            if (event.key === 'Enter') functions.onInfoClick();
          }}
          role='button'
        >
          <ActivityCardHeader>
            <ActivityCardHeaderTop>
              <ActivityCardCategory>{activity.category.RU}</ActivityCardCategory>
              {/* <div className='flex gap-2 lg:gap-4'>
                {activity.participants && (
                  <ActivityCardContentItem>
                    <UsersRoundIcon className='size-4 stroke-muted-foreground lg:size-6' />
                    <Typography tag='p' variant='body3' className='xsx:text-xs text-muted-foreground'>
                      {activity.participants}
                    </Typography>
                  </ActivityCardContentItem>
                )}
                {activity.likes && (
                  <ActivityCardContentItem>
                    <HeartIcon className='size-4 stroke-muted-foreground lg:size-6' />
                    <Typography tag='p' variant='body3' className='xsx:text-xs text-muted-foreground'>
                      {activity.likes}
                    </Typography>
                  </ActivityCardContentItem>
                )}
              </div> */}
            </ActivityCardHeaderTop>

            <ActivityCardName>{activity.name}</ActivityCardName>
          </ActivityCardHeader>
          <ActivityCardDivider />
          <ActivityCardContent>
            {activity.ageLimit[0] && (
              <ActivityCardContentItem>
                <UserRoundIcon className='size-4 stroke-muted-foreground lg:size-6' />
                <Typography tag='p' variant='body3' className='text-muted-foreground xsx:text-xs'>
                  <I18nText
                    path='landing.activities.card.minimumAge'
                    values={{ age: activity.ageLimit[0] }}
                  />
                </Typography>
              </ActivityCardContentItem>
            )}
            {activity.duration && (
              <ActivityCardContentItem>
                <Clock4Icon className='size-4 stroke-muted-foreground lg:size-6' />
                <Typography tag='p' variant='body3' className='text-muted-foreground xsx:text-xs'>
                  <I18nText
                    path='landing.activities.card.duration'
                    values={{ duration: activity.duration }}
                  />
                </Typography>
              </ActivityCardContentItem>
            )}
          </ActivityCardContent>
        </div>
        <InfoAddressDialog
          activity={activity}
          onEdit={functions.onEdit}
          open={state.infoDialogOpen}
          onOpenChange={functions.onInfoCloseClick}
        />
      </ActivityCard>
    </div>
  );
};
