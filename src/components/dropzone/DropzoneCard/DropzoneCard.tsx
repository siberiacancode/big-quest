'use client';

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Trash2, WallpaperIcon } from 'lucide-react';
import Image from 'next/image';

import { Button, DropzoneMedia } from '@/components/ui';
import { cn } from '@/lib/utils';

import { ACCEPT_FILE_TYPES } from './constants/acceptFileTypes';
import type { FileType } from './constants/types';
import { useDropzoneCard } from './hooks/useDropzoneCard';

interface DropzoneCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  type?: FileType;
  isAvatar?: boolean;
  isActive?: boolean;
  onDeleteFileClick?: (value: string) => void;
  onDropAccepted: (props: File) => void;
}

export const DropzoneCard = ({
  value,
  type = 'image',
  isAvatar = false,
  isActive = false,
  onDeleteFileClick = () => {},
  onDropAccepted,
  ...props
}: DropzoneCardProps) => {
  console.log(value, isAvatar);
  const { functions } = useDropzoneCard({
    type
  });
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: ACCEPT_FILE_TYPES[type === 'image' || type === 'video' ? 'media' : 'docs'],
    onDropRejected: functions.onError,
    onDropAccepted: (files: File[]) => onDropAccepted(files[0])
  });

  return (
    <div {...getRootProps()} {...props}>
      {value ? (
        <div className='relative h-full w-full'>
          {type === 'image' && (
            <Image
              className={cn(isActive && 'border-2 border-emerald-700', 'h-full w-full rounded-md')}
              fill
              src={typeof value === 'string' ? value : URL.createObjectURL(value)}
              alt='activity-image'
            />
          )}

          {type === 'video' && (
            <video
              className={cn(
                isActive && 'border-2 border-emerald-700',
                'h-full w-full flex-1 rounded-md border border-border'
              )}
            >
              <source src={value} type='video/mp4' />
              <p>
                Браузер не поддерживает ссылку, скачайте файл нажав:
                <a href={value} download={value}>
                  нажмите на ссылку
                </a>
              </p>
            </video>
          )}
          {!isAvatar && (
            <Button
              variant='secondary'
              className='absolute right-0 top-0 m-2 h-fit rounded-full p-2 '
              onClick={(event) => {
                event.stopPropagation();
                onDeleteFileClick(value);
              }}
            >
              <Trash2 className='h-3 w-3 ' />
            </Button>
          )}
          {isAvatar && type === 'image' && (
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
