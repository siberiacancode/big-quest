import { usePathname } from 'next/navigation';

import { ORGANIZER_LINKS } from '@/utils/constants';

import { ClosedNavigation } from '../ClosedNavigation/ClosedNavigation';
import { OpenedNavigation } from '../OpenedNavigation/OpenedNavigation';

interface OrganizerNavigationProps {
  isOpen: boolean;
}

export const OrganizerNavigation = ({ isOpen }: OrganizerNavigationProps) => {
  const pathname = usePathname();

  return isOpen ? (
    <OpenedNavigation links={ORGANIZER_LINKS} pathname={pathname} />
  ) : (
    <ClosedNavigation links={ORGANIZER_LINKS} pathname={pathname} />
  );
};
