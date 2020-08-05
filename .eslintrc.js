module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
    'warn',
    {extensions: ['.ts', 'tsx']}
  ],
  'import/prefer-default-export': 'off',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'react/prop-types': 'off',
  'jsx-a11y/label-has-associated-control': 'off',
  },
};
