module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  allowParens: 'avoid',
  endOfLine: 'lf',
  printWidth: 140,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  overrides: [
    {
      files: ['**/*.scss'],
      options: { singleQuote: false },
    },
  ],
};
