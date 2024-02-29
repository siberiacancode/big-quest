import Image from 'next/image';

import background from '@/assets/images/background/activity.png';

export const ActivityImages = () => {
  return (
    <div className='grid w-full grid-cols-2 items-center gap-4 xsx:gap-2'>
      <Image
        className='rounded-lg sm:max-h-64 sm:w-[300px]'
        src={background}
        alt='activity-image-1'
      />
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <Image className='max-h-[125px] rounded-lg' src={background} alt='activity-image-2' />
          <Image
            className='mt-2 max-h-[125px] rounded-lg'
            src={background}
            alt='activity-image-3'
          />
        </div>
        <div>
          <Image className='max-h-[125px] rounded-lg' src={background} alt='activity-image-4' />
          <Image
            className='mt-2 max-h-[125px] rounded-lg'
            src={background}
            alt='activity-image-5'
          />
        </div>
      </div>
    </div>
  );
};
