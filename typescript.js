import base from './index.js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
        name: '@egomaw/typescript',
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
        name: '@egomaw/typescript-js-exclusion',
        files: ['**/*.js'],
        extends: [tseslint.configs.disableTypeChecked],
        rules: {
            // turn off other type-aware rules
            'deprecation/deprecation': 'off',
            '@typescript-eslint/internal/no-poorly-typed-ts-props': 'off',

            // turn off rules that don't apply to JS code
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    });
