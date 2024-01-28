export interface InfoCardItemProps {
  info?: string;
  description?: string | React.ReactNode;
}

export const InfoCardItem = ({ info, description }: InfoCardItemProps) => (
  <div className='flex-1 border-x border-l-0 border-secondary pl-3 last:border-r-0 md:px-10 md:pl-5 md:first:px-0  '>
    <div className='text-3xl font-bold'>{info}</div>
    <div className='flex flex-row py-1 text-xs text-muted-foreground'>{description}</div>
  </div>
);
