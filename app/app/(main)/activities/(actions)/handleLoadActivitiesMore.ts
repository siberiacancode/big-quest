'use server';

import { getActivity } from '@/utils/api';

export const handleLoadActivitiesMore: typeof getActivity = async (params) => getActivity(params);
