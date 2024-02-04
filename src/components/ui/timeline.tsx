import type { ReactNode } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';

type TimelineContentProps = {
  children: ReactNode;
};

const TimelineContent: React.FC<TimelineContentProps> = ({ children }) => (
  <div className={cn(' text-sm	font-normal	text-slate-500	')}>{children}</div>
);
TimelineContent.displayName = 'TimelineContent';

type TimelineTitleProps = {
  children: ReactNode;
};

const TimelineTitle: React.FC<TimelineTitleProps> = ({ children }) => (
  <div className={cn('text-lg font-bold')}>{children}</div>
);
TimelineTitle.displayName = 'TimelineTitle';

const TimelineDot: React.FC = () => (
  <div className={cn('h-3 w-3 rounded-full border-2 border-gray-700 bg-gray-700')} />
);
TimelineDot.displayName = 'TimelineDot';

type TimelineItemProps = {
  children: React.ReactNode;
  className?: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ children, className }) => (
  <div className={cn('relative flex', className)}>
    <TimelineDot />
    <div className='absolute left-8 top-[-7px] flex flex-col gap-2 pr-9'>{children}</div>
  </div>
);
TimelineItem.displayName = 'TimelineItem';

const TimelineConnect: React.FC = () => (
  <div className={cn('top-3 ml-[5px]  h-32 w-[1px] self-stretch bg-gray-400')} />
);
TimelineConnect.displayName = 'TimelineConnect';

type TimelineProps = {
  children: React.ReactNode;
};

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  const timelineItems = React.Children.toArray(children);

  return (
    <div className={cn('relative my-6 flex flex-col')}>
      {timelineItems.map((child, index) => (
        <React.Fragment key={index}>
          {index > 0 && <TimelineConnect />}
          {child}
          {index === timelineItems.length - 1 && <TimelineConnect />}
        </React.Fragment>
      ))}
    </div>
  );
};
Timeline.displayName = 'Timeline';

export { Timeline, TimelineContent, TimelineItem, TimelineTitle };
