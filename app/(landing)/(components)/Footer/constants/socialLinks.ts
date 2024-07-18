import type { CITIES } from '@/utils/constants';

import type { SOCIAL_ICONS } from './socialIcons';

export const SOCIAL_LINKS: Record<
  keyof typeof CITIES,
  { [key in keyof typeof SOCIAL_ICONS]: string }
> = {
  KEMEROVO: {
    WHATSAPP:
      'https://api.whatsapp.com/send/?phone=79240779242&text&type=phone_number&app_absent=0',
    VK: 'https://vk.com/bigquest_kuzbass',
    TELEGRAM: 'https://t.me/bqkeshi_bot'
  },
  NOVOKUZNETSK: {
    WHATSAPP:
      'https://api.whatsapp.com/send/?phone=79240779242&text&type=phone_number&app_absent=0',
    VK: 'https://vk.com/bigquest_kuzbass',
    TELEGRAM: 'https://t.me/bqkeshi_bot'
  },
  MEZHDURECHENSK: {
    WHATSAPP:
      'https://api.whatsapp.com/send/?phone=79240779242&text&type=phone_number&app_absent=0',
    VK: 'https://vk.com/bigquest_kuzbass',
    TELEGRAM: 'https://t.me/bqkeshi_bot'
  }
};
