import { Typography } from '@/components/ui';

export interface NewsCardProps {
  title: string;
  description: string;
}

export const NewsCard = ({ description, title }: NewsCardProps) => (
  <div className='flex w-full flex-col items-center text-center'>
    <Typography
      tag='h3'
      className='text-5xl font-bold leading-10 text-white lgx:text-4xl mdx:text-3xl'
    >
      {title}
    </Typography>
    <Typography
      tag='p'
      className='mt-6 text-[32px] leading-10 text-white lgx:text-[28px] mdx:text-xl'
    >
      {description}
    </Typography>
  </div>
);
