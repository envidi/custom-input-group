import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'public', 'tsconfig.json'] },
  {
    settings: { react: { version: '18.3' } },
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, prettier],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',
      'react/no-unknown-property': ['error', { ignore: ['tw', 'css'] }],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': "off",
      "@typescript-eslint/prefer-promise-reject-errors": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
);
