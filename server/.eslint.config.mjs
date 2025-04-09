import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import eslintImport from 'eslint-plugin-import';
import globals from 'globals';

export default {
  parser: tsParser,
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: {
    '@typescript-eslint': typescriptEslint,
    import: eslintImport,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-console': 'warn',
    'no-debugger': 'error',
  },
};
