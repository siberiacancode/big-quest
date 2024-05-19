import React from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface CopyToClipboardButtonProps extends React.ComponentProps<'div'> {
  value: string;
}

const RESET_COPY_TIMEOUT = 2000;

export const CopyToClipboardButton = ({ className, value }: CopyToClipboardButtonProps) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setHasCopied(false), RESET_COPY_TIMEOUT);
    return () => clearTimeout(timer);
  }, [hasCopied]);

  const handleCopy = () => {
    setHasCopied(true);
    navigator.clipboard.writeText(value);
  };

  return (
    <Button
      variant='ghost'
      onClick={handleCopy}
      size='icon'
      className={cn(className)}
      type='button'
    >
      {hasCopied ? (
        <CheckIcon className='stroke-muted-foreground' size={20} />
      ) : (
        <CopyIcon className='stroke-muted-foreground' size={20} />
      )}
    </Button>
  );
};
