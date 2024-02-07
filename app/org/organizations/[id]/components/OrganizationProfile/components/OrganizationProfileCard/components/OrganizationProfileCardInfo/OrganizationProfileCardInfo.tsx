import { I18nText } from '@/components/common';

interface OrganizationProfileCardInfoProps {
  title: LocaleMessageId;
  children: React.ReactNode;
}

export const OrganizationProfileCardInfo = ({
  title,
  children
}: OrganizationProfileCardInfoProps) => (
  <div className='flex text-xs'>
    <p className='mr-[10px] font-bold'>
      <I18nText path={title} />
    </p>
    <p className='text-muted-foreground'>{children}</p>
  </div>
);
