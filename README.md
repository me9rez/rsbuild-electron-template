<div align="center" style="display:flex;gap:24px">
  <img src="https://svelte.dev/favicon.png" height="100"/>
    <img src="https://www.electronjs.org/assets/img/logo.svg" height="100" />
 <img src="https://assets.rspack.dev/rsbuild/rsbuild-logo.svg" height="100" />
</div>

---

# Rsbuild构建Electron应用模板

本项目是一个使用 Rsbuild 开发 Electron 应用的示例项目，集成了 Svelte 前端框架和 Prisma 数据库工具。该项目提供了一个完整的 Electron 应用开发模板，包含现代化的前端框架、数据库集成和构建工具链。

## ✨ 功能特性

- 🚀 **现代化构建工具**: 使用 Rsbuild 作为构建工具，提供快速的开发体验
- 🎨 **Svelte 前端框架**: 采用 Svelte 5 作为前端框架，提供响应式和组件化的开发体验
- 🖥️ **Electron 桌面应用**: 基于 Electron 37，支持跨平台桌面应用开发
- 🗄️ **数据库集成**: 集成 Prisma ORM 和 SQLite 数据库，提供完整的数据操作能力
- 🔧 **开发工具**: 集成 Prisma Studio 数据库管理工具
- 📝 **日志系统**: 内置 electron-log 日志系统，支持主进程和渲染进程日志记录
- 🔄 **热重载**: 支持开发时的热重载功能
- 📦 **打包构建**: 支持 Windows 平台的打包构建

## 🏗️ 项目结构

```
rsbuild-electron-template/
├── src/                    # 前端源代码目录
│   ├── App.svelte         # 主应用组件
│   ├── index.ts           # 应用入口文件
│   ├── pages/             # 页面文件目录
│   │   └── update.ts      # 更新页面
│   └── utils/             # 工具函数目录
│       └── index.ts       # 工具函数
├── electron/              # Electron 相关代码目录
│   ├── main.ts            # Electron 主进程文件
│   ├── preload.ts         # Electron 预加载脚本
│   ├── util.ts            # 数据库操作工具函数
│   ├── pathe.ts           # 路径配置文件
│   └── electron-env.d.ts  # Electron 环境类型定义
├── prisma/                # Prisma 数据库配置目录
│   ├── schema.prisma      # Prisma 数据模型文件
│   ├── migrations/        # 数据库迁移文件目录
│   │   └── 20250213072239_init_db/
│   ├── migration_lock.toml # 迁移锁定文件
│   └── dev.db             # 开发环境数据库文件
├── pages/                 # HTML 模板文件目录
│   └── template.html      # HTML 模板文件
├── rsbuild.config.ts      # Rsbuild 配置文件
├── parallel.config.ts     # 并行任务配置文件
├── electron-builder.json5 # Electron Builder 配置文件
├── package.json           # 项目依赖和脚本配置
├── tsconfig.json          # TypeScript 配置文件
├── justfile              # Just 构建工具配置文件
└── README.md             # 项目说明文档
```

## 🛠️ 技术栈

### 前端技术
- **Svelte 5**: 现代化的前端框架，提供响应式和组件化的开发体验
- **TypeScript**: 类型安全的 JavaScript 超集
- **Rsbuild**: 基于 Rspack 的现代化构建工具
- **@faker-js/faker**: 用于生成测试数据的库

### 后端技术
- **Electron 37**: 跨平台桌面应用开发框架
- **Prisma**: 现代化的数据库 ORM
- **SQLite**: 轻量级的关系型数据库
- **electron-log**: Electron 日志系统

### 开发工具
- **Prisma Studio**: 数据库可视化管理工具
- **parallel-wait-run**: 并行任务运行工具
- **electron-builder**: Electron 应用打包工具

## 📦 安装依赖

### 环境要求
- Node.js >= 24.0.0
- pnpm >= 10.0.0

### 安装步骤

```bash
# 克隆项目
git clone <repository-url>
cd rsbuild-electron-template

# 安装依赖
pnpm install
```

## 🚀 开发指南

### 启动开发服务器

```bash
# 启动开发环境（同时启动前端和 Electron）
pnpm dev
```

或者分别启动：

```bash
# 启动前端开发服务器
pnpm dev:renderer

# 启动 Electron 主进程
pnpm dev:main
```

### 数据库操作

#### 初始化数据库模型

```bash
# 生成 Prisma 客户端和数据库模型
pnpm db-gen
```

#### 执行数据库迁移

```bash
# 创建并应用数据库迁移
pnpm db-push
```

#### 打开 Prisma Studio

```bash
# 启动数据库管理界面
pnpm db-studio
```

### 应用功能演示

项目包含了一个完整的用户管理功能演示：

1. **用户数据生成**: 使用 Faker.js 生成随机用户数据
2. **用户数据插入**: 将用户数据保存到 SQLite 数据库
3. **用户数据查询**: 从数据库查询并显示用户列表
4. **日志记录**: 演示主进程和渲染进程的日志记录功能

## 🏭 构建和部署

### 构建生产环境应用

```bash
# 构建所有环境
pnpm build

# 构建 Windows 平台应用
pnpm build:win

# 构建目录版本（不打包）
pnpm build:dir
```

### 使用 Just 构建工具

项目还提供了 Just 构建工具的配置：

```bash
# 构建目录版本
just build-dir

# 构建 Windows 平台
just build-win

# 预览应用
just preview
```

### 预览生产环境应用

```bash
# 构建并预览应用
just preview
```

## 🔧 配置说明

### 环境配置

项目支持开发环境和生产环境的不同配置：

- `.env.development`: 开发环境配置
- `.env.production`: 生产环境配置

### Rsbuild 配置

`rsbuild.config.ts` 文件包含了完整的构建配置：

- **electron-main**: Electron 主进程构建配置
- **electron-preload**: Electron 预加载脚本构建配置
- **web**: 前端 Web 应用构建配置

### Electron Builder 配置

`electron-builder.json5` 文件包含了应用打包配置：

- 支持 Windows 平台打包
- 包含 Prisma 相关依赖
- 配置了额外的资源文件

## 📋 项目使用说明

### 开发流程

1. **环境准备**: 确保安装了 Node.js 和 pnpm
2. **依赖安装**: 运行 `pnpm install` 安装项目依赖
3. **数据库初始化**: 运行 `pnpm db-gen` 和 `pnpm db-push` 初始化数据库
4. **开发调试**: 运行 `pnpm dev` 启动开发环境
5. **功能测试**: 测试用户管理功能和日志记录功能
6. **生产构建**: 运行 `pnpm build:win` 构建生产版本

### 主要功能模块

#### 用户管理模块
- 位置：`src/App.svelte`
- 功能：用户数据的生成、插入、查询和显示
- 数据库：使用 Prisma 操作 SQLite 数据库

#### 日志系统
- 位置：`electron/main.ts`
- 功能：支持主进程和渲染进程的日志记录
- 日志文件：保存在用户文档目录下的应用日志文件夹中

#### IPC 通信
- 位置：`electron/main.ts` 和 `electron/preload.ts`
- 功能：主进程和渲染进程之间的通信
- 支持的操作：数据库插入、查询、日志保存、窗口创建

## ⚠️ 注意事项

### 环境要求
1. 请确保已经安装了 Node.js (>= 24.0.0) 和 pnpm (>= 10.0.0)
2. Windows 用户建议使用 PowerShell 或 CMD 运行命令

### 网络配置
1. 构建生产环境应用时，可能需要配置网络代理（特别是在中国大陆地区）
2. 项目配置了 npm 镜像源以加速依赖下载

### 数据库注意事项
1. 开发环境使用 `dev.db` 作为数据库文件
2. 生产环境数据库文件会打包到应用中
3. 数据库迁移文件需要纳入版本控制

### 开发注意事项
1. 开发时会自动打开开发者工具
2. 修改代码后支持热重载
3. 数据库结构变更需要重新运行迁移命令

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Svelte](https://svelte.dev/) - 现代化的前端框架
- [Electron](https://www.electronjs.org/) - 跨平台桌面应用框架
- [Rsbuild](https://rsbuild.dev/) - 现代化的构建工具
- [Prisma](https://www.prisma.io/) - 现代化的数据库 ORM
- [Faker](https://fakerjs.dev/) - 测试数据生成库
