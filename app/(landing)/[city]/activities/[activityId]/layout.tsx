import { ActivitiesBreadcrumbs } from '../(components)/ActivitiesBreadcrumbs/ActivitiesBreadcrumbs';

interface ActivityLayoutProps {
  children: React.ReactNode;
}

const ActivityLayout = ({ children }: ActivityLayoutProps) => (
  <div className='container px-0 pb-6 md:px-2'>
    <ActivitiesBreadcrumbs />

    {children}
  </div>
);

export default ActivityLayout;
