'use client';

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

import { Button, DropzoneImage } from '@/components/ui';

import { ACCEPT_FILE_TYPES } from './constants/constants';
import type { FileType } from './constants/types';
import { useDropzoneCard } from './hooks/useDropzoneCard';

interface DropzoneCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  file: File | undefined;
  onChange: (props: File | undefined) => void;
  url?: string;
  type?: FileType;
}

export const DropzoneCard = ({
  file,
  onChange,
  url = '',
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
      {url || file ? (
        <div className='relative h-full w-full'>
          <Image
            className='h-full w-full rounded-lg border'
            fill
            src={url || URL.createObjectURL(file as File)}
            alt='activity-image'
          />
          <Button
            variant='secondary'
            className='absolute right-0 top-0 m-2 rounded-full px-3'
            onClick={(event) => {
              event.stopPropagation();
              functions.deleteFile();
            }}
          >
            <Trash2 className='h-4 w-4' />
          </Button>
        </div>
      ) : (
        <DropzoneImage {...getInputProps} />
      )}
    </div>
  );
};
