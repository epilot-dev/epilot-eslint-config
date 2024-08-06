import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      import: importPlugin,
      prettier: prettierPlugin
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        Promise: 'readonly'
      }
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'import/default': 'off',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          quoteProps: 'as-needed',
          trailingComma: 'none',
          bracketSpacing: true,
          semi: false,
          useTabs: false,
          proseWrap: 'never'
        }
      ]
    }
  }
]
