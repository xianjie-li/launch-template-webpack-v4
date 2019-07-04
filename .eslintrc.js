/** 
 * github: https://github.com/qq1073830130 
 * dpendencies: eslint eslint-plugin-vue
 * */



module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    BASE_URL: false,
    Vue: false,
  },
  /* 支持最新的es语法 */
  // parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    //缩进为2
    indent: ['error', 2],
    //只能够使用单引号
    quotes: ['error', 'single'],
    //不使用分号
    'semi': ["error", "always"],

    /* 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关 */

    // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    'for-direction': 'error',
    // getter 必须有返回值，并且禁止返回空，比如 return;
    'getter-return': [
      'error',
      {
        allowImplicit: false
      }
    ],
    // 禁止与负零进行比较
    'no-compare-neg-zero': 'error',
    // 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
    'no-cond-assign': ['error', 'except-parens'],
    // 使用 console
    'no-console': 'off',
    // 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    // @fixable 禁止使用 debugger
    'no-debugger': 'error',
    // 禁止在函数参数中出现重复名称的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-keys': 'error',
    // 禁止在 switch 语句中出现重复测试表达式的 case
    'no-duplicate-case': 'error',
    // 禁止出现空代码块，允许 catch 为空代码块
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    // 禁止在正则表达式中使用空的字符集 []
    'no-empty-character-class': 'error',
    // 禁止将 catch 的第一个参数 error 重新赋值
    'no-ex-assign': 'error',
    // @fixable 禁止不必要的布尔类型转换，比如 !! 或 Boolean
    'no-extra-boolean-cast': 'error',
    // @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
    'no-extra-parens': ['error', 'functions'],
    // 禁止将一个函数声明重新赋值
    'no-func-assign': 'error',
    // 禁止在 if 代码块内出现函数声明
    'no-inner-declarations': ['error', 'both'],
    // 禁止在 RegExp 构造函数中出现非法的正则表达式
    'no-invalid-regexp': 'error',
    // 禁止使用特殊空白符，除非是出现在字符串、正则表达式或模版字符串中
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
    'no-obj-calls': 'error',
    // 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
    'no-prototype-builtins': 'off',
    // @fixable 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
    'no-regex-spaces': 'error',
    // 禁止在数组中出现连续的逗号，如 let foo = [,,]
    'no-sparse-arrays': 'error',
    // 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
    'no-template-curly-in-string': 'error',
    // 禁止出现难以理解的多行表达式
    'no-unexpected-multiline': 'error',
    // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-unreachable': 'error',
    // 禁止在 finally 中出现 return, throw, break 或 continue
    'no-unsafe-finally': 'error',
    // @fixable 禁止在 in 或 instanceof 操作符的左侧使用感叹号
    'no-unsafe-negation': 'error',
    // 必须使用 isNaN(foo) 而不是 foo === NaN
    'use-isnan': 'error',
    // 注释必须符合 jsdoc 的规范
    'valid-jsdoc': 'off',
    // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
    'valid-typeof': 'error',

    /* 最佳实践 */
    // setter 必须有对应的 getter，getter 可以没有对应的 setter
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ],
    // 数组的方法除了 forEach 之外，回调函数必须有返回值
    'array-callback-return': 'error',
    // 将 var 定义的变量视为块作用域，禁止在块外使用
    'block-scoped-var': 'error',
    // 在类的非静态方法中，必须存在对 this 的引用
    'class-methods-use-this': 'off',
    // 禁止函数的循环复杂度超过 20
    complexity: [
      'error',
      {
        max: 20
      }
    ],
    // 禁止函数在不同分支返回不同类型的值
    'consistent-return': 'off',
    curly: ['error', 'multi-line', 'consistent'],
    // switch 语句必须有 default
    'default-case': 'off',
    // @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
    'dot-location': ['error', 'property'],
    // @fixable 禁止出现 foo['bar']，必须写成 foo.bar
    'dot-notation': 'off',
    // 禁止使用 alert
    'no-alert': 'off',
    // 禁止使用 caller 或 callee
    'no-caller': 'error',
    // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
    'no-case-declarations': 'error',
    // 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
    'no-div-regex': 'off',
    // @fixable 禁止在 else 内使用 return，必须改为提前结束
    'no-else-return': 'off',
    // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
    'no-empty-function': [
      'error',
      {
        allow: ['functions', 'arrowFunctions']
      }
    ],
    // 禁止解构中出现空 {} 或 []
    'no-empty-pattern': 'error',
    // 禁止使用 foo == null 或 foo != null，必须使用 foo === null 或 foo !== null
    'no-eq-null': 'off',
    // 禁止使用 eval
    'no-eval': 'error',
    // 禁止修改原生对象
    'no-extend-native': 'error',
    // @fixable 禁止出现没必要的 bind
    'no-extra-bind': 'error',
    // @fixable 禁止出现没必要的 label
    'no-extra-label': 'error',
    // switch 的 case 内必须有 break, return 或 throw
    'no-fallthrough': 'error',
    // @fixable 表示小数时，禁止省略 0，比如 .5
    'no-floating-decimal': 'error',
    // 禁止对全局变量赋值
    'no-global-assign': 'error',
    // @fixable 禁止使用 !! ~ 等难以理解的运算符
    // 仅允许使用 !!
    'no-implicit-coercion': [
      'error',
      {
        allow: ['!!']
      }
    ],
    // 禁止在全局作用域下定义变量或申明函数
    'no-implicit-globals': 'error',
    // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
    'no-implied-eval': 'error',
    // 禁止在类之外的地方使用 this
    'no-invalid-this': 'off',
    // 禁止使用 __iterator__
    'no-iterator': 'error',
    // 禁止使用 label
    'no-labels': 'error',
    // 禁止使用没必要的 {} 作为代码块
    'no-lone-blocks': 'error',
    // 禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
    'no-loop-func': 'error',
    // 禁止使用 magic numbers
    'no-magic-numbers': 'off',
    // @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    // 禁止使用 \ 来换行字符串
    'no-multi-str': 'error',
    // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
    'no-new-func': 'error',
    // 禁止使用 new 来生成 String, Number 或 Boolean
    'no-new-wrappers': 'error',
    // 禁止使用 0 开头的数字表示八进制数
    'no-octal': 'error',
    // 禁止使用八进制的转义符
    'no-octal-escape': 'error',
    // 禁止对函数的参数重新赋值
    'no-param-reassign': 'off',
    // 禁止使用 __proto__
    'no-proto': 'error',
    // 禁止重复定义变量
    'no-redeclare': 'error',
    // 禁止使用指定的对象属性
    'no-restricted-properties': 'off',
    // 禁止在 return 语句里赋值
    'no-return-assign': 'off',
    // 禁止在 return 语句里使用 await
    'no-return-await': 'error',
    // 禁止出现 location.href = 'javascript:void(0)';
    'no-script-url': 'error',
    // 禁止将自己赋值给自己
    'no-self-assign': 'error',
    // 禁止将自己与自己比较
    'no-self-compare': 'error',
    // 禁止使用逗号操作符
    'no-sequences': 'error',
    // 禁止 throw 字面量，必须 throw 一个 Error 对象
    'no-throw-literal': 'error',
    // 循环内必须对循环条件的变量有修改
    'no-unmodified-loop-condition': 'error',
    // 禁止无用的表达式
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    // @fixable 禁止出现没用的 label
    'no-unused-labels': 'error',
    // 禁止出现没必要的 call 或 apply
    'no-useless-call': 'error',
    // 禁止出现没必要的字符串连接
    'no-useless-concat': 'error',
    // 禁止出现没必要的转义
    'no-useless-escape': 'off',
    // @fixable 禁止没必要的 return
    'no-useless-return': 'off',
    // 禁止使用 void
    'no-void': 'error',
    // 禁止注释中出现 TODO 和 FIXME
    'no-warning-comments': 'off',
    // 禁止使用 with
    'no-with': 'error',
    // Promise 的 reject 中必须传入 Error 对象，而不是字面量
    'prefer-promise-reject-errors': 'error',
    // var 必须在作用域的最前面
    'vars-on-top': 'off',
    // @fixable 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true
      }
    ],
    // @fixable 必须使用 if (foo === 5) 而不是 if (5 === foo)
    yoda: [
      'error',
      'never',
      {
        onlyEquality: true
      }
    ],

    /* 变量 */

    // 变量必须在定义的时候赋值
    'init-declarations': 'off',
    // 禁止 catch 的参数名与定义过的变量重复
    'no-catch-shadow': 'off',
    // 禁止使用 delete
    'no-delete-var': 'error',
    // 禁止 label 名称与定义过的变量重复
    'no-label-var': 'error',
    // 禁止使用指定的全局变量
    'no-restricted-globals': 'off',
    // 禁止变量名与上层作用域内的定义过的变量重复
    'no-shadow': 'off',
    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 'error',
    // 禁止使用未定义的变量
    'no-undef': 'warn',
    // 'no-undef': [
    //   'error',
    //   {
    //     typeof: false
    //   }
    // ],
    // @fixable 禁止将 undefined 赋值给变量
    'no-undef-init': 'error',
    // 禁止对 undefined 重新赋值
    'no-undefined': 'error',
    // 定义过的变量必须使用
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],

    /* Node.js 和 CommonJS */

    // callback 之后必须立即 return
    'callback-return': 'off',
    // require 必须在全局作用域下
    'global-require': 'off',
    // callback 中的 error 必须被处理
    'handle-callback-err': 'error',
    // 禁止直接使用 Buffer
    'no-buffer-constructor': 'error',
    // 相同类型的 require 必须放在一起
    'no-mixed-requires': 'off',
    // 禁止直接 new require('foo')
    'no-new-require': 'error',
    // 禁止对 __dirname 或 __filename 使用字符串连接
    'no-path-concat': 'error',
    // 禁止使用 process.env.NODE_ENV
    'no-process-env': 'off',
    // 禁止使用 process.exit(0)
    'no-process-exit': 'off',
    // 禁止使用指定的模块
    'no-restricted-modules': 'off',
    // 禁止使用 node 中的同步的方法，比如 fs.readFileSync
    'no-sync': 'off',

    /* 代码风格 */

    // @fixable 配置数组的中括号内前后的换行格式
    'array-bracket-newline': 'off',
    // @fixable 数组的括号内的前后禁止有空格
    'array-bracket-spacing': ['error', 'never'],
    // @fixable 配置数组的元素之间的换行格式
    'array-element-newline': 'off',
    // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格
    'block-spacing': ['error', 'always'],
    // @fixable if 与 else 的大括号风格必须一致
    'brace-style': 'off',
    // 变量名必须是 camelcase 风格的
    camelcase: 'off',
    // @fixable 注释的首字母必须大写
    'capitalized-comments': 'off',
    // @fixable 对象的最后一个属性末尾必须有逗号
    'comma-dangle': 'off',
    // @fixable 逗号前禁止有空格，逗号后必须要有空格
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // @fixable 禁止在行首写逗号
    'comma-style': ['error', 'last'],
    // @fixable 用作对象的计算属性时，中括号内的首尾禁止有空格
    'computed-property-spacing': ['error', 'never'],
    // 限制 this 的别名
    'consistent-this': 'off',
    // @fixable 文件最后一行必须有一个空行
    'eol-last': 'off',
    // @fixable 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': ['error', 'never'],
    // 函数赋值给变量的时候，函数名必须与变量名一致
    'func-name-matching': [
      'error',
      'always',
      {
        includeCommonJSModuleExports: false
      }
    ],
    // 函数必须有名字
    'func-names': 'off',
    // 必须只使用函数声明或只使用函数表达式
    'func-style': 'off',
    // 禁止使用指定的标识符
    'id-blacklist': 'off',
    // 限制变量名长度
    'id-length': 'off',
    // 限制变量名必须匹配指定的正则表达式
    'id-match': 'off',
    // @fixable jsx 中的属性必须用双引号
    'jsx-quotes': ['error', 'prefer-double'],
    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    // @fixable 关键字前后必须有空格
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 单行注释必须写在上一行
    'line-comment-position': 'off',
    // @fixable 限制换行符为 LF 或 CRLF
    'linebreak-style': 'off',
    // @fixable 注释前后必须有空行
    'lines-around-comment': 'off',
    // 代码块嵌套的深度禁止超过 5 层
    'max-depth': ['error', 5],
    // 限制一行的长度
    'max-len': 'off',
    // 限制一个文件最多的行数
    'max-lines': 'off',
    // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
    'max-nested-callbacks': ['error', 3],
    // 函数的参数禁止超过 7 个
    'max-params': ['error', 7],
    // 限制函数块中的语句数量
    'max-statements': 'off',
    // 限制一行中的语句数量
    'max-statements-per-line': 'off',
    // 三元表达式必须得换行
    'multiline-ternary': 'off',
    // new 后面的类名必须首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    // @fixable new 后面的类必须有小括号
    'new-parens': 'error',
    // 链式调用必须换行
    'newline-per-chained-call': 'off',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁止使用位运算
    'no-bitwise': 'off',
    // 禁止使用 continue
    'no-continue': 'off',
    // 禁止在代码后添加内联注释
    'no-inline-comments': 'off',
    // @fixable 禁止 else 中只有一个单独的 if
    'no-lonely-if': 'off',
    // 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
    'no-mixed-operators': 'off',
    // 禁止混用空格和缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止连续赋值，比如 a = b = c = 5
    'no-multi-assign': 'off',
    // @fixable 禁止出现超过三行的连续空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 3,
        maxEOF: 1,
        maxBOF: 1
      }
    ],
    // 禁止 if 里面有否定的表达式
    'no-negated-condition': 'off',
    // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
    'no-nested-ternary': 'off',
    // 禁止直接 new Object
    'no-new-object': 'error',
    // 禁止使用 ++ 或 --
    'no-plusplus': 'off',
    // 禁止使用特定的语法
    'no-restricted-syntax': 'off',
    // 禁止使用 tabs
    'no-tabs': 'error',
    // 禁止使用三元表达式
    'no-ternary': 'off',
    // @fixable 禁止行尾有空格
    'no-trailing-spaces': 'error',
    // 禁止变量名出现下划线
    'no-underscore-dangle': 'off',
    // @fixable 必须使用 !a 替代 a ? false : true
    'no-unneeded-ternary': 'off',
    // @fixable 禁止属性前有空格，比如 foo. bar()
    'no-whitespace-before-property': 'error',
    // @fixable 禁止 if 后面不加大括号而写两行代码
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {
          while: 'below'
        }
      }
    ],
    // @fixable 大括号内的首尾必须有换行
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: false
      }
    ],
    // @fixable 对象字面量内的属性每行必须只有一个
    'object-property-newline': 'off',
    // 禁止变量申明时用逗号一次申明多个
    'one-var': ['error', 'never'],
    // @fixable 变量申明必须每行一个
    'one-var-declaration-per-line': ['error', 'always'],
    // @fixable 必须使用 x = x + y 而不是 x += y
    'operator-assignment': 'off',
    // @fixable 需要换行的时候，操作符必须放在行末，比如：
    'operator-linebreak': 'off',
    // @fixable 代码块首尾必须要空行
    'padded-blocks': 'off',
    // @fixable 限制语句之间的空行规则，比如变量定义完之后必须要空行
    'padding-line-between-statements': 'off',
    // @fixable 对象字面量的键名禁止用引号括起来
    'quote-props': 'off',
    // 必须使用 jsdoc 风格的注释
    'require-jsdoc': 'off',
    // 对象字面量的键名必须排好序
    'sort-keys': 'off',
    // 变量申明必须排好序
    'sort-vars': 'off',
    // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
    'space-before-blocks': ['error', 'always'],
    // @fixable function 的小括号之前必须要有空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // @fixable 小括号内的首尾禁止有空格
    'space-in-parens': ['error', 'never'],
    // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
    'space-infix-ops': 'error',
    // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    // @fixable 注释的斜线或 * 后必须有空格
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    // @fixable case 的冒号前禁止有空格，冒号后必须有空格
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    // @fixable 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
    'template-tag-spacing': ['error', 'never'],
    // @fixable 文件开头禁止有 BOM
    'unicode-bom': ['error', 'never'],
    // @fixable 正则表达式必须有括号包起来
    'wrap-regex': 'off',

    /* ECMAScript 6 */

    // @fixable 箭头函数能够省略 return 的时候，必须省略
    'arrow-body-style': 'off',
    // @fixable 箭头函数只有一个参数的时候，必须加括号
    'arrow-parens': 'off',
    // @fixable 箭头函数的箭头前后必须有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // constructor 中必须有 super
    'constructor-super': 'error',
    // @fixable generator 的 * 前面禁止有空格，后面必须有空格
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 禁止对定义过的 class 重新赋值
    'no-class-assign': 'error',
    // @fixable 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],
    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',
    // 禁止重复定义类
    'no-dupe-class-members': 'error',
    // 禁止重复 import 模块
    'no-duplicate-imports': 'error',
    // 禁止使用 new 来生成 Symbol
    'no-new-symbol': 'error',
    // 禁止 import 指定的模块
    'no-restricted-imports': 'off',
    // 禁止在 super 被调用之前使用 this 或 super
    'no-this-before-super': 'error',
    // @fixable 禁止出现没必要的计算键名
    'no-useless-computed-key': 'error',
    // 禁止出现没必要的 constructor
    'no-useless-constructor': 'off',
    // @fixable 禁止解构时出现同样名字的的重命名
    'no-useless-rename': 'error',
    // @fixable 必须使用 a = {b} 而不是 a = {b: b}
    'object-shorthand': 'off',
    // @fixable 必须使用箭头函数作为回调
    'prefer-arrow-callback': 'off',
    // @fixable 申明后不再被修改的变量必须使用 const 来申明
    'prefer-const': 'off',
    // 必须使用解构
    'prefer-destructuring': 'off',
    // @fixable 必须使用 0b11111011 而不是 parseInt('111110111', 2)
    'prefer-numeric-literals': 'off',
    // 必须使用 ...args 而不是 arguments
    'prefer-rest-params': 'off',
    // @fixable 必须使用 ... 而不是 apply，比如 foo(...args)
    'prefer-spread': 'off',
    // @fixable 必须使用模版字符串而不是字符串连接
    'prefer-template': 'off',
    // generator 函数内必须有 yield
    'require-yield': 'error',
    // @fixable ... 的后面禁止有空格
    'rest-spread-spacing': ['error', 'never'],
    // @fixable import 必须按规则排序
    'sort-imports': 'off',
    // 创建 Symbol 时必须传入参数
    'symbol-description': 'error',
    // @fixable ${name} 内的首尾禁止有空格
    'template-curly-spacing': ['error', 'never'],
    // @fixable yield* 后面必须要有空格
    'yield-star-spacing': ['error', 'after'],

  }
}
