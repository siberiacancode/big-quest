import { Typography } from '@/components/ui';

export interface CommentCardProps {
  text: string;
  author: string;
  authorAge: number;
}

export const CommentCard = ({ text, author, authorAge }: CommentCardProps) => (
  <div className='flex flex-col items-center gap-[22px] rounded-md bg-taiga px-[30px] py-[60px]'>
    <Typography variant='h4' className='text-white'>
      {author}
    </Typography>
    <Typography variant='body2' className='text-white'>
      {authorAge}
    </Typography>
    <Typography className='text-center text-xl font-normal text-white'>{text}</Typography>
  </div>
);
