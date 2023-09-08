module.exports = {
  extends: "@istanbuljs/nyc-config-typescript",
  all: true,
  reporter: ["text"],
  extension: [".js", ".cjs", ".mjs", ".ts"],
  include: ["src/*"],
  exclude: ["src/types/*", "**/*.spec.*"],
};
