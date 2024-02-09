import Image from 'next/image';

import telegram from '@/assets/images/icons/organization/profile/telegram.png';
import vk from '@/assets/images/icons/organization/profile/vk.png';
import whatsapp from '@/assets/images/icons/organization/profile/whatsapp.png';

interface OrganizationProfileCardSocialIconsProps {
  link: string;
}
export const OrganizationProfileCardIcons = ({
  link,
  ...props
}: OrganizationProfileCardSocialIconsProps) => {
  return (
    <>
      {link.includes('vk.com') && <Image className='h-4 w-4' src={vk} alt={link} {...props} />}
      {link.includes('t.me') && <Image className='h-4 w-4' src={telegram} alt={link} {...props} />}
      {link.includes('wa.') && <Image className='h-4 w-4' src={whatsapp} alt={link} {...props} />}
    </>
  );
};
