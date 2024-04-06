import base from './index.js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
        files: ['**/*.ts'],
        extends: [
            base,
            ...tseslint.configs.recommendedTypeChecked
        ],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
        }
    },
    {
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
    });
