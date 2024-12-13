import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,

  // Directly include the configurations in the array
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'], // Apply to all relevant files
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax support
        },
      },
      globals: {
        ...globals.browser, // Define global variables for browser environment
      },
    },
  },

  {
    ignores: ['.react-router/**/*.ts'],
  },
];
