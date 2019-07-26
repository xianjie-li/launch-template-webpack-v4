const path = require('path');
const webpack = require('webpack');
const util = require('./utils/util');
const log = require('./utils/log');
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const getModules = require('./utils/util').getModules;
const conf = require('./config');

module.exports = ({ NODE_ENV, ...env }) => {
  /* 配置环境变量 */
  log.log(` 当前环境: ${chalk.cyan(NODE_ENV)}`);
  let envDefine = conf.env[NODE_ENV];
  for (let key of Object.keys(envDefine)) {
    envDefine[key] = JSON.stringify(envDefine[key]);
  }

  const devMode = NODE_ENV === 'dev';

  let entryInfos = util.getEntrys();

  /* 当载入全部入口被关闭时，过滤掉不被pageList包含的入口文件
   * 过滤条件: loadAll为falsy且pageList长度大于0 */
  if (conf.page && !conf.page.loadAll && conf.page.pageList.length) {
    // 剔除掉不被包含的入口和模板文件
    for (let [key] of Object.entries(entryInfos.entrys)) {

      if (!conf.page.pageList.includes(key)) {
        delete entryInfos.entrys[key];
      }
    }

    entryInfos.template = entryInfos.template.filter(v => {
      let filename = path.basename(v.template).split('.')[0];
      return conf.page.pageList.includes(filename);
    });
  }

  /* html-plugin配置 */
  let htmlPlugins = entryInfos.template.map(v => {
    return new HtmlWebpackPlugin({
      filename: `${v.title}.html`,
      template: v.template,
      minify: false,
      hash: conf.htmlAssetsHash,
      cache: false,
      chunks: ['runtime', 'vendor', 'common', v.title],
      templateParameters: {
        ...conf,
        title: v.title,
        /* 开发环境publicPath直接设置为空，页面中通过#{public}/来匹配public目录的内容 */
        public: devMode ? '' : conf.publicPath + conf.publicDirName,
        page: v.pageInfo
      }
    });
  });

  let config = {
    context: path.resolve(__dirname),
    entry: entryInfos.entrys,

    resolve: {
      extensions: conf.extensions,
      alias: conf.alias
    },

    module: getModules(devMode, MiniCssExtractPlugin),

    plugins: [
      /* 在两个pack(lodash+vue)的情况下测试，提升不到100毫秒，先去掉 */
      // new webpack.DllReferencePlugin({
      //   context: path.join(__dirname, "..", "dll"),
      //   manifest: require("../dll/manifest.json")
      // }),
      ...htmlPlugins,
      new VueLoaderPlugin(),
      new HappyPack({
        loaders: [`babel-loader${devMode ? '?cacheDirectory' : ''}`]
      }),
      new webpack.ProgressPlugin(),
      new webpack.DefinePlugin(envDefine),
      /* moment精简，考虑使用dayjs */
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
    ]
  };

  if (!devMode) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: `${conf.publicDirName}/css/[name]${
          conf.hash ? '.[contenthash]' : ''
        }.css`
      })
    );
  }

  return config;
};
