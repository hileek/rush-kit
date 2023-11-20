## 项目名称 rush-kit

## 项目概述
基于react18+antDesign+typescript+redux技术栈，企业级快速搭建后台管理系统的项目

## 快速开始
```bash
git clone https://github.com/peekdog/react-antd-typescript.git
cd react-antd-typescript
npm install
npm run mock
npm start

## 可用脚本

在项目目录中，可以运行：

### 'npm start'

在开发模式下运行应用。
打开 [http://localhost:3000]（http://localhost:3000） 以在浏览器中查看它。

如果您进行编辑，页面将重新加载。
您还将在控制台中看到任何 lint 错误。

### 'npm run mock'

启动mock服务

### 'npm test'

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
  data: any,
  code: 200成功
}

## 目录结构

```plaintext
.
|-- config/              # umi 配置，包含路由，构建等配置
|-- mock/                # 本地模拟数据
|-- public/              # 本地模拟数据
|   |-- favicon.ico/     # Favicon
|-- src/                 # 源代码目录
|   |-- assets/          # 本地静态资源
|   |-- components/      # 组件目录
|       |-- Button/
|       |-- Header/
|   |-- hooks/           # 自定义hooks
|   |-- layouts/         # 通用布局
|   |-- locales/         # 国际化资源
|   |-- pages/           # 业务页面入口和常用模板
|   |-- redux/           # 消息管理中心
|   |-- routes/          # 路由
|   |-- services/        # 后台接口服务
|   |-- styles/          # 全局公共样式
|   |-- types/           # typescript类型
|   |-- utils/           # 工具库
|   |-- App.tsx          # 主应用组件
|   |-- index.tx         # 入口文件
|-- .env.development     # 开发环境环境
|-- .env.production      # 生产环境环境
|-- tsconfig.json        # typescript配置文件
|-- README.md            # 项目说明文件
