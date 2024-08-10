import type { RestRequestConfig } from 'mock-config-server';

export const postScheduleConfirmConfig: RestRequestConfig = {
  path: '/schedule/confirm',
  method: 'post',
  routes: [
    {
      data: { success: true }
    }
  ]
};
