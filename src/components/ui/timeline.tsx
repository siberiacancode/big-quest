import React from 'react';

import { cn } from '@/lib/utils';

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mb-5 text-sm	font-normal text-muted-foreground', className)}
      {...props}
    >
      {children}
    </div>
  )
);
TimelineContent.displayName = 'TimelineContent';

const TimelineTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('text-lg font-bold', className)} {...props}>
      {children}
    </div>
  )
);
TimelineTitle.displayName = 'TimelineTitle';

const TimelineDot: React.FC = () => (
  <div className={cn('h-3 w-3 rounded-full border-2 border-gray-700 bg-gray-700')} />
);
TimelineDot.displayName = 'TimelineDot';

const TimelineConnect: React.FC = () => (
  <div className={cn('ml-[5px] h-full min-h-32 w-[1px] bg-gray-400')} />
);
TimelineConnect.displayName = 'TimelineConnect';

const TimelineItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('flex gap-5', className)} {...props}>
      <div>
        <TimelineDot />
        <TimelineConnect />
      </div>
      <div className='flex flex-col gap-2 pr-9'>{children}</div>
    </div>
  )
);
TimelineItem.displayName = 'TimelineItem';

const Timeline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const timelineItems = React.Children.toArray(children);

    return (
      <div ref={ref} className={cn('my-6 flex flex-col', className)} {...props}>
        {timelineItems.map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </div>
    );
  }
);
Timeline.displayName = 'Timeline';

export { Timeline, TimelineContent, TimelineItem, TimelineTitle };
