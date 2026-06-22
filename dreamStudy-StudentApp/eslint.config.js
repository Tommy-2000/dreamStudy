// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfigLint = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const presstoPlugin = require('eslint-plugin-pressto');

const eslintConfig = defineConfig([
  expoConfigLint, // Add Expo Flat linting rules
  eslintPluginPrettierRecommended.configs.recommended, // Add ESLint Prettier linting rules
  {
    plugins: {
      pressto: presstoPlugin
    },
    rules: {
      'pressto/require-worklet-directive': 'error'
    },
    ignores: [
      '.expo/*',
      'dist/*',
      'node_modules/*',
      'ios/*',
      'android/*',
      'bin/*',
      'build/*'
    ]
  }
]);

module.exports = eslintConfig;
