process.chdir(__dirname);

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        codeFrame: false
    },
    extends: [
        'airbnb-standard',
    ],
    rules: {
        'array-bracket-spacing': 'error',
        'no-plusplus': 'off',
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always'
        }]
    },
};