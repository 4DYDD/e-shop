import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Nonaktifkan semua aturan
      ...Object.keys(js.configs.recommended.rules).reduce((acc, rule) => {
        acc[rule] = "off";
        return acc;
      }, {}),
      ...Object.keys(react.configs.recommended.rules).reduce((acc, rule) => {
        acc[rule] = "off";
        return acc;
      }, {}),
    },
  },
];
