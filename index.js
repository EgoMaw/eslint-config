import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';

export default {
    ...js.configs.recommended,
    ...eslintConfigPrettier,
    ...prettier,
};
