import tseslint from 'typescript-eslint';
import typescriptBase from "./typescript.js";
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(
    {
        files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
        extends: [
            ...typescriptBase
        ],
        ...reactPlugin.configs.recommended,
        settings: {
            react: {
                pragma: 'React',
                version: 'detect',
            },
            linkComponents: [
                { name: 'Link', linkAttribute: 'to' },
                { name: 'NavLink', linkAttribute: 'to' },
            ],
        },
        rules: {
            eqeqeq: 'error',
            'prettier/prettier': ['error', {}, { usePrettierrc: true }],
            // TypeScript can infer this significantly better than eslint ever can.
            'react/prop-types': 'off',
            'react/display-name': 'off',
            // ignore CSS attribute for CSS-In-JS libraries
            'react/no-unknown-property': ['error', { ignore: ['css'] }],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            // This setup is required to avoid a spam of errors when running eslint about React being
            // used before it is defined.
            //
            // @see https://typescript-eslint.io/rules/no-use-before-define/
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
        }
    }
);
