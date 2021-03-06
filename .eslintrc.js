module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  },
  rules: {
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": 0,
  }
};
