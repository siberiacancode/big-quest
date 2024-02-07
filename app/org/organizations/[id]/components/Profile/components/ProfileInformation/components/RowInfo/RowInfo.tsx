import { I18nText } from '@/components/common';

interface RowInfoProps {
  title: LocaleMessageId;
  children: React.ReactNode;
}

export const RowInfo = ({ title, children }: RowInfoProps) => (
  <div className='flex text-xs'>
    <p className='mr-[10px] font-bold'>
      <I18nText path={title} />
    </p>
    <p className='text-muted-foreground'>{children}</p>
  </div>
);
