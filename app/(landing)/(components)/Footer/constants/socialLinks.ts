import type { CITIES } from '@/utils/constants';

import type { SOCIAL_ICONS } from './socialIcons';

export const SOCIAL_LINKS: Record<
  keyof typeof CITIES,
  { [key in keyof typeof SOCIAL_ICONS]: string }
> = {
  NOVOSIBIRSK: {
    WHATSAPP: 'https://web.WHATSAPP.com/',
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/'
  },
  TOMSK: {
    WHATSAPP: 'https://web.WHATSAPP.com/',
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/'
  },
  KRASNOYARSK: {
    WHATSAPP: 'https://web.WHATSAPP.com/',
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/'
  },
  OMSK: {
    WHATSAPP: 'https://web.WHATSAPP.com/',
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/'
  },
  KEMEROVO: {
    WHATSAPP: 'https://web.WHATSAPP.com/',
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/'
  },
  NOVOKUZNETSK: {
    WHATSAPP: 'https://web.WHATSAPP.com/',
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/'
  },
  MEZHDURECHENSK: {
    WHATSAPP: 'https://web.WHATSAPP.com/',
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/'
  }
};
