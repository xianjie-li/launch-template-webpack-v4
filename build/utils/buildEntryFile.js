/**
 * 根据packages自动生成入口
 * ~~packages/index.js是默认入口, 其他入口不允许命名为index~~
 */

const glob = require('glob');
const path = require('path');
const fs = require('node-fs-extra');
const chalk = require('chalk');

// 忽略的目录
const ignoreDir = ['Style', 'common', 'assets', 'style'];

const baseEntry = {
  index: path.join(__dirname, '../packages/index.js')
};

let entrys = glob.sync(
  path.join(
    __dirname,
    '../packages/',
    `**/!(${ignoreDir.join('|')})*/index.js`
  )
);

entrys.forEach(v => {
  let filePath = path.resolve(v);
  let slices = path.dirname(filePath).split(path.sep);
  let name = slices[slices.length - 1];
  baseEntry[name] = filePath;
});

fs.outputJson(
  path.join(__dirname, '../entrys.json'),
  baseEntry,
  err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('入口创建成功! -> ' + chalk.blue('/entrys.json'));
  }
);
