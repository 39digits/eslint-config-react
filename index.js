module.exports = {
  extends: [
    // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
    'eslint:recommended',
    // https://github.com/benmosher/eslint-plugin-import/blob/master/config/errors.js
    'plugin:import/errors',
    // ===== A Note About Plugins in Extends ==================================
    // Many ESLint plugins provide a "recommended" extend option which usually
    // enables the plugin for us along with a set of good defaults & settings.
    // -------
    //https://github.com/yannickcr/eslint-plugin-react#recommended
    'plugin:react/recommended',
    // https://reactjs.org/docs/hooks-rules.html
    'plugin:react-hooks/recommended',
    // The prettier shareable configs need to come last
    'prettier',
    'prettier/react',
  ],
  rules: {
    // ===== Personal preferences =============================================
    'no-console': 'warn',
    'no-var': 'error', // preference for let and const only
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
  // parserOptions: {
  // ===== eslint-plugin-react =================================================
  // Extending "plugin:react/recommended" sets the JSX ecmaFeatures for us.
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  settings: {
    react: {
      version: 'detect',
    },
    // ===== eslint-plugin-import =================================================
    // The eslint-plugin-import module will automatically parse .jsx file extensions.
    // This is because we use babel-eslint parser by default in our default config
    // (but also because we use the react eslint plugin with recommended settings).
    // So we don't need to explicitly set the 'import/extensions' for React :)
  },
};
