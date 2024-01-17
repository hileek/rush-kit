module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/self-closing-comp': ['error', {
      component: true,
      html: true,
    }],
    'react/jsx-props-no-multi-spaces': ['error'],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': [
      'error',
      {
        code: 140,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    quotes: ['error', 'single'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    semi: ['error', 'always'],
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    'array-bracket-spacing': ['error', 'never'],
  },
};
