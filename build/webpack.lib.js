const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const conf = require('./config');
const { getModules } = require('./utils/util');

const enrtys = require('./entrys.json');

module.exports = ({ NODE_ENV }) => {
  const devMode = NODE_ENV === 'dev';

  const config = {
    context: path.resolve(__dirname),
    mode: 'production',
    entry: enrtys,
    output: {
      filename: '[name]/index.js',
      path: path.resolve(__dirname, '../lib'),
      // chunkFilename: 'chunks/[name].[chunkhash].js',
      publicPath: './',
      library: ['blinkUi', '[name]'],
      libraryTarget: 'umd',
    },

    optimization: {
      minimize: false,
      minimizer: [
        new TerserJSPlugin({
          terserOptions: {
            compress: {
              // drop_console: conf.dropConsole
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },

    externals: [
      // /^@babel\/runtime/,
      // /^lodash/,
      // {
      //   '@lxjx/utils': 'utils',
      //   vue: 'Vue',
      //   react: 'React',
      //   moment: 'moment',
      //   lodash: {
      //     commonjs: 'lodash',
      //     amd: 'lodash',
      //     root: '_',
      //   },
      // },
    ],

    resolve: {
      extensions: conf.extensions,
    },

    module: getModules(devMode, MiniCssExtractPlugin),

    plugins: [
      new VueLoaderPlugin(),
      new HappyPack({
        loaders: ['babel-loader'],
      }),
      new webpack.ProgressPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static', // disabled、server、static
        openAnalyzer: false,
      }),
      new MiniCssExtractPlugin({
        filename: '[name]/style/index.css',
      }),
    ],
  };

  return config;
};
