// @ts-check
"use strict";

const appRootPath = require("app-root-path");
const appRootDir = appRootPath.toString();

/** @type {import("eslint").Linter.ConfigOverride<import("eslint").Linter.RulesRecord>} */
module.exports = {
  // [typescript]
  files: "*.{ts,tsx}",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: appRootDir,
  },
};
