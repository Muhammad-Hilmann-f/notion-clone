// eslint.config.mjs
export default [
  {
    ignores: ["eslint.config.mjs", "**/*.d.ts"], // Ignore the ESLint config file itself and declaration files
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.mjs"],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    plugins: ["react", "@typescript-eslint"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Disable rules that might be causing issues
      "react/react-in-jsx-scope": "off", // Not needed in Next.js with React 17+
      "react/prop-types": "off", // Not needed when using TypeScript
      "@typescript-eslint/no-explicit-any": "warn", // Downgrade to warning instead of error
      "@typescript-eslint/no-unused-vars": "warn", // Downgrade to warning
      "@typescript-eslint/explicit-module-boundary-types": "off", // Allow implicit return types
      // Add other custom rules as needed
    },
  },
];
