import Image from 'next/image';
import Link from 'next/link';

import FullLogoIcon from '@/assets/icons/fullLogo.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import { ROUTES } from '@/utils/constants';

interface LogoProps {
  full?: boolean;
}

export const Logo = ({ full = true }: LogoProps) => (
  <Link href={ROUTES.ROOT}>
    {full && <Image src={FullLogoIcon as string} alt='лого' />}
    {!full && <Image src={LogoIcon as string} alt='лого' />}
  </Link>
);
