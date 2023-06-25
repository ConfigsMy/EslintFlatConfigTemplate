const typescriptParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const { resolvePathFromProjectRoot } = require('../../utils/pathResolver.cjs');

const typescriptConfig = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    parser: typescriptParser,
    parserOptions: {
      project: resolvePathFromProjectRoot('tsconfig.json'),
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
  },
  rules: {
    ...typescriptEslintPlugin.configs.recommended.rules,
  },
};

module.exports = { typescriptConfig };
