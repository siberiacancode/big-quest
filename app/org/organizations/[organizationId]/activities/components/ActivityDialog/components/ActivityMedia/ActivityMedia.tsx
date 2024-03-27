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
  media?: ActivityProps['media'];
  files: File[] | FilesDto[];
  setFiles: (props: File[] | FilesDto[]) => void;
}

export const ActivityMedia = ({ media, files, setFiles }: ActivityMediaProps) => {
  const i18n = useI18n();
  const { state, functions } = useActivityMedia({ media, files, setFiles });

  const ACTIVITY_MEDIA_TOTAL_AMOUNT = state.activityMedia.length + state.uploadedMediaArray.length;

  return (
    <div
      className={cn(
        'grid h-fit max-h-[600px] w-full grid-cols-3 gap-3 2smx:max-w-full 2smx:grid-cols-1 2smx:grid-rows-4 2smx:px-4 xsx:grid-rows-3 xsx:gap-2 xxsx:grid-rows-4',
        state.activityMedia.length > 4 && '2smx:grid-rows-5 xsx:grid-rows-5 xxsx:grid-rows-5'
      )}
    >
      <div
        className={cn(
          'relative col-span-2 max-h-[418px] max-w-[418px] 2smx:row-span-3 2smx:max-w-full xsx:row-span-2 xxsx:row-span-3 2sm:h-[418px]',
          state.activityMedia.length > 4 && '2smx:row-span-3 xsx:row-span-3 xxsx:row-span-3'
        )}
      >
        {state.activeMediaFile.url && state.activeMediaFile.type === 'image' && (
          <Image
            className='w-full rounded-lg 2smx:h-[360px]'
            src={state.activeMediaFile.url}
            fill
            alt={i18n.formatMessage({ id: 'activity.image.alt' })}
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
            <Typography variant='body1'>
              <I18nText path='activity.image.placeholder' />
            </Typography>
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

      <div
        className={cn(
          'grid h-max grid-cols-2 gap-2 2smx:row-span-1 2smx:grid-cols-4 2smx:grid-rows-1',
          state.activityMedia.length > 4 && '2smx:row-span-2'
        )}
      >
        {state.activityMedia.map((item, index) => (
          <div className='relative' key={index}>
            <div className='3smx:h-[85px] relative h-[100px] w-full xsx:h-[80px] xxsx:h-[60px]'>
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
              <div className='3smx:h-[85px] relative h-[100px] w-full xsx:h-[80px] xxsx:h-[60px]'>
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
              className='3smx:h-[85px] relative h-[100px] w-full xsx:h-[80px] xxsx:h-[60px]'
              onDropAccepted={functions.onDropAccepted}
            />
          </div>
        )}
      </div>
    </div>
  );
};
