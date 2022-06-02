<a href="https://epilot.cloud">
  <img src=".github/epilot_logo.svg" alt="Epilot Logo" title="Epilot" align="right" height="50" />
</a>
# @epilot/eslint-config

This packages is a set of eslint rules, recommended for all node.js Projects (including serverless lambda)

ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline. [More Info](https://eslint.org)

This Project is also bundled with [Prettier](https://prettier.io/) in order to ensure company wide Code formatting.

## Usage

```bash
yarn add eslint typescript @epilot/eslint-config-react -D
```

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@epilot/eslint-config"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "@epilot/eslint-config"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: '@epilot/eslint-config'
}
```

## VS Code

Its recommended to install [eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). and configure your settings like

```json
    "eslint.alwaysShowStatus": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },

```

You properly have a Prettier Extension installed. This might cause conflicts with the eslint formatter. I'd recommend to deactivate or uninstall it.

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- node environment
- parser: typescript

## Developer instructions

### Requirements

- node.js (12/14 recommended)
- yarn

### Development

```bash
git clone git@gitlab.com:e-pilot/cookie-cutter/epilot-eslint-config.git
cd epilot-eslint-config
yarn
yarn test
```

other useful scripts

```bash
yarn run
```

or check [package.json](/package.json)

### new Release

Create a Tag on master by one of these scripts

```bash
yarn release
```
