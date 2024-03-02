'use client';

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

import { Button, DropzoneImage } from '@/components/ui';

import type { FileType } from './constants/types';
import { acceptFileTypes } from './constants/types';
import { useDropzoneCard } from './hooks/useDropzoneCard';

interface DropzoneCardProps {
  file: File | undefined;
  setFile: (props: File | undefined) => void;
  url?: string;
  fileType?: FileType;
  className?: string;
}

export const DropzoneCard = ({
  file,
  setFile,
  url = '',
  fileType = 'image',
  ...props
}: DropzoneCardProps) => {
  const { state, functions } = useDropzoneCard({ url, setFile, fileType });

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: acceptFileTypes[fileType],
    onDropRejected: functions.onError,
    onDropAccepted: functions.handleFileChange
  });

  return (
    <div {...getRootProps()} {...props}>
      {state.fileUrl ? (
        <div className='relative h-full w-full'>
          <Image
            className='h-full w-full rounded-lg border'
            width={147}
            height={125}
            src={state.fileUrl}
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
        <DropzoneImage getInputProps={getInputProps} />
      )}
    </div>
  );
};
