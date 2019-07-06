const conf = require('./config');
const util = require('./utils/util');
const pugFilters = require('./utils/pugFilters');

module.exports = (devMode, NODE_ENV, MiniCssExtractPlugin) => {
  return {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      /* vue需要pug直接返回字符，而不是一个方法 */
      {
        test: /\.(pug|jade)$/,
        oneOf: [
          // 这条规则应用到 Vue 组件内的 `<template lang="pug">`
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: [
              {
                loader: 'pug-loader',
                options: {
                  filters: pugFilters
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            // test: /\.module\.(sa|sc|c)ss$/,
            use: [
              {
                loader: devMode
                  ? 'vue-style-loader'
                  : MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: devMode,
                  modules: true
                  // localIdentName: '[name]_[local]-[hash:base64:7]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: devMode
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  ...conf.sassOption,
                  sourceMap: devMode
                }
              }
            ]
          },
          {
            // test: /\.(sa|sc|c)ss$/,
            // exclude: /\.module.(sa|sc|c)ss$/,
            use: [
              {
                // 使用vue-style-loader代替style-loader
                loader: devMode
                  ? 'vue-style-loader'
                  : MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: devMode
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: devMode
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  ...conf.sassOption,
                  sourceMap: devMode
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        // include: resolve('src'),
        use: 'happypack/loader'
      },
      /* 图 */
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: util.fileLoaderOption(
          NODE_ENV,
          `${conf.publicDirName}/img/`,
          conf.hash
        )
      },
      /* 影 */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: util.fileLoaderOption(
          NODE_ENV,
          `${conf.publicDirName}/video/`,
          conf.hash
        )
      },
      /* 字 */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: util.fileLoaderOption(
          NODE_ENV,
          `${conf.publicDirName}/font/`,
          conf.hash
        )
      }
    ]
  };
};
