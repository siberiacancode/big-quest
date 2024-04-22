import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { Typography } from '@/components/ui';

export interface CommentCardProps {
  avatar: StaticImageData;
  text: string;
  author: string;
}

export const CommentCard = ({ avatar, text, author }: CommentCardProps) => (
  <div className='flex min-h-[469px] flex-col items-center gap-[22px] rounded-[30px] bg-white px-8 py-12 pb-[72px] lgx:px-6 lgx:pt-12 mdx:gap-3 mdx:px-4 mdx:pt-9'>
    <Image src={avatar} alt='avatar' className='size-[124px]' />
    <Typography variant='h4' className='text-primary'>
      {author}
    </Typography>
    <Typography className='text-center text-xl font-normal text-gray-two mdx:text-lg'>
      {text}
    </Typography>
  </div>
);
