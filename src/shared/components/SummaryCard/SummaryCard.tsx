import React from 'react';
import { HeartHandshakeIcon, TreePineIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Content {
  info: string;
  description: string;
}

interface SummaryCardProps {
  title: string;
  info?: string;
  description?: string;
  className?: string;
  contents?: Content[];
  titleIcon?: React.ReactNode;
  descriptionIcon?: React.ReactNode;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  className,
  info,
  description,
  contents,
  titleIcon,
  descriptionIcon
}) => {
  return (
    <Card className={`${className || ''} `}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className=' text-base font-medium'>{title}</CardTitle>
        <div className=' rounded-full bg-breadboard p-2'>
          {titleIcon || <HeartHandshakeIcon size={20} strokeWidth={1.5} />}
        </div>
      </CardHeader>
      <CardContent className='flex flex-row justify-between '>
        {contents ? (
          contents.map((content, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              {/* Тут key нужно исправить на uuid или content.id, какой-нибудь, но пока не ясно, будет ли эта фича вообше, поэтому лишнюю зависимость не хочу тянуть */}
              <div className='text-3xl font-bold'>{content.info}</div>
              <p className='text-xs text-muted-foreground'>{content.description}</p>
            </div>
          ))
        ) : (
          <div>
            <div className='text-3xl font-bold'>{info}</div>
            <div className='flex flex-row'>
              <div className=' mr-2 mt-1'>{descriptionIcon || <TreePineIcon size={14} />}</div>
              <p className='text-xs text-muted-foreground'>{description}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
