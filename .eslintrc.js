const { eslint } = require('@siberiacancode/eslint');

module.exports = {
  ...eslint.react,
  extends: [...eslint.react.extends, 'plugin:@next/next/recommended'],
  overrides: [
    ...eslint.react.overrides,
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname
      },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-restricted-syntax': 'off',
        'promise/always-return': 'off',
        'no-await-in-loop': 'off',
        'no-continue': 'off',
        'promise/catch-or-return': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/naming-convention': 'warn',
        'no-underscore-dangle': 'warn',
        'no-bitwise': 'warn',
        'jsx-a11y/media-has-caption': 'warn'
      }
    }
  ]
};
