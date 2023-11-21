# rush-kit

[English](https://github.com/peekdog/react-antd-typescript/blob/main/README.md) | 简体中文

基于React18 + TypeScript + Ant Design的前端权限管理系统，系统初始化极度简单，目的在于快速让企业完成项目的初始化。

## 🎬 在线体验


rush-kit体验：待上线
> ⚠️⚠️⚠️ 账号 / 密码： 

## ✨ 特性

- 遵循 RESTful API 设计规范

- 遵循ESLint规范，如果你的团队对代码质量很重视，这是很不错的选择

- 组件化开发，tsx风格，严格的类型规范

- 多个重难点需求代码示例，实现快速开发

- 支持 Swagger 文档

- 配置文件简单的模型映射，快速能够得到想要的配置

- 代码生成工具

- 表单构建工具

- 多指令模式

- 多组件模板

- 多租户的支持

- 单元测试

## 📕 目录结构

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
```

## 🎁 todolist

1. 多租户：系统默认支持多租户，按库分离，一个库一个租户。
1. 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
2. 部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
3. 岗位管理：配置系统用户所属担任职务。
4. 菜单管理：配置系统菜单，操作权限，按钮权限标识，接口权限等。
5. 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
6. 字典管理：对系统中经常使用的一些较为固定的数据进行维护。
7. 参数管理：对系统动态配置常用参数。
8. 操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
9. 登录日志：系统登录日志记录查询包含登录异常。
10. 接口文档：根据业务代码自动生成相关的api接口文档。
11. 代码生成：根据数据表结构生成对应的增删改查相对应业务，全程可视化操作，让基本业务可以零代码实现。
12. 表单构建：自定义页面样式，拖拉拽实现页面布局。
13. 服务监控：查看一些服务器的基本信息。
14. 内容管理：demo功能，下设分类管理、内容管理。可以参考使用方便快速入门。
15. 定时任务：自动化任务，目前支持接口调用和函数调用。
16. 组件扩展：将组件进行集成，实现快速开发。
17. excel解析：提供模板函数，直接造轮子。
18. 杜邦分析图：传入数据，自动化生成杜邦分析图。


## 快速开始

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/) 

### 环境要求

node版本: v18.15.0

npm版本: 9.6.2

### 克隆仓库

```bash
# 创建一个新的文件夹后，执行命令
git clone https://github.com/peekdog/react-antd-typescript.git

```

### 依次执行脚本

```bash
# 请注意我在上面提到的node版本以及npm版本，如报错请切换node版本及npm版本（npm install npm@9.6.2 -g）
npm install
# 如果使用mock数据，请先安装json-server
npm install json-server -g
# mock服务
npm run mock
# 启动项目，默认3000端口
npm start
```
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

### 'npm run lint'

行代码静态分析工具的命令。它用于运行 ESLint，这是一个流行的 JavaScript 和 TypeScript 代码检查工具。
lint 的目标是帮助开发者发现并修复代码中的潜在问题、风格问题和错误，以确保代码的一致性和质量。

### 'npm run fix'

自动修复代码风格问题： ESLint 可以尝试自动修复一些与代码风格有关的问题，例如缩进、空格、括号等。
这有助于确保整个项目的代码风格保持一致。

自动修复部分潜在问题： 可以尝试自动修复一些简单的潜在问题，例如未使用的变量、未定义的变量等。
这有助于提前发现并解决一些常见的问题

## 💎 贡献者(暂时只有我)

<span style="margin: 0 5px;" ><a href="https://github.com/peekdog" ><img src="https://avatars.githubusercontent.com/u/143068552?v=4" /></a></span>


Copyright (c) 2023 peekdog
#rush-kit
English | [简体中文](https://github.com/peekdog/react-antd-typescript/blob/main/README.md)

Based on the front-end permission management system of React18 + TypeScript + Ant Design, the system initialization is extremely simple, and the purpose is to quickly allow enterprises to complete the initialization of the project.

## 🎬 Online experience


rush-kit experience: to be launched
> ⚠️⚠️⚠️Account/Password:

## ✨ Features

- Follow RESTful API design specifications

- Follow the ESLint specification, which is a good choice if your team attaches great importance to code quality

- Component development, tsx style, strict type specifications

- Multiple code examples for key and difficult requirements to achieve rapid development

-Support Swagger documentation

- Simple model mapping of configuration files, you can quickly get the desired configuration

- Code generation tools

- Form building tool

-Multiple command mode

- Multi-component templates

- Multi-tenancy support

- unit test

## 📕 Directory structure

```plaintext
.
|-- config/ # umi configuration, including routing, construction and other configurations
|-- mock/ # Local mock data
|-- public/ # Local simulation data
| |-- favicon.ico/ # Favicon
|-- src/ # Source code directory
| |-- assets/ # Local static resources
| |-- components/ # component directory
| |-- Button/
| |-- Header/
| |-- hooks/ # Custom hooks
| |-- layouts/ # General layout
| |-- locales/ # International resources
| |-- pages/ #Business page entry and common templates
| |-- redux/ # Message management center
| |-- routes/ # Route
| |-- services/ #Backend interface service
| |-- styles/ # Global public styles
| |-- types/ # typescript type
| |-- utils/ # Tool library
| |-- App.tsx # Main application component
| |-- index.tx # Entry file
|-- .env.development # Development environment environment
|-- .env.production # Production environment environment
|-- tsconfig.json # typescript configuration file
|-- README.md # Project description file
```

## 🎁 todolist

1. Multi-tenancy: The system supports multi-tenancy by default, separated by library, with one tenant per library.
1. User management: The user is the system operator. This function mainly completes the system user configuration.
2. Department management: configure the system organization (company, department, group), and display the tree structure to support data permissions.
3. Position management: Configure the positions that system users hold.
4. Menu management: configure system menu, operation permissions, button permission identification, interface permissions, etc.
5. Role management: assign permissions in the role menu, set roles, and divide data range permissions by organization.
6. Dictionary management: Maintain some relatively fixed data frequently used in the system.
7. Parameter management: dynamically configure common parameters for the system.
8. Operation log: normal system operation log recording and query; system abnormal information log recording and query.
9. Login log: The system login log record query contains login exceptions.
10. Interface documentation: Automatically generate relevant API interface documents based on business code.
11. Code generation: Generate corresponding additions, deletions, modifications and queries according to the data table structure, with full visual operation, so that basic services can be realized with zero code.
12. Form construction: Customize page style, drag and drop to realize page layout.
13. Service monitoring: View some basic information of the server.
14. Content management: demo function, including category management and content management. You can refer to the easy-to-use quick start guide.
15. Scheduled tasks: automated tasks, currently supporting interface calls and function calls.
16. Component expansion: Integrate components to achieve rapid development.
17. Excel analysis: Provide template functions to directly create the wheel.
18. DuPont analysis chart: Input data and automatically generate DuPont analysis chart.


## Quick Start

You need to install [node](http://nodejs.org/) and [git](https://git-scm.com/) locally

### Environmental requirements

node version: v18.15.0

npm version: 9.6.2

### Clone repository

```bash
# After creating a new folder, execute the command
git clone https://github.com/peekdog/react-antd-typescript.git

```

### Execute the scripts in sequence

```bash
# Please pay attention to the node version and npm version I mentioned above. If an error is reported, please switch the node version and npm version (npm install npm@9.6.2 -g)
npm install
# If you use mock data, please install json-server first
npm install json-server -g
# mock service
npm run mock
# Start the project, default port 3000
npm start
```
## Available scripts

In the project directory, you can run:

### 'npm start'

Run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

If you make edits, the page will reload.
You will also see any lint errors in the console.

### 'npm run mock'

Start mock service

### 'npm test'

Start the test runner in interactive monitoring mode.
For more information, see the section about [Running Tests](https://facebook.github.io/create-react-app/docs/running-tests).

### 'npm run build'

Build the app for production into the Build folder.
It properly bundles React in production mode and optimizes the build for optimal performance.

The build is minified and the filename contains the hash.
Your app is ready to deploy!

For more information, see the section about deployment.

### 'npm run lint'

Line code static analysis tool command. It is used to run ESLint, a popular JavaScript and TypeScript code inspection tool.
The goal of lint is to help developers find and fix potential problems, style issues, and errors in the code to ensure code consistency and quality.

### 'npm run fix'

Automatically fix code style issues: ESLint can try to automatically fix some code style-related issues, such as indentation, spaces, brackets, etc.
This helps ensure that the coding style remains consistent throughout the project.

Automatically fix some potential problems: You can try to automatically fix some simple potential problems, such as unused variables, undefined variables, etc.
This helps identify and resolve common problems in advance

## 💎 Contributor (only me for now)

<span style="margin: 0 5px;" ><a href="https://github.com/peekdog" ><img src="https://avatars.githubusercontent.com/u/143068552?v=4 " /></a></span>


Copyright (c) 2023 peekdog