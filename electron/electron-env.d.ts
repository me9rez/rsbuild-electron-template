import { ElectronAPI, IpcRenderer } from '@electron-toolkit/preload'
import { type Logger } from 'electron-log'

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │
     * ```
     */
    APP_ROOT: string
    /** /dist/ or /public/ */
    VITE_PUBLIC: string
  }

  interface Process {
    electronApp: import('node:child_process').ChildProcess
  }
}

// Used in Renderer process, expose in `preload.ts`
declare global {
  interface Window {
    electron: ElectronAPI,
    __electronLog: Logger & {
      sendToMain:any
    }
  }
}

