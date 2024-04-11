import type { Metadata } from 'next';

import { getActivityById } from '../constants/actions';

interface ActivityPageProps {
  params: { activityId: string };
}

export const generateMetadata = async ({
  params: { activityId }
}: ActivityPageProps): Promise<Metadata> => {
  const activity = await getActivityById(activityId);
  return {
    title: activity?.title
  };
};

const ActivityPage = async ({ params }: ActivityPageProps) => {
  const activity = await getActivityById(params.activityId);

  return (
    <section className='container h-96'>
      <div className='pt-28'>{activity?.title}</div>
    </section>
  );
};

export default ActivityPage;
