'use client';

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

import { Button, DropzoneImage } from '@/components/ui';
import { cn } from '@/lib/utils';

import { ACCEPT_FILE_TYPES } from './constants/acceptFileTypes';
import type { FileType } from './constants/types';
import { useDropzoneCard } from './hooks/useDropzoneCard';

interface DropzoneCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: File | string;
  onChange: (props?: File) => void;
  type?: FileType;
  mobileVersion?: boolean;
}

export const DropzoneCard = ({
  mobileVersion = false,
  value,
  onChange,
  type = 'image',
  ...props
}: DropzoneCardProps) => {
  const { functions } = useDropzoneCard({ onChange, type });

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: ACCEPT_FILE_TYPES[type],
    onDropRejected: functions.onError,
    onDropAccepted: (files: File[]) => onChange(files[0])
  });

  return (
    <div {...getRootProps()} {...props}>
      {value ? (
        <div className='relative h-full w-full'>
          <Image
            className={cn('h-full w-full rounded-lg border', mobileVersion && 'rounded-full')}
            fill
            src={typeof value === 'string' ? value : URL.createObjectURL(value)}
            alt='activity-image'
          />
          {!mobileVersion && (
            <Button
              type='button'
              variant='secondary'
              className='absolute right-0 top-0 m-2 rounded-full px-3'
              onClick={(event) => {
                event.stopPropagation();
                functions.deleteFile();
              }}
            >
              <Trash2 className='h-4 w-4' />
            </Button>
          )}
        </div>
      ) : (
        <DropzoneImage {...getInputProps} />
      )}
    </div>
  );
};
