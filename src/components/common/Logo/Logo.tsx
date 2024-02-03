import Link from 'next/link';

import { FullLogoIcon, LogoIcon } from '@/components/icons';
import { ROUTES } from '@/utils/constants';

interface LogoProps extends React.ComponentPropsWithRef<'svg'> {
  full?: boolean;
}

export const Logo = ({ full = true, ...props }: LogoProps) => (
  <Link href={ROUTES.ORG.ROOT}>
    {full && <FullLogoIcon {...props} />}
    {!full && <LogoIcon {...props} />}
  </Link>
);
