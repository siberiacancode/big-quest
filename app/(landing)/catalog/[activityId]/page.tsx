import type { Metadata } from 'next';

import { getActivityById } from '@/utils/api';

interface ActivityPageProps {
  params: { activityId: string };
}

export const generateMetadata = async ({
  params: { activityId }
}: ActivityPageProps): Promise<Metadata> => {
  const activity = await getActivityById({ params: { id: activityId } });
  return {
    title: activity.name
  };
};

const ActivityPage = async ({ params }: ActivityPageProps) => {
  const activity = await getActivityById({ params: { id: params.activityId } });

  return (
    <section className='container h-96'>
      <div className='pt-28'>{activity.name}</div>
    </section>
  );
};

export default ActivityPage;
