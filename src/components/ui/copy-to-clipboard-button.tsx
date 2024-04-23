import React from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from './button';

export interface CopyToClipboardButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const CopyToClipboardButton = ({ className, value }: CopyToClipboardButtonProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  const resetCopy = React.useCallback(() => {
    setHasCopied(false);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(resetCopy, 2000);
    return () => clearTimeout(timer);
  }, [hasCopied, resetCopy]);

  const handleCopy = () => {
    setHasCopied(true);
    navigator.clipboard.writeText(value);
  };
  return (
    <Button
      variant='ghost'
      onClick={handleCopy}
      className={cn('absolute right-0 top-0 px-3', className)}
    >
      {hasCopied ? (
        <CheckIcon className='stroke-muted-foreground' size={20} />
      ) : (
        <CopyIcon className='stroke-muted-foreground' size={20} />
      )}
    </Button>
  );
};
