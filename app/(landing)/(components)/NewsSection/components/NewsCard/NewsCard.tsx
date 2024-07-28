import { Typography } from '@/components/ui';

export interface NewsCardProps {
  image: string;
  title: string;
  description: string;
}

export const NewsCard = ({ image, description, title }: NewsCardProps) => (
  <div
    className='relative flex flex-grow flex-col justify-center overflow-hidden rounded-[30px] mdx:rounded-2xl'
    style={{
      backgroundImage: `url(/background/news/${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      paddingTop: '47.2%'
    }}
  >
    <div className='absolute left-[5%] top-[30%] flex w-[56%] max-w-[707px] flex-col gap-4 lg:gap-4'>
      <Typography
        tag='h3'
        variant='h3'
        className='w-full whitespace-pre-wrap rounded-[30px] text-base font-bold text-taiga-light 2sm:text-2xl lg:text-4xl xxl:text-[56px] xxl:leading-[70px]'
      >
        {title}
      </Typography>
      <Typography
        tag='p'
        variant='body3'
        className='hidden max-w-[90%] whitespace-pre-wrap text-gray-two 3sm:block 2lg:text-xl'
      >
        {description}
      </Typography>
    </div>
  </div>
);
