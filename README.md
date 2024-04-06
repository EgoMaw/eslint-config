# @egomaw/eslint-config

This package contains my own ESLint configuration files using the FlatConfig format.

## Usage

The default export contains all recommended eslint rules for JavaScript. It requires `eslint`, `@eslint/js`.

1. Install package using your favorite package manager. For example, using `pnpm`:
```sh
pnpm add -D @egomaw/eslint-config
```

2. Import the config to your `.eslint.config.js` file:
```js
import baseConfig from '@egomaw/eslint-config';

export default {
  ...baseConfig,
  // Add your own rules here
};
```


### Vue.js

If your project uses Vue.js 3.x, you can import fom `@egomaw/eslint-config/vue` for Vue specific rules. 

### TypeScript

If your project uses TypeScript, instead import from `@egomaw/eslint-config/typescript`.

### ReactJS

For ReactJS projects that also use **Typescript**, import from `@egomaw/eslint-config/react`.  
If you don't use TypeScript, import from `@egomaw/eslint-config/react-javascript`.
