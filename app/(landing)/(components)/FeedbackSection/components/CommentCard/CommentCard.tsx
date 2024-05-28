import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { Typography } from '@/components/ui';

export interface CommentCardProps {
  avatar: StaticImageData;
  text: string;
  author: string;
}

export const CommentCard = ({ avatar, text, author }: CommentCardProps) => (
  <div className='flex h-full flex-col items-center gap-4 rounded-2xl bg-white px-8 pt-12 md:rounded-3xl'>
    <Image src={avatar} alt='avatar' className='size-32' />
    <Typography variant='h4' className='text-lg text-primary lg:text-xl'>
      {author}
    </Typography>
    <Typography className='mt-3 text-center text-base font-normal text-gray-two lg:text-xl'>
      {text}
    </Typography>
  </div>
);
