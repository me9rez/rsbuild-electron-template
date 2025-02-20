build-dir: build
    pnpm cross-env HTTPS_PROXY=http://127.0.0.1:7890 && pnpm electron-builder --dir

build-win: build
    pnpm cross-env HTTPS_PROXY=http://127.0.0.1:7890 && pnpm electron-builder --win

build:
    pnpm rimraf dist dist-electron
    pnpm rsbuild build

dev:
    pnpm rimraf dist-electron
    pnpm dev

preview:
    just build
    pnpm electron ./dist-electron/main/main.js