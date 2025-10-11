module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest:true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["@typescript-eslint", "react", "i18next"],
    rules: {
        "react/react-in-jsx-scope": "off", 
        "@typescript-eslint/no-explicit-any": "warn",
        "react/jsx-indent": [2, 4],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        'i18next/no-literal-string': ['error', 
            { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
        'max-len':['warn', {"ignoreComments":true, code: 100}]
    },
    overrides: [
        {
            files:['**/src/**/*.test.{ts,tsx}'],
            rules: { 'i18next/no-literal-string': 'off' }
        }
    ]
};
