import { Typography } from '@/components/ui';

export interface NewsCardProps {
  image: string;
  title: string;
  description: string;
}

export const NewsCard = ({ image, description, title }: NewsCardProps) => (
  <div
    className='relative flex flex-grow flex-col justify-center overflow-hidden rounded-[30px] mdx:rounded-[16px] 3smx:px-4 2smx:rounded-[16px]'
    style={{
      backgroundImage: `url(/background/news/${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      paddingTop: '47.2%'
    }}
  >
    <div className='absolute left-[5%] top-[30%] flex w-[56%] max-w-[707px] flex-col gap-8 2lgx:gap-4 lgx:w-[55%] 2mdx:w-[50%] mdx:w-[55%] mdx:gap-2'>
      <Typography
        tag='h3'
        variant='h3'
        className='w-full whitespace-pre-wrap rounded-[30px] text-[56px] font-bold leading-[70px] text-taiga-light 2xlx:text-4xl 2mdx:text-3xl smx:text-2xl 2xsx:text-xl xsx:text-base xxsx:text-sm'
      >
        {title}
      </Typography>
      <Typography
        tag='p'
        variant='h4'
        className='max-w-[80%] whitespace-pre-wrap font-normal text-gray-two xxlx:text-xl 2lgx:text-lg 3mdx:text-sm 2mdx:max-w-[90%] 3smx:hidden'
      >
        {description}
      </Typography>
    </div>
  </div>
);
