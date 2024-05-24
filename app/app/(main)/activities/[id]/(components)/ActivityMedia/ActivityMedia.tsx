'use client';

import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { useI18n } from '@/utils/contexts';

import { CarouselMedia } from '../CarouselMedia/CarouselMedia';

interface ActivityMediaProps {
  activity: ActivityResponse;
  isMobile: boolean;
}

export const ActivityMedia = ({ activity, isMobile }: ActivityMediaProps) => {
  const i18n = useI18n();
  const activityCover = activity.media.find((media) => media.flag === 'AVATAR')!;
  const [activeMedia, setActiveMedia] = React.useState(activityCover);

  return (
    <>
      {isMobile && <CarouselMedia activity={activity} />}
      {!isMobile && (
        <div className='flex w-full flex-col gap-4 md:flex-row 2md:gap-6'>
          <div className='relative max-h-[483px] w-full md:w-[65%] md:max-w-[483px]'>
            {activeMedia.url && activeMedia.type === 'IMAGE' && (
              <div className='aspect-square p-1/2'>
                <Image
                  className='rounded-lg'
                  src={activeMedia.url}
                  fill
                  alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity.name })}
                />
              </div>
            )}
            {activeMedia.type === 'VIDEO' && (
              <div className='aspect-square'>
                <video
                  autoPlay
                  muted
                  className='h-full max-h-[418px] w-full rounded-lg border border-border object-cover'
                >
                  <source src={activeMedia.url} type='video/mp4' />
                </video>
              </div>
            )}
          </div>

          <div className='flex w-full max-w-[240px] flex-grow grid-rows-4 gap-2 overflow-x-scroll md:grid md:h-full md:w-fit md:grid-cols-2 md:overflow-x-hidden 2md:gap-4'>
            {activity.media.map((item, index) => (
              <div className='relative' key={index}>
                <div className='relative w-[112px]  md:w-full'>
                  {item.url && item.type === 'IMAGE' && (
                    <div className='aspect-square h-full w-full'>
                      <Image
                        className={cn(
                          'w-full rounded-lg',
                          activeMedia.url === item.url && 'border-2 border-emerald-700'
                        )}
                        src={item.url}
                        fill
                        onClick={() => setActiveMedia(item)}
                        alt={i18n.formatMessage(
                          { id: 'activity.image.alt' },
                          { name: activity.name }
                        )}
                      />
                    </div>
                  )}
                  {item.type === 'VIDEO' && (
                    <div className='size-[112px]'>
                      <video
                        autoPlay
                        muted
                        className={cn(
                          activeMedia.url === item.url && 'border-2 border-emerald-700',
                          'size-[112px] rounded-lg border border-border object-cover'
                        )}
                        onClick={() => setActiveMedia(item)}
                      >
                        <source src={item.url} type='video/mp4' />
                      </video>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
