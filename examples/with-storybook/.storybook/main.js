const path = require('path');

module.exports = {
  stories: ['../stories/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    /**
     * @see https://github.com/storybookjs/storybook/issues/11639#issuecomment-690369037
     * @see https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
     * @see https://webpack.js.org/configuration/resolve/#resolvemodules
     */
    config.resolve.modules = [path.resolve(__dirname, ".."), 'node_modules'];
    return config;
  },
}
