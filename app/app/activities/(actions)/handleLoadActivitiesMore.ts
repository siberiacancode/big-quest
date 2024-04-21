'use server';

import { getActivityPublic } from '@/utils/api';

export const handleLoadActivitiesMore: typeof getActivityPublic = async (params) =>
  getActivityPublic(params);
