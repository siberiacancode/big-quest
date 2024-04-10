'use client';

import { GeoObject, Map, YMaps } from '@pbe/react-yandex-maps';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';

import { activitiesCoordinates } from './constants/activitiesCoordinates';

const DEFAULT_MAP_ZOOM = 9;

const DEFAULT_MAP_CENTER: Record<CITY, number[]> = {
  NOVOSIBIRSK: [55, 83],
  TOMSK: [56.49, 84.94],
  KRASNOYARSK: [56, 92.9],
  OMSK: [55, 73.24],
  KEMEROVO: [55.14, 86.07],
  NOVOKUZNETSK: [53.75, 87.12],
  MEZHDURECHENSK: [53.41, 88]
};

export const ActivitiesMapSection = () => (
  <YMaps>
    <div className='px-16 py-14 mdx:px-11 mdx:py-10 xsx:px-5'>
      <Typography tag='h2' variant='h1' className='xsx:text-[25px]'>
        <I18nText path='landing.activitiesMap.title' />
      </Typography>
      <Map
        className='h-[400px] mdx:h-[300px]'
        state={{ zoom: DEFAULT_MAP_ZOOM, center: DEFAULT_MAP_CENTER.NOVOSIBIRSK }}
      >
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
  </YMaps>
);
