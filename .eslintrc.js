const { eslint } = require('@siberiacancode/eslint');

module.exports = {
  ...eslint.react,
  extends: [...eslint.react.extends, 'plugin:@next/next/recommended']
};
