import tseslint from 'typescript-eslint';
import base from "./index.js";
import react from "eslint-plugin-react";
import reactConf from "eslint-plugin-react/configs/recommended.js";

export default tseslint.config(
    base,
    {
        name: '@egomaw/react-js',
        files: ['**/*.{jsx,mjsx}'],
        ...reactConf,
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
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            // ignore CSS attribute for CSS-In-JS libraries
            'react/no-unknown-property': ['error', { ignore: ['css'] }],
        }
    }
);
