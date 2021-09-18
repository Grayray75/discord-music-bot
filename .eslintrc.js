module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
        indent: [
            'error',
            4
        ],
        quotes: [
            'warn',
            'single'
        ],
        semi: [
            'warn',
            'always'
        ],
        'quote-props': [
            'error',
            'as-needed'
        ]
    }
};
