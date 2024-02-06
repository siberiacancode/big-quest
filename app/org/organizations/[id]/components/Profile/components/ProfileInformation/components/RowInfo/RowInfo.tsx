import { I18nText } from '@/components/common';

export const RowInfo = ({ title, value = '' }) => {
  return (
    <div className='flex text-xs'>
      <p className='mr-[10px] font-bold'>
        <I18nText path={title} />
      </p>
      <p className='text-muted-foreground'>{value}</p>
    </div>
  );
};
