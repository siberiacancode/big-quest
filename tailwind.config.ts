import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans]
    },

    screens: {
      '4xlx': { max: '2560px' },
      '3xlx': { max: '1750px' },
      '2xlx': { max: '1400px' },
      xlx: { max: '1280px' },
      '2lgx': { max: '1124px' },
      lgx: { max: '1023px' },
      '2mdx': { max: '900px' },
      mdx: { max: '768px' },
      '2smx': { max: '600px' },
      smx: { max: '639px' },
      '2xsx': { max: '560px' },
      '2xs': { min: '560px' },
      xsx: { max: '475px' },
      xxsx: { max: '375px' },
      xxs: { min: '375px' },
      xs: { min: '475px' },
      sm: { min: '640px' },
      '2sm': { min: '600px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      '2lg': { min: '1124px' },
      xl: { min: '1280px' },
      '2xl': { min: '1400px' },
      '3xl': { min: '1750px' },
      '4xl': { min: '2560px' }
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      boxShadow: {
        grey: '0px -2px 32px 0px #3333331F'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: { DEFAULT: 'hsl(var(--input))', foreground: 'hsl(var(--input-bg))' },
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        placeholder: 'hsl(var(--placeholder))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        gray: {
          two: 'hsl(var(--gray-two))',
          light: 'hsl(var(--gray-light))'
        },
        taiga: { DEFAULT: 'hsl(var(--taiga-light))', foreground: 'hsl(var(--taiga-dark))' },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        tabsBackground: 'hsl(var(--tabs-background))',
        tabsText: 'hsl(var(--tabs-text))',
        dropzoneBorder: 'hsl(var(--dropzone-border))'
      },
      backgroundColor: {
        taiga: { DEFAULT: 'hsl(var(--taiga-light))', foreground: 'hsl(var(--taiga-dark))' }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      transitionProperty: {
        width: 'width'
      },
      padding: {
        '1/2': '50%',
        full: '100%'
      }
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
