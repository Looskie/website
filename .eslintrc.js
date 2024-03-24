module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "xo",
    "xo-typescript",
    "xo-react",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Next.js
    "@typescript-eslint/triple-slash-reference": "off",
    "react/react-in-jsx-scope": "off",

    "no-tabs": ["error"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],

    /* must be a space for object curly spacing */
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

    // this rule helped me like once (2 years ago)
    "react-hooks/exhaustive-deps": "off",

    // Prettier
    "@typescript-eslint/comma-dangle": "off",
    "react/function-component-definition": "off",
    "react/jsx-tag-spacing": "off",
    "react/no-unescaped-entities": "off",
    "no-mixed-operators": "off",
    "operator-linebreak": "off",
    "@typescript-eslint/naming-convention": "off",
    "quote-props": "off",
    "@typescript-eslint/quotes": "off",
    "react/jsx-curly-newline": "off",
    "@typescript-eslint/indent": "off",
    "jsx-quotes": "off",
    "arrow-parens": ["error", "always"],
    "react/prefer-read-only-props": "off",
    "@typescript-eslint/ban-types": "off",
    radix: "off",
  },
};
