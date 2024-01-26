import { cn } from '@/lib/utils';

export interface InfoCardItemProps {
  id?: number;
  info?: string;
  description?: string;
  descriptionIcon?: React.ReactNode;
  className?: string;
}

export const InfoCardItem = ({
  id,
  info,
  description,
  descriptionIcon,
  className
}: InfoCardItemProps) => (
  <div
    key={id}
    className={cn(
      'flex-1 border-x border-l-0 border-breadboard pl-5 last:border-r-0 md:px-10 md:first:px-0',
      className
    )}
  >
    <div className='text-3xl font-bold'>{info}</div>
    <div className='flex flex-row'>
      <div className={cn(descriptionIcon && 'mr-2 mt-1')}>{descriptionIcon}</div>
      <p className='py-1 text-xs text-muted-foreground'>{description}</p>
    </div>
  </div>
);
