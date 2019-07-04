module.exports = {
  presets: [
    /** 
     * 关闭自动polyfill检测改为手动引入防止边角情况
     * 此预设已包含@babel/plugin-transform-runtime、@babel/preset-env
     * @vue/babel-preset-app包含以下可用的提案语法：
     * Dynamic Import Syntax
     * Proposal Class Properties
     * Proposal Decorators (legacy)
      */
    ['@vue/babel-preset-app', { useBuiltIns: false }]
  ],
  plugins: [
    // https://github.com/babel/babel/blob/master/packages/babel-preset-stage-0/README.md
  ]
};
