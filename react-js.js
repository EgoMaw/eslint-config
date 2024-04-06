import tseslint from 'typescript-eslint';
import base from "./index.js";
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(
    {
        files: ['**/*.{jsx,mjsx}'],
        extends: [
            base
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
        }
    }
);
