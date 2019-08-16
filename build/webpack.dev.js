const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const notifier = require('node-notifier');

const baseConf = require('./webpack.base');

const conf = require('./config');

module.exports = async (env) => {
  const port = await portfinder.getPortPromise();

  return merge(baseConf(env), {
    mode: 'development',
    output: {
      filename: '[name].app.js',
      publicPath: '/',
    },
    resolve: {
      alias: {
        /* 用于开启hooks热加载 */
        'react-dom': '@hot-loader/react-dom',
      },
    },
    devtool: 'eval-source-map',
    devServer: {
      clientLogLevel: 'warning',
      contentBase: path.resolve(__dirname, '../public/'),
      host: '0.0.0.0',
      port,
      hot: true,
      // publicPath: '/',   默认
      quiet: true, // 适应FriendlyErrorsWebpackPlugin
      overlay: {
        warnings: true,
        errors: true,
      },
      proxy: conf.proxy,

      // 修复html不能重载
      // https://github.com/webpack/webpack-dev-server/issues/1271
      before(app, server, compiler) {
        const watchFiles = ['.html', '.pug'];

        compiler.hooks.done.tap('done', () => {
          const changedFiles = Object.keys(compiler.watchFileSystem.watcher.mtimes);

          if (
            this.hot
            && changedFiles.some(filePath => watchFiles.includes(path.parse(filePath).ext))
          ) {
            server.sockWrite(server.sockets, 'content-changed');
          }
        });
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`You application is running here http://localhost:${port}`],
          notes: ['按住ctrl点击链接在浏览器打开'],
        },
        // 桌面通知
        onErrors: (severity, errors) => {
          const error = errors[0];

          if (severity !== 'error') {
            notifier.notify({
              title: severity !== 'error' ? '😭错误' : '😅警告',
              message: `${severity} : ${error.name}`,
              subtitle: error.file || '',
              sound: 'Glass',
            });
          }
        },
      }),
    ],

  });
};
