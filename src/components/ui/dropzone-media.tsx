import React from 'react';
import type { DropzoneInputProps } from 'react-dropzone';
import { UploadCloudIcon } from 'lucide-react';

import { Input } from '@/components/ui';

type DropzoneMediaProps = React.InputHTMLAttributes<HTMLInputElement> & DropzoneInputProps;

const DropzoneMedia = React.forwardRef<HTMLInputElement, DropzoneMediaProps>((props, ref) => (
  <div className='relative flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-dropzoneBorder hover:bg-secondary/20'>
    <div className='rounded-full bg-secondary p-2'>
      <div className='rounded-full bg-input p-2'>
        <UploadCloudIcon className='h-4 w-4 text-foreground' />
      </div>
    </div>
    <Input {...props} id='dropzone-file' className='hidden' ref={ref} />
  </div>
));
export { DropzoneMedia };
