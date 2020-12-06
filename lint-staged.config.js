module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  './src/**/*.{sass,scss}': ['stylelint --syntax=scss'],
};
