module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'linebreak-style': 0,
        'max-len': 'off', // disables line length check
        'no-tabs': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
