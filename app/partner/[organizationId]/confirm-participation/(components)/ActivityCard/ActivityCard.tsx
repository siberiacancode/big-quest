import { Typography } from '@/components/ui';

interface ActivityCardProps {
  id: string;
  name: string;
  category: string;
  participants: number;
  likes: number;
  time: Time;
  avatar?: string;
}

export const ActivityCard = ({
  id,
  name,
  category,
  likes,
  participants,
  time
}: ActivityCardProps) => (
  <div>
    <div>
      <Typography variant='sub4' className='font-bold'>
        {name}
      </Typography>
      <Typography variant='body4' className='text-muted-foreground'>
        {category}
      </Typography>
    </div>
  </div>
);
