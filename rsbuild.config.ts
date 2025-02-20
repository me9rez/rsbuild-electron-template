import { defineConfig, type OutputConfig, type EnvironmentConfig, HtmlRspackPlugin } from '@rsbuild/core'
import { pluginSvelte } from '@rsbuild/plugin-svelte';

const getElectronOutput = (type: "main" | "preload") => {
    const config: OutputConfig = {
        distPath: {
            root: `dist-electron/${type}`,
            js: './'
        },
        filenameHash: false,
        cleanDistPath: true,
        minify: false,
        sourceMap: false
    }
    return config
}

const getElectronInput = (type: "main" | "preload") => {
    const config: EnvironmentConfig = {
        source: {
            entry: {
                [type]: type === 'main' ? "./electron/main.ts" : "./electron/preload.ts"
            }
        },
        tools: {
            htmlPlugin: false,
            rspack: {
                target: type === 'main' ? "electron-main" : "electron-preload",
            }
        },
        output: getElectronOutput(type),
        performance: {
            chunkSplit: {
                strategy: "all-in-one"
            },
            buildCache: true
        },
        dev: {
            writeToDisk: true
        },
    }
    return config
}

export default defineConfig({
    environments: {
        "electron-main": getElectronInput('main'),
        "electron-preload": getElectronInput('preload'),
        "web": {
            plugins: [
                pluginSvelte(),
            ],
            source: {
                entry: {
                    home: "./src/index.ts",
                    update: "./src/pages/update.ts"
                }
            },
            output: {
                assetPrefix: "../",
                distPath: {
                    html: 'pages',
                    // 不指定这些静态文件位置，应用打包后路径映射错误
                    css: 'static',
                    font: 'static',
                    image: 'static',
                    js: 'static',
                }
            },
            html: {
                template: "./pages/template.html"
            },
            tools: {
                rspack: {
                    target: "web",
                    dependencies: ["electron-main", "electron-preload"]
                }
            },
            performance: {
                buildCache: true
            }
        },
    },
})