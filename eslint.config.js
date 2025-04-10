import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        jsx: true,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptEslint,
      import: eslintImport,
      prettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-console': 'warn',
      'no-debugger': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-undef': 'warn',
      'prettier/prettier': 'error',

      '@next/next/no-img-element': 'off', // temp
      'react/no-unescaped-entities': 'off',
      'no-unused-vars': 'off', // temp
      // '@tanstack/query/exhaustive-deps': 'error',
      // '@tanstack/query/no-rest-destructuring': 'warn',
      // '@tanstack/query/stable-query-client': 'error',

      // 'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',

      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-no-bind': ['off', { ignoreRefs: true }], // temp
      'react/jsx-key': 'warn',
      'react/jsx-no-duplicate-props': 'warn',
      'react/prop-types': 'off',
      'react/no-array-index-key': 'off', // temp
      'react/no-unstable-nested-components': ['warn', { allowAsProps: true }], // temp
      'react/no-danger': 'off', // temp
      'react/no-deprecated': 'warn',
      'react/jsx-no-constructed-context-values': 'warn',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': ['warn', { additionalHooks: '(useQuery|useMutation)' }],

      'react/jsx-curly-brace-presence': ['warn', 'never'],
      'react/react-in-jsx-scope': 'off', // React 17 and above do not need React in scope
      'react/jsx-max-depth': ['off', { max: 3 }], // temp
      'react/jsx-no-comment-textnodes': 'warn',

      'react/require-default-props': 'warn',
      'react/no-render-return-value': 'warn',
      'react/no-unused-prop-types': 'warn',

      'react/sort-comp': [
        'warn',
        {
          order: ['static-methods', 'lifecycle', 'everything-else', 'render', 'render-return'],
        },
      ],

      'react/jsx-pascal-case': 'warn',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-unknown-property': 'warn',
      'react/no-this-in-sfc': 'error',
      'react/jsx-no-literals': 'off',
    },
  },
];
