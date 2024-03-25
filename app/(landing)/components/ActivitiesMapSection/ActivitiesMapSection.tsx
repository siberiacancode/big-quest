'use client';

import { GeoObject, Map, YMaps } from 'react-yandex-maps';

import { activitiesCoordinates } from './constants/activitiesCoordinates';

const DEFAULT_MAP_ZOOM = 9;
const MAP_CENTER = [55.75, 37.57];

export const ActivitiesMapSection = () => (
  <YMaps>
    <div className='w-full'>
      <Map defaultState={{ center: MAP_CENTER, zoom: DEFAULT_MAP_ZOOM }} width='100%'>
        {activitiesCoordinates.map((coordinates, index) => (
          <GeoObject
            key={index}
            geometry={{
              type: 'Circle',
              coordinates
            }}
            options={{
              geodesic: true,
              strokeColor: '#F008',
              strokeWidth: 5
            }}
          />
        ))}
      </Map>
    </div>
  </YMaps>
);
