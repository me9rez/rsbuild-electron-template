<div align="center" style="display:flex;gap:24px">
  <img src="https://svelte.dev/favicon.png" height="100"/>
    <img src="https://www.electronjs.org/assets/img/logo.svg" height="100" />
 <img src="https://assets.rspack.dev/rsbuild/rsbuild-logo.svg" height="100" />
</div>

---

# Rsbuild开发Electron示例项目

本项目是一个使用 Rsbuild 开发 Electron 应用的示例项目，集成了 Svelte 前端框架和 Prisma 数据库工具。

## 项目结构
- `src/`: 前端代码目录
  - `App.svelte`: 主应用组件
  - `index.ts`: 应用入口文件
  - `pages/`: 页面文件目录
- `electron/`: Electron 相关代码目录
  - `main.ts`: Electron 主进程文件
  - `preload.ts`: Electron 预加载脚本
- `prisma/`: Prisma 数据库配置目录
  - `schema.prisma`: Prisma 数据模型文件
  - `migrations/`: 数据库迁移文件目录
- `pages/`: HTML 模板文件目录
  - `template.html`: HTML 模板文件
- `rsbuild.config.ts`: Rsbuild 配置文件
- `parallel.config.ts`: 并行任务配置文件

## 安装依赖

```bash
pnpm install
```

## 启动开发服务器

```bash
pnpm dev
```

## 构建生产环境应用

```bash
pnpm build:win
```

## 数据库操作

### 初始化数据库模型

```bash
pnpm db-gen

```

### 执行数据库迁移

```bash
pnpm db-push
```

### 打开 Prisma Studio

```bash
pnpm db-studio
```

## 项目使用说明

1. 安装依赖后，使用 pnpm dev 命令启动开发服务器。
2. 开发完成后，使用 pnpm build:win 命令构建生产环境应用。
3. 数据库操作可以使用 pnpm db-gen、pnpm db-push 和 pnpm db-studio 命令。

## 注意事项

1. 请确保已经安装了 Node.js 和 pnpm。
2. 构建生产环境应用时，可能需要配置网络代理。
