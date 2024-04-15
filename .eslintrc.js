module.exports = {
  env: { // окружение
    browser: true, // браузерное окружение
    node: true, // окружение node.js
    es2023: true, // стандарт ECMAScript 2023 (ES14)
  },
  extends: 'airbnb-base', // Airbnb JavaScript Style Guide
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off', // избавляет от warning 'no-console'
  },
};
