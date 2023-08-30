/** @type {import("eslint").Linter.ConfigOverride<import("eslint").Linter.RulesRecord>} */
module.exports = {
  // [json]
  files: "*.json",
  extends: [
    "eslint:recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:jsonc/prettier",
    "prettier",
  ],
  parser: "jsonc-eslint-parser",
  rules: {
    "jsonc/comma-dangle": ["error", "never"], // JSON.parse() でエラるのでほぼ必須
  },
};
