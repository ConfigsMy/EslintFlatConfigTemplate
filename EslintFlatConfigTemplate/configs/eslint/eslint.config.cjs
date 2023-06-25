const { javascriptConfig } = require('./languagesConfigs/javascriptConfig.cjs');
const { typescriptConfig } = require('./languagesConfigs/typescriptConfig.cjs');

const eslintConfig = [
  {
    ignores: ['dist/', 'build', 'node_modules/'],
  },
  javascriptConfig,
  typescriptConfig,
];

module.exports = eslintConfig;
