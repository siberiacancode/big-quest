import React from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui';
import { cn } from '@/lib/utils';

const InfoCard = ({ className, ...props }: React.ComponentProps<typeof Card>) => (
  <Card className={cn('flex-auto', className)} {...props} />
);
InfoCard.displayName = 'InfoCard';

const InfoCardHeader = ({ className, ...props }: React.ComponentProps<typeof CardHeader>) => (
  <CardHeader
    className={cn(
      'flex flex-row items-center justify-between space-y-0 px-4 pb-2 md:px-6',
      className
    )}
    {...props}
  />
);
InfoCardHeader.displayName = 'InfoCardHeader';

const InfoCardTitle = ({ className, ...props }: React.ComponentProps<typeof CardHeader>) => (
  <CardHeader className={cn('p-1 text-base font-medium', className)} {...props} />
);
InfoCardTitle.displayName = 'InfoCardTitle';

const InfoCardAction = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('rounded-full bg-secondary p-2', className)} />
  )
);
InfoCardAction.displayName = 'InfoCardAction';

const InfoCardContent = ({ className, ...props }: React.ComponentProps<typeof CardContent>) => (
  <CardContent className={cn('mdx: flex flex-row justify-between px-2', className)} {...props} />
);
InfoCardContent.displayName = 'InfoCardHeader';

const InfoCardItem = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex-1 border-x border-l-0 border-secondary pl-5 last:border-r-0 mdx:pr-2',
        className
      )}
      {...props}
    />
  )
);
InfoCardItem.displayName = 'InfoCardItem';

const InfoCardItemTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-3xl font-bold', className)} {...props} />
  )
);
InfoCardItemTitle.displayName = 'InfoCardItemTitle';

const InfoCardItemDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('py-1 text-xs text-muted-foreground', className)} {...props} />
  )
);
InfoCardItemDescription.displayName = 'InfoCardItemDescription';

export {
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardHeader,
  InfoCardItem,
  InfoCardItemDescription,
  InfoCardItemTitle,
  InfoCardTitle
};
