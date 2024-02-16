import { OrgBreadcrumbs } from 'app/org/components/OrgBreadcrumbs/OrgBreadcrumbs';

const Page = () => {
  return (
    <div>
      <OrgBreadcrumbs ids={{ organizationId: 'ромашки', testId: 'тест' }} /> organization
    </div>
  );
};

export default Page;
