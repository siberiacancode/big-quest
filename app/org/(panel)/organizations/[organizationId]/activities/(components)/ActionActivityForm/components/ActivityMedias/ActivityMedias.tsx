import React from 'react';
import { WallpaperIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import { DropzoneCard } from '@/components/dropzone';
import { Button, Typography } from '@/components/ui';
import { useI18n } from '@/utils/contexts';

import type { ActivityMedia } from '../../../../(constants)/types';

interface ActivityMediaProps {
  activityMedias: ActivityMedia[];
  onDeleteClick: (id: string) => void;
  onCoverClick: (id: string) => void;
  onClick: (id: string) => void;
  onDropAccepted: (props: File) => void;
}

const MAX_MEDIA_AMOUNT = 8;

export const ActivityMedias = ({
  activityMedias,
  onDropAccepted,
  onDeleteClick,
  onCoverClick,
  onClick
}: ActivityMediaProps) => {
  const i18n = useI18n();
  const selectedMedia = activityMedias.find((media) => media.selected);

  return (
    <div className='flex w-full flex-col gap-4 md:flex-row'>
      <div className='relative max-h-[418px] w-full md:max-w-[418px]'>
        {selectedMedia && selectedMedia.url && selectedMedia.type === 'IMAGE' && (
          <div className='p-1/2'>
            <Image
              className='rounded-lg'
              src={selectedMedia.url}
              fill
              alt={i18n.formatMessage({ id: 'activity.image.alt' })}
            />
          </div>
        )}

        {selectedMedia && selectedMedia.url && selectedMedia.type === 'VIDEO' && (
          <div className='aspect-square'>
            <video
              className='h-full w-full rounded-lg border border-border object-cover'
              muted
              autoPlay
            >
              <source src={selectedMedia.url} type='video/mp4' />
            </video>
          </div>
        )}

        {!selectedMedia && (
          <div className='flex max-h-[418px] w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-dropzoneBorder py-[33%] text-muted-foreground'>
            <WallpaperIcon className='h-10 w-10 text-muted-foreground' />
            <Typography variant='body1'>
              <I18nText path='activity.image.placeholder' />
            </Typography>
          </div>
        )}

        {selectedMedia && selectedMedia.flag === 'AVATAR' && selectedMedia.type === 'IMAGE' && (
          <div className='absolute right-0 top-0 m-4 rounded-full bg-emerald-700 p-2'>
            <WallpaperIcon className='h-5 w-5 text-white' />
          </div>
        )}

        {selectedMedia &&
          selectedMedia.url &&
          selectedMedia.flag !== 'AVATAR' &&
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

      <div className='flex w-full grid-rows-4 gap-2 overflow-x-scroll md:grid md:h-full md:w-fit md:grid-cols-2 md:gap-1 md:overflow-x-hidden'>
        {activityMedias.map((item, index) => (
          <div className='relative' key={index}>
            <div className='relative h-[100px]'>
              <DropzoneCard
                type={item.type}
                className='size-[100px] rounded-3xl'
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
            <DropzoneCard className='relative size-[100px]' onDropAccepted={onDropAccepted} />
          </div>
        )}
      </div>
    </div>
  );
};
