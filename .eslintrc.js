/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    "comma-dangle": ["error", { objects: "only-multiline" }],
  },

  overrides: [
    require("./configs/.eslintrc.typescript"),
    require("./configs/.eslintrc.javascript"),
    require("./configs/.eslintrc.json"),
  ],
};
