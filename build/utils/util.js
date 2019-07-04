const path = require('path');
const utils = require('@lxjx/utils');
const glob = require('glob');
const log = require('./log');

/* 捕获page第一级目录下的文件夹内的js作为webpack入口，对于不想被匹配的文件，可以放到更深一级的目录或以 _ 作为前缀 */
exports.getEntrys = () => {
  try {
    let entrys = glob.sync(
      path.resolve(__dirname, '../../src/page/', '**/!(_|pageInfo)*.js')
    );

    if (utils.isArray(entrys) && entrys.length > 0) {
      let formatEntry = {};
      let template = [];

      entrys.forEach(v => {
        let baseName = path.basename(v).replace('.js', '');
        let dirName = path.dirname(v);

        let tpl = glob.sync(path.resolve(dirName) + '*/*.{pug,html}');
        let pageInfo = glob.sync(path.resolve(dirName) + '*/pageInfo.js');

        if (pageInfo.length) {
          pageInfo = require(pageInfo[0]);
        }

        formatEntry[baseName] = v;

        tpl[0] &&
          template.push({
            title: baseName,
            template: tpl[0],
            pageInfo
          });
      });

      return {
        entrys: formatEntry,
        template
      };
    }

    throw Error('没有找到入口文件!');
  } catch (err) {
    log.error(err);
  }
};

/* 传入环境变量、输出目录名，返回file-loader option */
exports.fileLoaderOption = (env, dirName, hash) => {
  return {
    loader: 'file-loader',
    options: {
      name:
        env === 'dev'
          ? '[name].[ext]'
          : `[name]${hash ? '.[hash:7]' : ''}.[ext]`,
      outputPath: dirName // 输出目录不同区分
    }
  };
};
