import { I18nText } from '@/components/common';
import { Button, Typography } from '@/components/ui';

export interface NewsCardProps {
  title: string;
  description: string;
}

export const NewsCard = ({ description, title }: NewsCardProps) => (
  <div className='flex w-full flex-col items-center'>
    <Typography tag='h3' className='text-[48px] leading-10 text-white'>
      {title}
    </Typography>
    <Typography tag='p' className='mt-6 text-[32px] leading-10 text-white'>
      {description}
    </Typography>

    <Button size='lg' variant='ghost' className='mt-8 text-taiga hover:bg-taiga hover:text-white'>
      <I18nText path='button.login' />
    </Button>
  </div>
);
