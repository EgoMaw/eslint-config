import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    {
        name: 'eslint-recommended',
        ...js.configs.recommended,
    },
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
        arrowParens: true,
        blockSpacing: true,
    }),
]);
