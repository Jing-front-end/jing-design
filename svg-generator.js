// eslint-disable-next-line import/no-extraneous-dependencies
const generator = require('typescript-react-svg-icon-generator');

const config = {
  svgDir: './assets/icon/svg/',
  destination: './src/Icon/Icon/index_todo.tsx',
};
generator(config);
