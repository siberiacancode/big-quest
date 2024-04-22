import Image from 'next/image';

import portrait from '@/assets/images/landing/news/portrait.png';
import { Typography } from '@/components/ui';

export interface NewsCardProps {
  title: string;
  description: string;
}

export const NewsCard = ({ description, title }: NewsCardProps) => (
  <div
    className='relative ml-0 flex h-[650px] flex-grow flex-col justify-center rounded-[30px] px-12 3smx:h-[900px] 3smx:items-center 3smx:justify-between xsx:h-[480px]'
    style={{
      backgroundImage: 'url(/background/news.png)'
    }}
  >
    <Image
      src={portrait}
      alt='portrait'
      className='z-3 absolute bottom-0 right-0 h-full rounded-r-[30px] 2mdx:size-2/3 3smx:hidden'
    />
    <div className='z-5 absolute w-[60%] max-w-[707px] xlx:w-[50%] lgx:w-[45%] 3smx:relative 3smx:w-full 3smx:pt-8 3smx:text-center'>
      <Typography
        tag='h3'
        variant='h3'
        className='rounded-[30px] bg-taiga-light px-6 py-4 text-[56px] font-bold leading-[70px] text-white xlx:text-[50px] lgx:text-4xl smx:text-xl'
      >
        {title}
      </Typography>
      <Typography
        tag='p'
        variant='h4'
        className='ml-6 mt-8 max-w-[578px] font-normal text-gray-two'
      >
        {description}
      </Typography>
    </div>
    <Image
      src={portrait}
      alt='portrait'
      className='absolute bottom-0 right-0 w-full rounded-r-[30px] 3sm:hidden'
    />
  </div>
);
// поменять цвет зеленый
// доделать адаптив мобилки
