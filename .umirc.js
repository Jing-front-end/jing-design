const url = require('postcss-url');

export default {
  plugins: [
    [
      'umi-plugin-library',
      {
        entry: 'src/index.ts',
        esm: 'rollup',
        cjs: 'rollup',
        cssModules: false,
        extraPostCSSPlugins: [
          url({
            url: 'inline',
          }),
        ],
      },
    ],
  ],
};
