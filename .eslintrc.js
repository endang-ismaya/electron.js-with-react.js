module.exports = {
  parserOptions: {
    ecmaVersion: '6',
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'google', 'plugin:react/recommended'],
  rules: {
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    'no-console': 'off',
  },
};
