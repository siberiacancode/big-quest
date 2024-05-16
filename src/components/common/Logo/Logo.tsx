import Link from 'next/link';

import { FullLogoIcon, LogoIcon } from '@/components/icons';

interface LogoProps extends React.ComponentPropsWithRef<'svg'> {
  full?: boolean;
  href: string;
}

export const Logo = ({ full = true, href, ...props }: LogoProps) => (
  <Link href={href}>
    {full && <FullLogoIcon {...props} />}
    {!full && <LogoIcon {...props} />}
  </Link>
);
