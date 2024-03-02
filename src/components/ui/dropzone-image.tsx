import React from 'react';
import type { DropzoneInputProps } from 'react-dropzone';
import { UploadCloudIcon } from 'lucide-react';

import { Input } from '@/components/ui';

interface DropzoneImageProps extends React.InputHTMLAttributes<HTMLInputElement> {
  getInputProps: (props: DropzoneInputProps | undefined) => DropzoneInputProps;
}

const DropzoneImage = React.forwardRef<HTMLInputElement, DropzoneImageProps>(
  ({ getInputProps }, ref) => {
    return (
      <div className='relative flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border hover:bg-secondary/20'>
        <div className='rounded-full bg-secondary p-2'>
          <div className='rounded-full bg-input p-2'>
            <UploadCloudIcon className='h-4 w-4 text-foreground' />
          </div>
        </div>
        <Input {...getInputProps({})} id='dropzone-file' className='hidden' ref={ref} />
      </div>
    );
  }
);
export { DropzoneImage };
