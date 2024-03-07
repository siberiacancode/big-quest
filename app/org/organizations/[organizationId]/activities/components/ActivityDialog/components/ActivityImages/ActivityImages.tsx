import Image from 'next/image';

import background from '@/assets/images/background/activity.png';
import { useI18n } from '@/utils/contexts';

interface ActivityImagesProps {
  name: string;
}

export const ActivityImages = ({ name }: ActivityImagesProps) => {
  const i18n = useI18n();

  return (
    <div className='grid w-full grid-cols-2 items-center gap-4 xsx:gap-2'>
      <Image
        className='rounded-lg sm:max-h-64 sm:w-[300px]'
        src={background}
        alt='activity-image-1'
      />
      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        {Array.from({ length: 4 }, (_, index) => (
          <Image
            key={index}
            className='max-h-[125px] rounded-lg'
            src={background}
            alt={i18n.formatMessage({ id: `activity.image.alt` }, { name })}
          />
        ))}
      </div>
    </div>
  );
};
