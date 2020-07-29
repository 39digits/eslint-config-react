// Only used for linting this config comprised of simple objects for the most part.
// But I guess this at least makes a base JavaScript-only config available
// at `@39digits/eslint-config-react/javascript` for any projects without React.
// Despite react being in the name 🙄

module.exports = {
  extends: ['eslint:recommended', 'plugin:import/errors', 'prettier'],
  rules: {
    'no-console': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: 'warn',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
