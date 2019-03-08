const url = require('postcss-url');

export default {
  entry: 'src/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  cssModules: false,
  extraPostCSSPlugins: [
    url({
      url: 'inline',
    }),
  ],
};
