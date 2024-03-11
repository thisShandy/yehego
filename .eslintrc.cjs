module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": false,
        "endOfLine": "auto"
      }
    ],
    "react/display-name": "off",
    "object-shorthand": ["warn", "always", { "avoidQuotes": true }],
    "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    "jsx-a11y/anchor-is-valid": "off", // Next.js use his own internal link system
    "react/require-default-props": "off", // Allow non-defined react props as undefined
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/naming-convention": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "warn",
    "react/self-closing-comp": [
      "error", {
        "component": true,
        "html": true
      }
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports"
      }
    ],
    "import/no-cycle": "off",
    "consistent-return": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  },
}
