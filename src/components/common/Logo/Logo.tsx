import Link from 'next/link';

import { FullLogoIcon, LogoIcon } from '@/components/icons';
import { ROUTES } from '@/utils/constants';

interface LogoProps {
  full?: boolean;
  color?: string;
}

export const Logo = ({ full = true, color }: LogoProps) => (
  <Link href={ROUTES.ORG.ROOT}>
    {full && <FullLogoIcon color={color} />}
    {!full && <LogoIcon color={color} />}
  </Link>
);
