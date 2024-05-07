import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";
import typescriptBase from "./typescript.js";

export default tseslint.config(
    ...typescriptBase,
    ...pluginVue.configs['flat/recommended'],
    {
        name: '@egomaw/vue',
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                project: true,
                extraFileExtensions: ['.vue'],
                parser: tseslint.parser,
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/max-attributes-per-line': 'off',
            'vue/html-self-closing': 'off',
            'vue/html-indent': ['warn', 4, { baseIndent: 1 }],
            'vue/script-indent': ['warn', 4, { baseIndent: 1 }],
            indent: 'off',
            'prettier/prettier': [
                'warn',
                {
                    parser: 'vue',
                    vueIndentScriptAndStyle: true,
                },
                { usePrettierrc: true },
            ],
        },
    }
);
