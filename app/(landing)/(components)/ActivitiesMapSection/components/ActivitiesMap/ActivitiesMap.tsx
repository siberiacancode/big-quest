'use client';

// import { GeoObject, Map, YMaps, ZoomControl } from '@pbe/react-yandex-maps';
import { Map, YMaps, ZoomControl } from '@pbe/react-yandex-maps';

import type { ActivityListResponse } from '@/api-types';
import { I18nText } from '@/components/common';
import { Typography } from '@/components/ui';
import { CITIES } from '@/utils/constants';

const DEFAULT_MAP_ZOOM = 11;

interface MapProps {
  cityId: (typeof CITIES)[keyof typeof CITIES]['id'];
  activities: ActivityListResponse[];
}

export const ActivitiesMap = ({ cityId }: MapProps) => {
  // const coordinates = activities
  //   .filter((activity) => activity.schedule)
  //   .flatMap((activity) =>
  //     activity.schedule.map((schedule) => [schedule.address.geoLat, schedule.address.geoLon])
  //   );

  return (
    <YMaps>
      <Typography tag='h2' variant='h1' className='text-2xl md:text-[32px]'>
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
        {/* <div className='mt-10 w-full mdx:mt-5'>
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
        </div> */}
        <ZoomControl />
      </Map>
    </YMaps>
  );
};
