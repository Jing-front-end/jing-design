export default {
  plugins: [
    [
      'umi-plugin-library',
      {
        entry: 'src/index.ts',
        esm: 'rollup',
        cjs: 'rollup',
        cssModules: false,
      },
    ],
  ],
};
