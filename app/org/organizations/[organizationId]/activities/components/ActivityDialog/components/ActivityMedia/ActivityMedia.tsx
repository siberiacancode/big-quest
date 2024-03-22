import React from 'react';
import { WallpaperIcon } from 'lucide-react';
import Image from 'next/image';

import background from '@/assets/images/background/activity.png';
import { I18nText } from '@/components/common';
import { DropzoneCard } from '@/components/dropzone';
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
  return (
    <div className='grid h-screen max-h-[418px] w-full grid-cols-3 gap-3 xsx:max-h-[130px] xsx:gap-2'>
      <div className='relative col-span-2 h-full max-w-[418px]'>
        <Image
          className='w-full rounded-lg sm:max-h-[418px] sm:w-[300px]'
          src={state.activeMediaFile.url || background}
          fill
          alt={i18n.formatMessage({ id: 'activity.image.alt' }, { name: activity?.name })}
        />
        {state.activeMediaFile.isAvatar && (
          <div className='absolute right-0 top-0 m-2 rounded-full bg-emerald-700 p-2'>
            <WallpaperIcon className='h-5 w-5 text-white' />
          </div>
        )}
        {!state.activeMediaFile.isAvatar && (
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
                className={cn(
                  'h-full w-full rounded-lg',
                  item.url === state.activeMediaFile.url && 'border-2 border-emerald-700'
                )}
                value={item.url}
                onClick={() =>
                  functions.setActiveMediaFile({ url: item.url, isAvatar: item.isAvatar })
                }
                isAvatar={item.isAvatar}
                onDeleteFileClick={functions.onDeleteFileClick}
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
                  className='h-full w-full'
                  value={item.url}
                  onClick={() =>
                    functions.setActiveMediaFile({
                      url: item.url,
                      isAvatar: item.isAvatar
                    })
                  }
                  isAvatar={item.isAvatar}
                  onDeleteFileClick={functions.onDeleteFileClick}
                  onDropAccepted={functions.onDropAccepted}
                />
              </div>
            </div>
          ))}
        {state.activityMedia.length + state.uploadedMediaArray.length < 8 && (
          <div className='relative'>
            <DropzoneCard
              className='relative h-[100px] w-[100px]'
              value={undefined}
              onDropAccepted={functions.onDropAccepted}
            />
          </div>
        )}
      </div>
    </div>
  );
};
