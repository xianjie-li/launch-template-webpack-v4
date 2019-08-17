const ora = require('ora');
const webpack = require('webpack');
const fs = require('node-fs-extra');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const log = require('./utils/log');
const CopyPlugin = require('copy-webpack-plugin');

const libConf = require('./webpack.lib');

const enrtys = require('./entrys.json');

function build(webpackConfig, cb) {
  const spinner = ora('正在构建...');
  spinner.start();
  webpack(webpackConfig, (err, stats) => {
    spinner.stop();

    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    process.stdout.write(
      `${stats.toString({
        colors: true,
        assets: true,
        chunks: false,
        errorDetails: false,
        modules: false,
        entrypoints: false,
        children: false,
      })}\n`,
    );
    // eslint-disable-next-line no-unused-expressions
    cb && cb();
  });
}

fs.removeSync(path.resolve(__dirname, '../lib'));

build(libConf({ NODE_ENV: 'prod' }), () => {
  log.log('index 构建完成');

  const singleConfMin = libConf({ NODE_ENV: 'prod' });
  // singleConfMin.entry = path.join(__dirname, '../packages/index.js');
  singleConfMin.output.filename = '[name]/index.min.js';
  singleConfMin.optimization.minimize = true;


  const libKeys = Object.keys(enrtys);
  const copyList = libKeys.map(key => ({
    from: './template/style/', 
    to: path.resolve(__dirname, '../lib/', key + '/style/'),
  }));

  singleConfMin.plugins.pop();

  singleConfMin.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name]/style/index.min.css',
    }),
    new CopyPlugin(copyList),
  );

  build(singleConfMin, () => {
    log.log('min 构建完成');
  });
});
