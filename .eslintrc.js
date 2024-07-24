module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-unused-vars': 'warn', // Изменить уровень на предупреждение
        '@typescript-eslint/no-unused-vars': 'warn', // Изменить уровень на предупреждение для TypeScript
        // Или отключить правила:
        // 'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
