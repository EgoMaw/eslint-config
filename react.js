import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import base from "./index.js";
import globals from "globals";

export default tseslint.config(
    ...base,
    ...tseslint.configs.recommendedTypeChecked,
    {
        name: "@egomaw/react",
        files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
        ...react.configs.flat.recommended,
        plugins: {
            react,
            "@typescript-eslint": tseslint.plugin,
        },
        languageOptions: {
            ...react.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
            parserOptions: {
                project: true,
            },
        },
        settings: {
            react: {
                pragma: "React",
                version: "detect",
            },
            linkComponents: [
                { name: "Link", linkAttribute: "to" },
                { name: "NavLink", linkAttribute: "to" },
            ],
        },
        rules: {
            eqeqeq: "error",
            "prettier/prettier": ["error", {}, { usePrettierrc: true }],
            // TypeScript can infer this significantly better than eslint ever can.
            "react/prop-types": "off",
            "react/display-name": "off",
            // ignore CSS attribute for CSS-In-JS libraries
            "react/no-unknown-property": ["error", { ignore: ["css"] }],

            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            // This setup is required to avoid a spam of errors when running eslint about React being
            // used before it is defined.
            //
            // @see https://typescript-eslint.io/rules/no-use-before-define/
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
