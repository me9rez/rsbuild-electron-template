build-dir: build
    pnpm electron-builder --dir

build-win: build
    pnpm electron-builder --win

build:
    pnpm rimraf dist dist-electron
    pnpm rsbuild build

dev:
    pnpm rimraf dist-electron
    pnpm dev

preview:
    just build
    pnpm electron ./dist-electron/main/main.js