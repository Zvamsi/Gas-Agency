import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import parserBabel from "@babel/eslint-parser"; // ✅ Add Babel parser

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["src/**/*.{js,mjs,cjs,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parser: parserBabel, // ✅ Use Babel parser to handle JSX & modern JS
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },

    plugins: {
      js: pluginJs,
      react: pluginReact,
    },

    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "react/react-in-jsx-scope": "off",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // // Extending recommended configurations
  // ...pluginJs.configs.recommended,
  // ...pluginReact.configs.recommended,
];
