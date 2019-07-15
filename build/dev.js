/* TODO: 新增入口自动重启服务，应该需要配置middleware来自定义devServer，否则不好实现，等webpack5出来了再说吧 */
const cp_exec = require('child_process').exec;
const chokidar = require('chokidar');
const path = require('path');
const kill = require('tree-kill');

function exec() {
  const cp = cp_exec(
    'webpack-dev-server --config ./build/webpack.dev.js --env.NODE_ENV=dev --color',
    {
      maxBuffer: 1024 * 1024 * 100
    }
  );

  cp.stdout.on('data', function(data) {
    console.clear();
    console.log(data);
  });

  cp.stderr.on('data', function(err) {
    console.log(err);
  });

  cp.on('close', (code, signal) => {
    console.log(`子进程因收到信号 ${signal} 而终止`);
  });

  return cp;
}

let cpFlag = exec();

chokidar
  .watch(path.resolve(__dirname, '../src/page'), { ignoreInitial: true })
  .on('add', _path => {
    if (path.extname(_path) === '.js') {
      console.log('新增了js文件, 准备重启服务');

      kill(1);
    }
  });
