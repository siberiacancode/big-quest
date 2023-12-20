import { StorybookConfig } from '@storybook/nextjs/dist';
import * as path from 'path';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../app/**/*.stories.mdx', '../app/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true
      }
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  core: {},
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/.storybook': path.resolve(__dirname, './'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/lib': path.resolve(__dirname, '../src/lib')
      };
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};

export default config;
