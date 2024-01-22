import { DesktopLayout } from './components/DesktopLayout';
import { MobileLayout } from './components/MobileLayout';

const OrgLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <MobileLayout>{children}</MobileLayout>
    <DesktopLayout>{children}</DesktopLayout>
  </>
);

export default OrgLayout;
