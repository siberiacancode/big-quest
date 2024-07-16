import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { Typography } from '@/components/ui';

export interface CommentCardProps {
  avatar: StaticImageData;
  text: string;
  author: string;
}

export const CommentCard = ({ avatar, text, author }: CommentCardProps) => (
  <div className='flex h-full flex-col items-center gap-4 rounded-2xl bg-white px-8 py-12 md:rounded-3xl 2lg:max-w-[360px]'>
    <Image src={avatar} alt='avatar' className='size-28' />
    <Typography variant='h4' className='text-lg font-medium text-gray-one lg:text-xl'>
      {author}
    </Typography>
    <Typography className='mt-1 text-center text-base font-normal text-gray-two lg:text-lg'>
      {text}
    </Typography>
  </div>
);
