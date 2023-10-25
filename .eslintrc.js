module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'prettier/prettier': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
