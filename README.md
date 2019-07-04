[TOC]



## 说明

用于日常开发的webpack4配置，除了基本配置外添加了多页面支持、使用pug替代默认的ejs模板、基本包含所有常用的功能配置，对vue提供开箱即用的支持。react版见<<https://github.com/Iixianjie/launch-template-webpack-v4>>

<br>

## repo
<<https://github.com/Iixianjie/launch-template-webpack-v4-vue>>

<br>

## 使用
通过[launch-cli](https://github.com/Iixianjie/launch-cli)安装

### 简单安装示例
```js
yarn global add @lxjx/launch-cli

// 查看可用配置列表
launch list

// 选择模板并创建项目文件
launch create <template-name> <project-name>
```



### 配置

通过/build/config.js导出了很多常用配置，合理使用的话基本上不需要再触及其他配置文件

```js
module.exports = {
  publicPath: './', // 资源访问路径
  publicDirName: 'public', // 集中存放静态资源的目录名
  gizp: true,
  analyzer: true, // 包分析
  hash: true, // 文件hash
  htmlAssetsHash: false, // 打包时给html的引用资源打上hash
  dropConsole: true, // 移除console
  sassOption: {
    data: '@import "@/style/_base/index.scss";',
    precision: 3
  },
  proxy: {},
  extensions: ['.js', '.vue', '.jsx'],
  alias: {
    '@': path.resolve(__dirname, '../src'),
    // vue: 'vue/dist/vue.js'  // 当需要在html中使用模板语法时，开启此项替换默认的runtime版本
  },

  page: {
    loadAll: true, // 是否使用所有匹配到的页面作为入口，当页面过多时建议关闭以提升性能
    pageList: [] // loadAll为false时，手动指定需要作为入口的文件(不带后缀)
  },

  env: {
    dev: {
      BASE_URL: '/api/dev'
    },
    prod: {
      BASE_URL: '/api/prod'
    },
    test: {
      BASE_URL: '/api/test'
    }
  }
};

```



<br>

## 开箱即用的react配置

* react开发需要的一些stage如语法 import()、成员变量属性等
* 热加载
* 完整的启动示例，包括路由、store、以及一些常用的基础组件和自造的轮子
* 一个推荐的项目结构
* 使用 name.m.(c|sa|sc)ss的规则来启用css module

<br>

## 分块规则

一共会生成四种类型的包：

1.  webpack的运行时 runtime.js
2.  vendors, 从node_modules中导入的模块，两次以上会被打到vendor中
3.  项目中被引入两次以上的本地模块，会被添加到commons.js中
4.  页面包，进行多页面开发时，会根据页面名生成对应的js



### css
css块，具体规则如下
|   名称   |   说明   | 分块方式 | 引入 |
| --- | --- | --- | ---- |
| [name].[contenthash].css | 只在某个页面入口文件中进行引用，作用于当前页面的样式 | 页面名 | 当前页面 |
| [common].[contenthash].css | 同时在两个或多个页面入口引入 | common | 每一个有引用关系的页面 |


### js
各个页面的入口
|   名称   |   说明   | 分块方式 | 引入 |
| :--- | :--- | :--- | ---- |
| [name].[chunkhash].js | 只在当前页面入口引入的模块 | 页面名 | 当前页面 |
| [common].[chunkhash].js | 同时在两个或多个页面入口引入 | common，同时被引入次数大于1次时生效 | 每一个有依赖关系的页面 |
| [vendor].[chunkhash].js | 在各个入口引入的外部包node_modules | vendor，同时被引入次数大于1次时生效 |  |

<br>

## TODO

- [x] 选择是否一次载入所有页面
- [x] 配置时给模板传递一些额外信息
- [x] dll
- [x] pug
- [x] react
- [ ] mock

<br>

## 使用antd
通过babel-plugin-import实现按需加载，配置less来自定义主题

>  配置按需加载只能减少css的大小，js包还是会一样的大,等4.0更新后应该会有所改善

### 安装依赖
```
yarn add babel-plugin-import less less-loader --dev
yarn add antd
```

.babelrc
```js
plugins: [
  [
    //...
  ],
  ['import', {
      libraryName: 'antd',
      "style": true
  }],.
]
```

.webpack.dev.js
```js
{
  test: /\.less$/,
  use: [{
    loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
  },, {
    loader: 'css-loader', // translates CSS into CommonJS
  }, {
    loader: 'less-loader', // compiles Less to CSS
    options: {
      modifyVars: {
        'primary-color': '#C61A23',
      },
      javascriptEnabled: true,
    },
  }],
},
```

### 将icons分为异步块

```js
/* 异步加载antd icons， 见https://github.com/ant-design/ant-design/issues/12011 */
        {
          loader:'webpack-ant-icon-loader',
          enforce: 'pre',
          include:[
            require.resolve('@ant-design/icons/lib/dist')
          ]
        },
```

<br>

## 注意事项

* 没有使用url-loader是因为base64会比实际文件大上一些，而且在打异步包时容易出现两个包中重复打包的情况。
* 想到再写