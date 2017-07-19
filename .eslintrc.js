/**
 * ESLint configuration
 * http://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'json'],

  rules: {
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
