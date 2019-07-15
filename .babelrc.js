const conf = require('./build/config');

/* vue的jsx插件跟react的冲突，需要手动配置 */
/** 
 * vue
 * 关闭自动polyfill检测改为手动引入防止边角情况
 * 此预设已包含@babel/plugin-transform-runtime、@babel/preset-env
 * @vue/babel-preset-app包含以下可用的提案语法：
 * Dynamic Import Syntax
 * Proposal Class Properties
 * Proposal Decorators (legacy)
  */
const vuePreset = [['@vue/babel-preset-app', { useBuiltIns: false }]];

const reactPreset = [['@babel/preset-env', { useBuiltIns: false }], '@babel/preset-react'];

module.exports = {
  presets: 
    conf.v === 'vue' 
      ? vuePreset
      : reactPreset,
  plugins: [
    // https://github.com/babel/babel/blob/master/packages/babel-preset-stage-0/README.md

    [
      // @vue/babel-preset-app里已经包含了，不过为了兼容react配置，礼貌性的引入一下
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel'
  ]
};
