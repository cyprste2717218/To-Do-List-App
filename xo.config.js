module.exports = {
    extends: [
        'xo-react',
        'plugin:import/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',

    ],
    overrides: [
        {
            files: ['**/*.test.js', 'jest/**', '__mocks__/**'],
            envs: ['browser', 'jest'],
        },
        {
            files: ['__mocks__/**'],
            rules: {'import/no-anonymous-default-export': 'off'},
        },
    ],
    envs: ['browser'],
    rules: {
        'capitalized-comments': 'off',
        camelcase: 'off',
        eqeqeq: ['error', 'smart'],
        indent: 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'import/no-unassigned-import': 'off',
        'import/no-unresolved': 'off',
        'n/file-extension-in-import': 'off',
        'no-unused-vars': ['error', {varsIgnorePattern: 'Moment'}], // Moment interface import is required for JSDoc, should be removed once TS is in place
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'unicorn/filename-case': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/string-content': 'off',
        'unicorn/better-regex': 'off',
        'no-useless-escape': 'off',
        'react/jsx-tag-spacing': 'off',

        /* Rules added after RN 0.70 and XO 0.53 update */
        'import/no-cycle': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-logical-operator-over-ternary': 'off', // this rule will work well only if left side of operator is null or undefined
        'arrow-body-style': 'off',
        'object-shorthand': 'off',
        'unicorn/switch-case-braces': 'off',
        'eslint-comments/no-unused-disable': 'off',
        'unicorn/numeric-separators-style': 'off',
        'unicorn/prefer-native-coercion-functions': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prefer-object-from-entries': 'off',
        'n/prefer-global/process': 'off',
        'react/prop-types': 'off',
        'node/file-extension-in-import': 'off',
        'unicorn/no-await-expression-member': 'warn',
        'unicorn/no-useless-fallback-in-spread': 'warn',

        /** Rules added after RN 0.71 and XO 0.56 update */
        'unicorn/prefer-string-replace-all': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',

        /** 0.72 */
        'prefer-destructuring': 'off',
        'comma-dangle': 'off',
        curly: 'off',
        'jest/no-conditional-expect': 'warn',
        'unicorn/prefer-spread': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-shadow': 'off',
        'n/prefer-promises/fs': 'warn',
        'prettier/prettier': 'off',
        'eslint-comments/disable-enable-pair': 'off',

        'react/function-component-definition': [
            'error',
            {namedComponents: 'arrow-function', unnamedComponents: 'arrow-function'},
        ],
        'valid-jsdoc': [
            1,
            {requireReturn: false, requireParamType: true, requireReturnType: true},
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroups: [
                    {
                        pattern: '^/**',
                        group: 'internal',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                paths: [

                ],
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
    },
    settings: {
        'import/resolver': {},
    },
    globals: ['__DEV__'],
};
