import base from "./index.js";
import tseslint from "typescript-eslint";

export default tseslint.config(
    ...base,
    {
        name: "@egomaw/typescript",
        files: ["**/*.ts"],
        ...tseslint.configs.recommendedTypeChecked,
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
            },
        },
        rules: {
            ...tseslint.configs.recommendedTypeChecked.rules,
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": "warn",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    args: "all",
                    argsIgnorePattern: "^_",
                    caughtErrors: "all",
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
            "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
        },
    },
    {
        name: "@egomaw/typescript-js-exclusion",
        files: ["**/*.{js,mjs,cjs,jsx,mjsx}"],
        ...tseslint.configs.disableTypeChecked,
        rules: {
            ...tseslint.configs.disableTypeChecked.rules,
            // turn off other type-aware rules
            "deprecation/deprecation": "off",
            "@typescript-eslint/internal/no-poorly-typed-ts-props": "off",

            // turn off rules that don't apply to JS code
            "@typescript-eslint/explicit-function-return-type": "off",
        },
    },
);
