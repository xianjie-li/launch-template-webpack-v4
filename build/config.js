const path = require('path');

/* 所有配置项在模板中都是可访问的 */
module.exports = {
  v: 'react', // 用于区分babel配置，可选值['vue', 'react]
  publicPath: './', // 资源访问路径
  publicDirName: 'public', // 集中存放静态资源的目录名
  gizp: true,
  analyzer: true, // 包分析
  hash: true, // 文件hash
  htmlAssetsHash: false, // 打包时给html的引用资源打上hash
  dropConsole: true, // 移除console
  sassOption: {
    // data: '@import "@/style/_base/index.scss";',
    precision: 3
  },
  proxy: {},
  extensions: ['.js', '.jsx', '.vue'],
  alias: {
    '@': path.resolve(__dirname, '../src'),
    // vue: 'vue/dist/vue.js'  // 当需要在html中使用vue模板语法时，使用带编译器的vue
  },

  page: {
    loadAll: true, // 是否使用所有匹配到的页面作为入口，当页面过多时建议关闭以提升性能
    pageList: [] // loadAll为false时，手动指定需要作为入口的文件(不带后缀)
  },

  env: {
    dev: {
      BASE_URL: '/api/dev'
    },
    prod: {
      BASE_URL: '/api/prod'
    },
  },
};
