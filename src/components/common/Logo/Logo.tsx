import Link from 'next/link';

import { FullLogoIcon, LogoIcon } from '@/components/icons';
import { ROUTES } from '@/utils/constants';

interface LogoProps {
  full?: boolean;
}

export const Logo = ({ full = true }: LogoProps) => (
  <Link href={ROUTES.ROOT}>
    {full && <FullLogoIcon />}
    {!full && <LogoIcon />}
  </Link>
);
