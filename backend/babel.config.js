module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/config",
          "@ingredient": "./src/services/Ingredient",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
