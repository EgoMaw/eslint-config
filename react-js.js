import base from './index.js';
import react from 'eslint-plugin-react';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig(...base, {
    name: '@egomaw/react-js',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
    ...react.configs.flat.recommended,
    languageOptions: {
        ...react.configs.flat.recommended.languageOptions,
        globals: {
            ...globals.serviceworker,
            ...globals.browser,
        },
    },
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
        'eqeqeq': 'error',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        // TypeScript can infer this significantly better than eslint ever can.
        'react/prop-types': 'off',
        'react/display-name': 'off',
        // ignore CSS attribute for CSS-In-JS libraries
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
    },
});
