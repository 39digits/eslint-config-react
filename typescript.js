module.exports = {
  // Extending with the typescript-eslint/recommended option will
  // actually enable the parser as well as the eslint plugin for us.
  // It also sets the sourceType to module for us. We keep it all here
  // to be more explicit about the type of parser being used without
  // requiring the user to dig too deeply to find out.
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    './index.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    // 'prettier/react', // Is this required here as set in index.js already?
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 'off', // Using TypeScript, so no need for PropTypes
  },
};
