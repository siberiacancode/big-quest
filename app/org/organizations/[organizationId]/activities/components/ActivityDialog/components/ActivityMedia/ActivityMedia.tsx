import React from 'react';
import { WallpaperIcon } from 'lucide-react';
import Image from 'next/image';

import { I18nText } from '@/components/common';
import { DropzoneCard } from '@/components/dropzone';
import type { FileType } from '@/components/dropzone/DropzoneCard/constants/types';
import { Button, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useI18n } from '@/utils/contexts';

import type { ActivityProps } from '../../constants/types';

import { useActivityMedia } from './hooks/useActivityMedia';

interface ActivityMediaProps {
  activity?: ActivityProps;
}

export const ActivityMedia = ({ activity }: ActivityMediaProps) => {
  const i18n = useI18n();
  const { state, functions } = useActivityMedia();

  const ACTIVITY_MEDIA_TOTAL_AMOUNT = state.activityMedia.length + state.uploadedMediaArray.length;

  return (
    <div className='grid h-screen max-h-[418px] w-full grid-cols-3 gap-3 xsx:max-h-[130px] xsx:gap-2'>
      <div className='relative col-span-2 h-full max-w-[418px]'>
        {state.activeMediaFile.url && state.activeMediaFile.type === 'image' && (
          <Image
            className='w-full rounded-lg sm:max-h-[418px] sm:w-[300px]'
            src={state.activeMediaFile.url}
            fill
            alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity?.name })}
          />
        )}
        {state.activeMediaFile.url && state.activeMediaFile.type === 'video' && (
          <video className='h-full w-full rounded-lg border border-border' controls>
            <source src={state.activeMediaFile.url} type='video/mp4' />
          </video>
        )}

        {!state.activeMediaFile.url && (
          <div className='flex h-full w-full flex-col items-center  justify-center gap-4 rounded-lg border-2 border-dashed border-dropzoneBorder text-muted-foreground sm:max-h-[418px]'>
            <WallpaperIcon className='h-10 w-10 text-muted-foreground' />
            <Typography variant='body1'>Место для показа медиа</Typography>
          </div>
        )}
        {state.activeMediaFile.isAvatar && state.activeMediaFile.type === 'image' && (
          <div className='absolute right-0 top-0 m-2 rounded-full bg-emerald-700 p-2'>
            <WallpaperIcon className='h-5 w-5 text-white' />
          </div>
        )}
        {!state.activeMediaFile.isAvatar &&
          state.activeMediaFile.url &&
          state.activeMediaFile.type === 'image' && (
            <Button
              variant='ghost'
              className='absolute right-0 top-0 m-2 flex items-center gap-3 rounded-full bg-secondary px-4 py-2'
              onClick={() => functions.onChangeAvatarClick(state.activeMediaFile)}
            >
              <WallpaperIcon className='h-5 w-5' />
              <Typography variant='sub4'>
                <I18nText path='button.makeCover' />
              </Typography>
            </Button>
          )}
      </div>

      <div className='grid h-fit grid-cols-2 gap-2'>
        {state.activityMedia.map((item, index) => (
          <div className='relative' key={index}>
            <div className={cn('relative h-[100px] w-[100px]')}>
              <DropzoneCard
                type={item.type}
                className={cn(
                  'h-full w-full rounded-lg',
                  item.url === state.activeMediaFile.url && 'border-2 border-emerald-700'
                )}
                value={item.url}
                onClick={() =>
                  functions.setActiveMediaFile({
                    url: item.url,
                    isAvatar: item.isAvatar,
                    type: item.type
                  })
                }
                isAvatar={item.isAvatar}
                isActive={item.url === state.activeMediaFile.url}
                onDelete={functions.onDelete}
                onDropAccepted={functions.onDropAccepted}
              />
            </div>
          </div>
        ))}
        {state.uploadedMediaArray &&
          state.uploadedMediaArray.map((item, index) => (
            <div className='relative' key={index}>
              <div className='relative h-[100px] w-[100px] rounded-lg'>
                <DropzoneCard
                  type={item.type as FileType}
                  className='h-full w-full'
                  value={item.url}
                  onClick={() =>
                    functions.setActiveMediaFile({
                      url: item.url,
                      isAvatar: item.isAvatar,
                      type: item.type
                    })
                  }
                  isAvatar={item.isAvatar}
                  isActive={item.url === state.activeMediaFile.url}
                  onDelete={functions.onDelete}
                  onDropAccepted={functions.onDropAccepted}
                />
              </div>
            </div>
          ))}
        {ACTIVITY_MEDIA_TOTAL_AMOUNT < 8 && (
          <div className='relative'>
            <DropzoneCard
              className='relative h-[100px] w-[100px]'
              onDropAccepted={functions.onDropAccepted}
            />
          </div>
        )}
      </div>
    </div>
  );
};
