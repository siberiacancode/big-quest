'use client';

import { GeoObject, Map, YMaps, ZoomControl } from '@pbe/react-yandex-maps';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { CITIES } from '@/utils/constants';

import { activitiesCoordinates } from './constants/activitiesCoordinates';

const DEFAULT_MAP_ZOOM = 11;

interface ActivitiesMapSectionProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
}

export const ActivitiesMapSection = ({ cityId }: ActivitiesMapSectionProps) => (
  <section className='container py-10'>
    <YMaps>
      <Typography tag='h2' variant='h1' className='xsx:text-[25px]'>
        <I18nText path='landing.activitiesMap.title' />
      </Typography>
      <Map
        instanceRef={(ref) => ref && ref.behaviors.disable('scrollZoom')}
        className='h-[500px] w-full'
        state={{
          zoom: DEFAULT_MAP_ZOOM,
          center: CITIES[cityId.toUpperCase()].map.center as [number, number]
        }}
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
        <ZoomControl />
      </Map>
    </YMaps>
  </section>
);
