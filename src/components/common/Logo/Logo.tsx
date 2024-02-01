import Link from 'next/link';

import { FullLogoIcon, LogoIcon } from '@/components/icons';
import { ROUTES } from '@/utils/constants';

interface LogoProps {
  full?: boolean;
  fill?: string;
}

export const Logo = ({ full = true, fill }: LogoProps) => (
  <Link href={ROUTES.ORG.ROOT}>
    {full && <FullLogoIcon fill={fill} />}
    {!full && <LogoIcon />}
  </Link>
);
