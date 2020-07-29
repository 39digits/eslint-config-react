# ESLint config for React with Prettier and TypeScript support

## Quick-start

### Installation

Either use [install-peerdeps](https://www.npmjs.com/package/install-peerdeps) via _npx_ to install this shareable config and its peer dependencies automatically.

```shell
npx install-peerdeps --dev eslint-config-39digits
```

Or explicitly install everything in one line using _npm_.

```shell
npm install --save-dev eslint babel-eslint eslint-config-39digits eslint-config-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks prettier
```

### Usage

Now create a `.eslintrc.js` configuration file in your project root and add `@39digits/eslint-config-react` to the `extends` field. Add any extra rules you want to use under the `rules` section.

```
{
  "extends": ["@39digits/eslint-config-react"],
  "rules": {
    // ...
  }
}
```

Create a `.prettierrc` configuration file in your project root and populate with your [preferred formatting preferences](https://prettier.io/docs/en/options.html).

My personal preferences are as follows.

```shell
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false
}
```

If you like the Prettier defaults, simply leave the config object empty.

### A note on Prettier usage

My shareable config only uses the ESLint Prettier Config and does not make use of the ESLint Prettier Plugin. This is the recommended method of [integrating Prettier with your linter](https://prettier.io/docs/en/integrating-with-linters.html).

The Prettier Config will turn off any ESLint rules that should only be handled by Prettier itself. This ensures ESlint focuses on checking code quality; Prettier to format it.

Many shareable configs that use the Prettier Plugin will set Prettier preferences as actual linting rules. I don't feel comfortable hiding these settings from the project view and instead rely on an easily discoverable `.prettierrc` configuration file with explicit rules in the project root.

# Enabling Typescript Support

### Installation

I did not include the TypeScript modules in the _peerDependencies_ of `package.json` to avoid npm complaining on projects that won't use TypeScript at all. You will need to install the dependencies manually.

```shell
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

**Note:** Install these packages in addition to the main shareable config packages.

You may also wish to install some types while you're at it - these will change depending on your project's requirements.

```shell
npm install --save-dev @types/react @types/node
```

### Usage

#### Separate Linting for JavaScript and TypeScript files

I prefer using the TypeScript parser and TypeScript linting rules on `*.ts` or `*.tsx` files only. I then leave the JavaScript linting to `babel-eslint`.

To achieve this we can use ESLint's `overrides` feature. This ensures the TypeScript linting rules do not, for example, complain about no return type on a function inside of a `*.js` file.

There is one caveat in that any project specific `rules` do not cascade. Any rules defined in our local `.eslintrc.js` file needs to be replicated within the `overrides` section. I recommend setting any local rules within a variable and then applying that to each section to avoid unnecessary duplication and bugs.

```js
// .eslintrc.js
const commonRules = {
  // Example rule...
  'prefer-const': 'error',
};

module.exports = {
  extends: ['@39digits/eslint-config-react'],
  rules: commonRules,
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['@39digits/eslint-config-react/typescript'],
      rules: commonRules,
    },
  ],
};
```

#### TypeScript All The Things!

Other times you may want to run everything through `@typescript-eslint/parser` and the TypeScript linting rules.

```js
// .eslintrc.js
module.exports = {
  extends: ['@39digits/eslint-config-react/typescript'],
  rules: {
    // ...
  },
};
```

# Setup Visual Studio Code

Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Visual Studio Code extensions.

Add the following to your Visual Studio Code `settings.json` preferences file.

```
{
  // When you save a file it will run any formatters (i.e. Prettier)
  "editor.formatOnSave": true,
  // Ensure the Prettier extension is used as the default formatter
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // This requires a .prettierrc file in the project root.
  // If there is no config file then Prettier will not run.
  // This is useful if you work on projects not (yet) using Prettier
  // to avoid huge commits existing of largely formatting changes
  // Reference: https://github.com/prettier/prettier-vscode#prettierrequireconfig-default-false
  "prettier.requireConfig": true
}
```

Now Prettier will automatically format your code when you save any supported file. ESLint will also now show visual indicators for any code not adhering to your rules.

Happy coding!

## License

[MIT](LICENSE).
