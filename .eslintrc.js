module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:i18next/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "parserOptions": {
        "project": "./tsconfig.json"
      },
    "rules": {
        "react/jsx-filename-extension": [2,{extensions: ['.js', '.jsx', '.tsx']}],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "react/no-deprecated": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/ban-ts-comment":"off",
        "i18next/no-literal-string: ['error', {markupOnly: true}]"
    }
}
