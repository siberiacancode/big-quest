import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FreeTimeItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  time: string;
}

export const FreeTimeItem = ({ time, className, ...props }: FreeTimeItemProps) => (
  <button
    className={cn(
      'text-light min-w-[53px] rounded-[8px] bg-muted-foreground px-2 py-1 text-center text-white',
      className
    )}
    {...props}
  >
    <Typography>{time}</Typography>
  </button>
);
