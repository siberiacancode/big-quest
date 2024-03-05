'use client';

import React from 'react';

import { DropzoneCard } from '@/components/dropzone';

interface CardImageProps {
  className?: string;
}
// просто пример использования, потом это у нас будет логика поля files в форме
export const CardImage = (props: CardImageProps) => {
  const [file, setFile] = React.useState<File | undefined>();

  return <DropzoneCard value={file} onChange={setFile} {...props} />;
};
