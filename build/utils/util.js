const path = require('path');
const utils = require('@lxjx/utils');
const glob = require('glob');
const log = require('./log');
const conf = require('../config');
const pugFilters = require('./pugFilters');

/**
 *  1. 捕获page第一级目录下的文件夹内的(j|t)s作为webpack入口
 *  2. 入口文件同目录下的pageInfo作为额外信息注入模板文件中
 *  3. 对于不想被匹配的文件，可以放到更深一级的目录或以 _ 作为前缀 */
exports.getEntrys = () => {
  try {
    const entrys = glob.sync(
      path.resolve(__dirname, '../../src/page/', '**/!(_|pageInfo)*.{j,t}s'),
    );

    if (utils.isArray(entrys) && entrys.length > 0) {
      const formatEntry = {}; // 存放entry信息
      const template = []; // 存放模板信息

      entrys.forEach((v) => {
        const baseName = path.basename(v).replace(/\.(js|ts)/, '');
        const dirName = path.dirname(v);

        // 查找入口js所属路径下的模板文件(pug|html)
        const tpl = glob.sync(`${path.resolve(dirName)}*/*.{pug,html}`);
        // 该目录下的pageInfo.js文件作为额外信息注入模板
        let pageInfo = glob.sync(`${path.resolve(dirName)}*/pageInfo.{j,t}s`);

        if (pageInfo.length) {
          pageInfo = require(pageInfo[0]);
        }

        formatEntry[baseName] = v;

        // 放进模板列表
        tpl[0]
        && template.push({
          title: baseName,
          template: tpl[0],
          pageInfo,
        });
      });

      return {
        entrys: formatEntry,
        template,
      };
    }

    throw Error('没有找到任何入口文件!');
  } catch (err) {
    log.error(err);
  }
};

/* 传入环境变量、输出目录名，返回file-loader option */
exports.fileLoaderOption = (env, dirName, hash) => ({
  loader: 'file-loader',
  options: {
    name:
        env === 'dev'
          ? '[name].[ext]'
          : `[name]${hash ? '.[hash:7]' : ''}.[ext]`,
    outputPath: dirName, // 输出目录不同区分
  },
});

exports.getModules = (devMode, MiniCssExtractPlugin) => {
  const fileLoaderOption = dirName => ({
    loader: 'file-loader',
    options: {
      name:
          devMode
            ? '[name].[ext]'
            : `[name]${conf.hash ? '.[hash:7]' : ''}.[ext]`,
      outputPath: dirName, // 输出目录不同区分
    },
  });

  const getStyleConf = (HasCssModule = false) => ([
    {
      loader: devMode
        ? 'vue-style-loader'
        : MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../../',
      },
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: devMode,
        modules: HasCssModule ? {
          localIdentName: '[local]-[hash:base64:5]',
        } : false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: devMode,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        ...conf.sassOption,
        sourceMap: devMode,
      },
    },
  ]);

  return {
    rules: [
      /* ---------js&ts--------- */
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        // include: resolve('src'),
        use: 'happypack/loader',
      },
      /* ---------tpl--------- */
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(pug|jade)$/,
        oneOf: [
          // 这条规则应用到 Vue 组件内的 `<template lang="pug">`
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader'],
          },
          {
            use: [
              {
                loader: 'pug-loader',
                options: {
                  filters: pugFilters,
                },
              },
            ],
          },
        ],
      },
      /* ---------style--------- */
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module.(sa|sc|c)ss$/,
        oneOf: [
          /* vue单文件 + cssModule */
          {
            resourceQuery: /module/,
            use: getStyleConf(true),
          },
          /**
           *  常规样式文件
           *  vue-style-loader是style的fork版本，用于兼容vue单文件
           *  */
          {
            use: getStyleConf(),
          },
        ],
      },
      /* 适配常规的cssmodule文件 */
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: getStyleConf(true),
      },
      /* ---------文件--------- */
      /* 图 */
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: fileLoaderOption(`${conf.publicDirName}/img/`),
      },
      /* 影 */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: fileLoaderOption(`${conf.publicDirName}/video/`),
      },
      /* 字 */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: fileLoaderOption(`${conf.publicDirName}/font/`),
      },
    ],
  };
};
