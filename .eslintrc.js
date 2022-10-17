module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react-hooks/recommended", "next", "next/core-web-vitals", "prettier"],
  plugins: ["react-hooks", "@typescript-eslint", "prettier"],

  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    // Separate import groups with newline by section
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "unknown"],
        "newlines-between": "always",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/anchor-is-valid": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "prefer-const": 1,
    "newline-before-return": 1,
    "no-useless-return": 1,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-tabindex": 0,
    "prettier/prettier": 0,
    "react/no-unescaped-entities": 0,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
