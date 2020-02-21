const url = require('postcss-url');

export default {
  entry: 'src/index.ts',
  doc: {
    title: 'Jingqb-design',
    base: '/',
  },
  esm: 'rollup',
  cjs: 'rollup',
  cssModules: false,
  extraPostCSSPlugins: [
    url({
      url: 'inline',
    }),
  ],
};
