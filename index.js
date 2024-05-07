import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        name: 'eslint-recommended',
        ...js.configs.recommended
    },
    {
    name: 'prettier',
    ...prettier,
});
