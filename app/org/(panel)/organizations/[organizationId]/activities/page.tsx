'use client';

import React from 'react';
import { Clock4Icon, Edit3Icon, HeartIcon, UserRoundIcon, UsersRoundIcon } from 'lucide-react';

import { I18nText } from '@/components/common';
import {
  ActivityCard,
  ActivityCardCategory,
  ActivityCardContent,
  ActivityCardContentItem,
  ActivityCardDivider,
  ActivityCardHeader,
  ActivityCardHeaderTop,
  ActivityCardImage,
  ActivityCardName,
  Button,
  Typography
} from '@/components/ui';

import { AddActivityDialog } from './(components)/AddActivityDialog/AddAddressDialog';
import { EditActivityDialog } from './(components)/EditActivityDialog/EditActivityDialog';
import { InfoAddressDialog } from './(components)/InfoAddressDialog/InfoAddressDialog';
import { useActivityCard } from './(hooks)/useActivityCard';

interface OrganizationActivitiesPageProps {
  params: { organizationId: string };
}

const OrganizationActivitiesPage = ({ params }: OrganizationActivitiesPageProps) => {
  const { state, functions } = useActivityCard({ params });

  return (
    <>
      <div className='flex flex-wrap justify-between gap-3 lgx:p-4'>
        <Typography variant='h5' tag='h5'>
          <I18nText path='partners.activities.title' />
        </Typography>
        <AddActivityDialog />
      </div>
      <div className='grid w-full grid-cols-5 gap-7 3xlx:grid-cols-4 xlx:grid-cols-3 lgx:p-4 mdx:grid-cols-2 2xsx:grid-cols-1'>
        {!state.isActivitiesLoading &&
          state.activities.map((activity) => {
            const activityCover = activity.media.find((item) => item.flag === 'AVATAR')!;
            return (
              <div className='h-fit w-full rounded-lg bg-background p-4'>
                <ActivityCard key={activity.id} className='max-w-none'>
                  <div className='relative'>
                    <div className='relative mdx:max-h-[256px]'>
                      <ActivityCardImage
                        src={activityCover.url!}
                        alt={activity.name}
                        className='mdx:max-h-[256px] md:rounded-[16px]'
                      />
                    </div>
                    <div className='absolute top-0 flex w-full items-center justify-between p-3'>
                      {activity.status && (
                        <div className='rounded-md bg-secondary px-3 py-2'>
                          <Typography variant='sub4' tag='p'>
                            <I18nText
                              path={
                                `organization.activities.status.${activity.status.toLowerCase()}` as LocaleMessageId
                              }
                            />
                          </Typography>
                        </div>
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
                    </div>
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
                        <ActivityCardCategory>{activity.category}</ActivityCardCategory>
                        <div className='flex gap-2 lg:gap-4'>
                          {activity.participants && (
                            <ActivityCardContentItem>
                              <UsersRoundIcon className='size-4 stroke-muted-foreground lg:size-6' />
                              <Typography tag='p' variant='body3' className='xsx:text-xs'>
                                {activity.participants}
                              </Typography>
                            </ActivityCardContentItem>
                          )}
                          {activity.likes && (
                            <ActivityCardContentItem>
                              <HeartIcon className='size-4 stroke-muted-foreground lg:size-6' />
                              <Typography tag='p' variant='body3' className='xsx:text-xs'>
                                {activity.likes}
                              </Typography>
                            </ActivityCardContentItem>
                          )}
                        </div>
                      </ActivityCardHeaderTop>

                      <ActivityCardName>{activity.name}</ActivityCardName>
                    </ActivityCardHeader>
                    <ActivityCardDivider />
                    <ActivityCardContent>
                      {activity.ageLimit[0] && (
                        <ActivityCardContentItem>
                          <UserRoundIcon className='size-4 stroke-muted-foreground lg:size-6' />
                          <Typography tag='p' variant='body3' className='xsx:text-xs'>
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
                          <Typography tag='p' variant='body3' className='xsx:text-xs'>
                            <I18nText
                              path='landing.activities.card.duration'
                              values={{ duration: activity.duration }}
                            />
                          </Typography>
                        </ActivityCardContentItem>
                      )}
                    </ActivityCardContent>
                    <InfoAddressDialog
                      activity={activity}
                      onEdit={functions.onEdit}
                      open={state.infoDialogOpen}
                      onOpenChange={functions.onInfoCloseClick}
                    />
                  </div>
                </ActivityCard>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OrganizationActivitiesPage;
