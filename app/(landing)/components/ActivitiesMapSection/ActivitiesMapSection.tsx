'use client';

import { GeoObject, Map } from '@pbe/react-yandex-maps';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

import { activitiesCoordinates } from './constants/activitiesCoordinates';

const DEFAULT_MAP_STATE = {
  center: [54.98, 82.89],
  zoom: 9
};

export const ActivitiesMapSection = () => (
  <div className='px-16 py-14 mdx:px-11 mdx:py-10 xsx:px-5'>
    <Typography tag='h2' variant='h1' className='xsx:text-[25px]'>
      <I18nText path='landing.activitiesMap.title' />
    </Typography>
    <Map className='h-[400px] mdx:h-[300px]' state={DEFAULT_MAP_STATE}>
      <div className='mt-10 w-full mdx:mt-5'>
        {activitiesCoordinates.map((coordinates, index) => (
          <GeoObject
            key={index}
            geometry={{
              type: 'Circle',
              coordinates
            }}
            options={{
              geodesic: true,
              strokeColor: '#FF4433',
              strokeWidth: 15
            }}
          />
        ))}
      </div>
    </Map>
  </div>
);
