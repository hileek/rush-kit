## 可用脚本

在项目目录中，可以运行：

### 'npm start'

在开发模式下运行应用。
打开 [http://localhost:3000]（http://localhost:3000） 以在浏览器中查看它。

如果您进行编辑，页面将重新加载。
您还将在控制台中看到任何 lint 错误。

### 'npm 测试'

在交互式监视模式下启动测试运行程序。
有关更多信息，请参阅有关 [运行测试]（https://facebook.github.io/create-react-app/docs/running-tests）的部分。

### 'npm run build'

将用于生产的应用构建到“生成”文件夹。
它正确地将 React 捆绑在生产模式下，并优化构建以获得最佳性能。

构建被缩小，文件名包含哈希。
你的应用已准备好部署！

有关详细信息，请参阅有关 [deployment]（https://facebook.github.io/create-react-app/docs/deployment） 的部分。

## 后端数据返回格式

{
  message: string 请求状态描述,
  data: {} 或者 [],
  code: int 错误码，非 0 表示失败:
}

## 目录结构

├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│         ├── Welcome        // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
│         |   ├── components // 对于复杂的页面可以再自己做更深层次的组织，但建议不要超过三层
│         |   ├── Form.tsx
│         |   ├── index.tsx  // 页面组件的代码
│         |   └── index.less // 页面样式
│         ├── Order          // 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
│         |   ├── index.tsx
│         |   └── index.less
│         ├── User
│         |   ├── components // group 下公用的组件集合
│         |   ├── Login      // group 下的页面 Login
│         |   ├── Register   // group 下的页面 Register
│         |   └── util.ts    // 这里可以有一些共用方法之类，不做推荐和约束，看业务场景自行做组织
│         └── *              // 其它页面组件代码
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
