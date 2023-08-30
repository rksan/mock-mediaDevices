/** @type {import("eslint").Linter.ConfigOverride<import("eslint").Linter.RulesRecord>} */
module.exports = {
  files: "*.{js,cjs,mjs}",
  env: {
    es2022: true,
    node: true,
    // etc...
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-env"],
    },
  },
};
