import type { RestRequestConfig } from 'mock-config-server';

import { COOKIES } from '@/utils/constants';

export const getOrganizationActivitiesConfig: RestRequestConfig = {
  path: '/organization/:id/activities',
  method: 'get',
  interceptors: {
    response: (data, { request, setStatusCode }) => {
      if (request.cookies[COOKIES.SESSION_ID]) {
        return data;
      }

      setStatusCode(401);
      return { message: 'Unauthorized' };
    }
  },
  routes: [
    {
      entities: {
        params: { id: 1 }
      },
      data: [
        {
          id: '1',
          name: 'Рисуем живопись',
          category: 'Образование',
          participants: 600,
          likes: 210,
          time: { hour: 12, minutes: 0 }
        },
        {
          id: '2',
          name: 'Играем в футбол',
          category: 'Спорт',
          participants: 10,
          likes: 20,
          time: { hour: 19, minutes: 30 }
        }
      ]
    }
  ]
};
