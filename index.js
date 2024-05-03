import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';

export default {
    name: '@egomaw/index',
    ...js.configs.recommended,
    eslintConfigPrettier,
    prettier,
};
