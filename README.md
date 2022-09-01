# eslint-config-scuba-squad
[![Build Status](https://github.com/scub45t3v3/eslint-config-scuba-squad/workflows/CI/badge.svg?event=push)](https://github.com/scub45t3v3/eslint-config-scuba-squad/actions)

## Purpose
Provide a standard shareable extendable ESLint configuration

## Installation
Via [npm](https://www.npmjs.com/)

```
npm install eslint-config-scuba-squad
```

## Usage
install the package in your project and include an `extends` property in your
`.eslintrc` file or other `eslint` configuration file.

  * [ELint Configuration](https://eslint.org/docs/user-guide/configuring)
  * [ESLint Extending Configuration File](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)

```json
{
  "env": {
    "any-env": "you want to override"
  },
  "extends": "scuba-squad",
  "rules": {
    "any-rule": "you want to override"
  }
}
```

## Test
```
npm install
npm test
```