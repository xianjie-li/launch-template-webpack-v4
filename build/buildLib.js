const log = require('./utils/log');
const ora = require('ora');
const webpack = require('webpack');
const fs = require('node-fs-extra');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const libConf = require('./webpack.lib');

function build(webpackConfig, cb) {
  var spinner = ora('正在构建...');
  spinner.start();
  webpack(webpackConfig, function(err, stats) {
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
      stats.toString({
        colors: true,
        assets: true,
        chunks: false,
        errorDetails: false,
        modules: false,
        entrypoints: false,
        children: false
      }) + '\n'
    );
    cb && cb();
  });
}

fs.removeSync(path.resolve(__dirname, '../lib'));

build(libConf({ NODE_ENV: 'prod' }), () => {
  log.log('index 构建完成');

  let singleConfMin = libConf({ NODE_ENV: 'prod' });
  // singleConfMin.entry = path.join(__dirname, '../packages/index.js');
  singleConfMin.output.filename = '[name]/index.min.js';
  singleConfMin.optimization.minimize = true;

  singleConfMin.plugins.pop();

  singleConfMin.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name]/style/index.min.css'
    })
  );

  build(singleConfMin, () => {
    log.log('min 构建完成');
  });
});
