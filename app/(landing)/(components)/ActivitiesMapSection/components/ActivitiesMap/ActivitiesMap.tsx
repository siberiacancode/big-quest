'use client';

import { GeoObject, Map, YMaps, ZoomControl } from '@pbe/react-yandex-maps';

import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { CITIES } from '@/utils/constants';

const DEFAULT_MAP_ZOOM = 11;

interface MapProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
  activities: ActivityResponse[];
}

export const ActivitiesMap = ({ cityId, activities }: MapProps) => {
  const coordinates = activities
    .filter((activity) => activity.schedule)
    .flatMap((activity) =>
      activity.schedule!.map((schedule) => [schedule.address.geoLat, schedule.address.geoLon])
    );

  return (
    <YMaps>
      <Typography
        tag='h2'
        variant='h1'
        className='text-center text-[36px] mdx:text-3xl mdx:text-[21px]'
      >
        <I18nText path='landing.activitiesMap.title' />
      </Typography>
      <Map
        instanceRef={(ref) => ref && ref.behaviors.disable('scrollZoom')}
        className='mt-[72px] h-[650px] w-full overflow-hidden rounded-[30px] mdx:mt-10 mdx:rounded-none xsx:h-[500px] xxsx:h-[420px]'
        state={{
          zoom: DEFAULT_MAP_ZOOM,
          center: CITIES[cityId.toUpperCase()].map.center as [number, number]
        }}
      >
        <div className=' '>
          {coordinates.map((coordinate, index) => (
            <GeoObject
              key={index}
              geometry={{
                type: 'Circle',
                coordinates: coordinate
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
  );
};
