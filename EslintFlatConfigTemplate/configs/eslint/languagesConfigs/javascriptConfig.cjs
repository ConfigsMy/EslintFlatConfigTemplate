const eslintJsPlugin = require('@eslint/js');
const globals = require('globals');

const javascriptConfig = {
  files: ['**/*.{js,cjs,mjs}'],
  rules: {
    ...eslintJsPlugin.configs.recommended.rules,
  },
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
};

module.exports = { javascriptConfig };
