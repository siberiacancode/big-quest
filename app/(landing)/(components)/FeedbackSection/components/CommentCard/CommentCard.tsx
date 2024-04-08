import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { Typography } from '@/components/ui';

export interface CommentCardProps {
  avatar: StaticImageData;
  text: string;
  author: string;
  authorAge: number;
}

export const CommentCard = ({ avatar, text, author, authorAge }: CommentCardProps) => (
  <div className='flex flex-col items-center gap-[22px] rounded-md bg-taiga px-[30px] py-[60px] lgx:px-6 lgx:py-12 mdx:gap-3 mdx:px-4 mdx:py-9'>
    <Image src={avatar} alt='avatar' />
    <Typography variant='h4' className='text-white'>
      {author}
    </Typography>
    <Typography variant='body2' className='text-white'>
      {authorAge}
    </Typography>
    <Typography className='text-center text-xl font-normal text-white mdx:text-lg'>
      {text}
    </Typography>
  </div>
);
