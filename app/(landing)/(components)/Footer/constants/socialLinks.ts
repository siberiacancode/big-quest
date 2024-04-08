import type { CITIES } from '@/utils/constants';

import type { SOCIAL_ICONS } from './socialIcons';

export const SOCIAL_LINKS: Record<
  keyof typeof CITIES,
  { [key in keyof typeof SOCIAL_ICONS]: string }
> = {
  NOVOSIBIRSK: {
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/',
    WHATSAPP: 'https://web.WHATSAPP.com/'
  },
  TOMSK: {
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/',
    WHATSAPP: 'https://web.WHATSAPP.com/'
  },
  KRASNOYARSK: {
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/',
    WHATSAPP: 'https://web.WHATSAPP.com/'
  },
  OMSK: {
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/',
    WHATSAPP: 'https://web.WHATSAPP.com/'
  },
  KEMEROVO: {
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/',
    WHATSAPP: 'https://web.WHATSAPP.com/'
  },
  NOVOKUZNETSK: {
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/',
    WHATSAPP: 'https://web.WHATSAPP.com/'
  },
  MEZHDURECHENSK: {
    VK: 'https://VK.com/',
    TELEGRAM: 'https://web.TELEGRAM.org/',
    WHATSAPP: 'https://web.WHATSAPP.com/'
  }
};
