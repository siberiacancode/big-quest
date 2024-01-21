import React from 'react';
import { HeartHandshakeIcon } from 'lucide-react';

// import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SummaryCardProps {
  title: string;
  info?: string;
  description?: string;
  imageSrc?: string;
  className?: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  className,
  info,
  description
}) => {
  return (
    <Card className={className || ''}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {/* <Image src={imageSrc} alt='Card Image' className='h-4 w-4 text-muted-foreground' /> */}
        <HeartHandshakeIcon />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{info}</div>
        <p className='text-xs text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
