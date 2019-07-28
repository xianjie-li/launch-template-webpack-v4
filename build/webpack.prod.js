const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

const conf = require('./config');

const baseConf = require('./webpack.base');

module.exports = env => {

  let config = merge(baseConf(env), {
    mode: 'production',

    output: {
      filename: `${conf.publicDirName}/js/[name]${conf.hash ? '.[chunkhash]' : ''}.js`,
      path: path.resolve(__dirname, '../dist'),
      chunkFilename: `${conf.publicDirName}/js/[name]${conf.hash ? '.[chunkhash]' : ''}.js`,
      publicPath: conf.publicPath,
      pathinfo: false
    },
    devtool: false,
    optimization: {
      minimizer: [
        new TerserJSPlugin({
          terserOptions: {
            compress: {
              drop_console: conf.dropConsole
            }
          }
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all', // 无视种类进
        minSize: 0, // 不计大小
        automaticNameDelimiter: '-',
        cacheGroups: {
          common: {
            minChunks: 2,
            name: 'common',
            reuseExistingChunk: true,
            priority: -5,
          },
          // minChunks是以多入口为计算规则的，为了防止单入口是不生成vendor将其设置为1
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            minChunks: 1,
            name: 'vendor',
            reuseExistingChunk: true,
            priority: 0,
          },
        }
      }
    },

    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin([
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, `../dist/${conf.publicDirName}`)
        }
      ]),
      new HtmlBeautifyPlugin({
        config: {
          end_with_newline: true,
          indent_size: 2,
          indent_with_tabs: true,
          indent_inner_html: true,
          preserve_newlines: true,
        },
        replace: [' type="text/javascript"']
      })
    ],
    stats: {
      assets: true,
      chunks: false,
      errorDetails: false,
      modules: false,
      entrypoints: false,
      children: false
    }
  });

  if (conf.gizp) {
    config.plugins.push(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    );
  }

  if (conf.analyzer) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static', // disabled、server、static
        openAnalyzer: false
      })
    );
  }

  return config;
};
