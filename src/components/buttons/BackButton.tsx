'use client';

import { useRouter } from 'next/navigation';

import { Button, type ButtonProps } from '../ui';

type BackButtonProps = ButtonProps;

export const BackButton = ({ onClick, ...props }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event);
        router.back();
      }}
    />
  );
};
