import React from 'react';
import { WallpaperIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import { DropzoneCard } from '@/components/dropzone';
import { Button, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useI18n } from '@/utils/contexts';

import type { ActivityMedia as FixMe } from '../../../../(constants)/types';

interface ActivityMediaProps {
  activityMedias: FixMe[];
  onDeleteClick: (id: string) => void;
  onCoverClick: (id: string) => void;
  onClick: (id: string) => void;
  onDropAccepted: (props: File) => void;
}

const MAX_MEDIA_AMOUNT = 8;

export const ActivityMedia = ({
  activityMedias,
  onDropAccepted,
  onDeleteClick,
  onCoverClick,
  onClick
}: ActivityMediaProps) => {
  const i18n = useI18n();
  const selectedMedia = activityMedias.find((media) => media.selected);

  return (
    <div className='flex w-full gap-4'>
      <div className='relative w-[65%]'>
        {selectedMedia && selectedMedia.url && selectedMedia.type === 'IMAGE' && (
          <Image
            className='w-full rounded-lg 2smx:h-[360px]'
            src={selectedMedia.url}
            fill
            alt={i18n.formatMessage({ id: 'activity.image.alt' })}
          />
        )}
        {selectedMedia && selectedMedia.url && selectedMedia.type === 'VIDEO' && (
          <video
            className='h-full w-full rounded-lg border border-border object-cover'
            muted
            autoPlay
          >
            <source src={selectedMedia.url} type='video/mp4' />
          </video>
        )}

        {!selectedMedia && (
          <div className='flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-dropzoneBorder p-8 text-muted-foreground sm:max-h-[418px]'>
            <WallpaperIcon className='h-10 w-10 text-muted-foreground' />
            <Typography variant='body1'>
              <I18nText path='activity.image.placeholder' />
            </Typography>
          </div>
        )}

        {selectedMedia && selectedMedia.flag === 'AVATAR' && selectedMedia.type === 'IMAGE' && (
          <div className='absolute right-0 top-0 m-2 rounded-full bg-emerald-700 p-2'>
            <WallpaperIcon className='h-5 w-5 text-white' />
          </div>
        )}
        {selectedMedia &&
          selectedMedia.flag !== 'AVATAR' &&
          selectedMedia.url &&
          selectedMedia.type === 'IMAGE' && (
            <Button
              variant='ghost'
              className='absolute right-0 top-0 m-4 flex items-center gap-3 rounded-full bg-secondary px-4 py-2'
              onClick={() => onCoverClick(selectedMedia.id)}
            >
              <WallpaperIcon className='h-5 w-5' />
              <Typography variant='sub4'>
                <I18nText path='button.makeCover' />
              </Typography>
            </Button>
          )}
      </div>

      <div
        className={cn(
          'grid h-max w-[35%] grid-cols-2 gap-2',
          activityMedias.length > 3 && '2smx:row-span-2'
        )}
      >
        {activityMedias.map((item, index) => (
          <div className='relative' key={index}>
            <div className='relative h-[100px] w-full 3smx:h-[85px] xsx:h-[80px] xxsx:h-[60px]'>
              <DropzoneCard
                type={item.type}
                className='h-full w-full rounded-3xl'
                value={item.url}
                onClick={() => onClick(item.id)}
                isAvatar={item.flag === 'AVATAR'}
                isActive={item.id === selectedMedia?.id}
                onDelete={() => onDeleteClick(item.id)}
                onDropAccepted={onDropAccepted}
              />
            </div>
          </div>
        ))}
        {activityMedias.length < MAX_MEDIA_AMOUNT && (
          <div className='relative'>
            <DropzoneCard
              className='relative h-[100px] w-full 3smx:h-[85px] xsx:h-[80px] xxsx:h-[60px]'
              onDropAccepted={onDropAccepted}
            />
          </div>
        )}
      </div>
    </div>
  );
};
