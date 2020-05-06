module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-knobs/register', '@storybook/addon-docs'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
