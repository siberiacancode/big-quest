import React from 'react';
import { HeartHandshakeIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/lib/utils';

import { InfoCardItem, type InfoCardItemProps } from './components/InfoCardItem';

interface InfoCardProps extends InfoCardItemProps {
  title: string;
  contents?: InfoCardItemProps[];
  titleIcon?: React.ReactNode;
}

export const InfoCard = ({
  title,
  className,
  contents,
  titleIcon,
  descriptionIcon,
  info,
  description
}: InfoCardProps) => {
  return (
    <Card className={cn('', className)}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-medium'>{title}</CardTitle>
        <div className='rounded-full bg-breadboard p-2'>
          {titleIcon || <HeartHandshakeIcon size={20} strokeWidth={1.5} />}
        </div>
      </CardHeader>
      <CardContent className='flex flex-row justify-between'>
        {contents ? (
          contents.map((content) => <InfoCardItem key={content.id} {...content} />)
        ) : (
          <InfoCardItem
            info={info}
            description={description}
            descriptionIcon={descriptionIcon}
            className='pl-0'
          />
        )}
      </CardContent>
    </Card>
  );
};
