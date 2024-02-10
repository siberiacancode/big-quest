import { OrgBreadcrumbs } from 'app/org/components/OrgBreadcrumbs/OrgBreadcrumbs';

const Page = () => {
  return (
    <div>
      <OrgBreadcrumbs idBreadcrumbs={{ organizationId: 'ромашки', testId: 'тест' }} /> organization
    </div>
  );
};

export default Page;
