'use client';

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Trash2, WallpaperIcon } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

import { Button, DropzoneMedia } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useI18n } from '@/utils/contexts';

import { ACCEPT_FILE_TYPES } from './constants/acceptFileTypes';
import type { FileType } from './constants/types';

interface DropzoneCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  type?: FileType;
  isAvatar?: boolean;
  isActive?: boolean;
  onDelete?: (value: string) => void;
  onDropAccepted: (props: File) => void;
}

const MAX_FILES_AMOUNT = 1;

export const DropzoneCard = ({
  value,
  type = 'IMAGE',
  isAvatar = false,
  isActive = false,
  onDelete = () => {},
  onDropAccepted,
  ...props
}: DropzoneCardProps) => {
  const i18n = useI18n();

  const onDropRejected = () =>
    toast.error(i18n.formatMessage({ id: `dropzone.${type}.error` }), {
      cancel: { label: i18n.formatMessage({ id: 'button.close' }) }
    });

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: MAX_FILES_AMOUNT,
    accept: ACCEPT_FILE_TYPES[type === 'IMAGE' || type === 'VIDEO' ? 'media' : 'docs'],
    onDropRejected,
    onDropAccepted: (files: File[]) => onDropAccepted(files[0])
  });

  return (
    <div {...getRootProps()} {...props}>
      {value ? (
        <div className='relative h-full w-full'>
          {type === 'IMAGE' && (
            <Image
              className={cn(isActive && 'border-2 border-emerald-700', 'h-full w-full rounded-md')}
              fill
              src={typeof value === 'string' ? value : URL.createObjectURL(value)}
              alt='activity-image'
            />
          )}

          {type === 'VIDEO' && (
            <video
              className={cn(
                isActive && 'border-2 border-emerald-700',
                'h-full w-full flex-1 rounded-md border border-border object-cover'
              )}
            >
              <source src={value} type='video/mp4' />
            </video>
          )}
          {!isAvatar && (
            <Button
              variant='secondary'
              className='absolute right-0 top-0 m-2 h-fit rounded-full p-2 '
              onClick={(event) => {
                event.stopPropagation();
                onDelete(value);
              }}
            >
              <Trash2 className='h-3 w-3 ' />
            </Button>
          )}
          {isAvatar && type === 'IMAGE' && (
            <div className='absolute right-0 top-0 m-2 rounded-full bg-emerald-700 p-2'>
              <WallpaperIcon className='h-3 w-3 text-white' />
            </div>
          )}
        </div>
      ) : (
        <DropzoneMedia {...getInputProps} />
      )}
    </div>
  );
};
