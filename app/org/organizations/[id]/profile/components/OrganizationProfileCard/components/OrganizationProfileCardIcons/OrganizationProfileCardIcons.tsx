import { TelegramIcon, VkIcon, WhatsappIcon } from '@/components/icons/organization';

interface OrganizationProfileCardSocialIconsProps {
  link: string;
}
export const OrganizationProfileCardIcons = ({
  link,
  ...props
}: OrganizationProfileCardSocialIconsProps) => {
  return (
    <>
      {link.includes('vk.com') && <VkIcon className='text-muted-foreground' {...props} />}
      {link.includes('t.me') && <TelegramIcon className='text-muted-foreground' {...props} />}
      {link.includes('wa.') && <WhatsappIcon className='text-muted-foreground' {...props} />}
    </>
  );
};
