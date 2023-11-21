# rush-kit
English | [简体中文](https://github.com/peekdog/react-antd-typescript/blob/main/README.Zh-cn.md)

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