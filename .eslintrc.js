/**
 * github: https://github.com/Iixianjie/eslint-conf
 * dpendencies:
 *    eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import
 *
 * */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    React: false
  },
  /* 支持最新的es语法 */
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // 缩进为2
    indent: ['error', 2],
    // 只能够使用单引号
    quotes: ['error', 'single'],
    // 使用分号
    semi: ['error', 'always'],
    // 不限制换行符
    'linebreak-style': ['off'],
    // 不限制依赖类型
    'import/no-extraneous-dependencies': 'off',
    // 允许使用console
    'no-console': 'off',

    'no-restricted-syntax': 'off',

    'consistent-return': 'off',

    'global-require': 'off',

    'import/no-dynamic-require': 'off',

    'no-unused-expressions': 'off',

    /* ========== React ========== */

    // 不强制写proptype
    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

  }
};
