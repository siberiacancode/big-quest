import Link from 'next/link';

import { I18nText } from '@/components/common';
import { buttonVariants, Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

interface NotFoundComponentProps {
  link: string;
}

export const NotFoundComponent = ({ link }: NotFoundComponentProps) => (
  <div className='flex h-full w-full flex-col items-center justify-center gap-2 p-6'>
    <Typography variant='h3'>
      <I18nText path='page.notFound.title' />
    </Typography>
    <Link
      href={{
        pathname: link
      }}
      className={cn(buttonVariants({ size: 'lg', variant: 'primary' }), 'w-full max-w-96')}
    >
      <I18nText path='button.backToRoot' />
    </Link>
  </div>
);
