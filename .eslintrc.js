module.exports = {
  extends: ['plugin:yola/base', 'plugin:yola/prettier'],
  rules: {
    'yola/import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.spec.js'],
      globals: {
        jest: true,
      },
      rules: {
        'yola/import/no-webpack-loader-syntax': 'off',
        'global-require': 'off',
      },
    },
    {
      files: ['sandbox/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
