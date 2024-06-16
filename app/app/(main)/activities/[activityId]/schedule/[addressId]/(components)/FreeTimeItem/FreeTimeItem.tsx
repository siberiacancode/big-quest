import { cn } from '@/lib/utils';

import type { Time } from '../../../../(constants)/types';

interface FreeTimeItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  time: Time;
}

export const FreeTimeItem = ({ time, className, ...props }: FreeTimeItemProps) => (
  <button
    type='button'
    className={cn(
      'text-light min-w-[61px] rounded-[8px] border border-accent bg-white px-3 py-[6px] text-center text-sm font-light text-gray-two',
      className
    )}
    {...props}
  >
    {time.start}
    {time.end && `-${time.end}`}
  </button>
);
