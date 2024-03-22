import { Typography } from '@/components/ui';

export interface NewsCardProps {
  title: string;
  description: string;
}

export const NewsCard = ({ description, title }: NewsCardProps) => (
  <div className='flex w-full flex-col items-center text-center'>
    <Typography tag='h3' className='text-[48px] font-bold leading-10 text-white'>
      {title}
    </Typography>
    <Typography tag='p' className='mt-6 text-[32px] leading-10 text-white'>
      {description}
    </Typography>
  </div>
);
