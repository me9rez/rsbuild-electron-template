import { ElectronAPI, IpcRenderer } from '@electron-toolkit/preload'
import { type Logger } from 'electron-log'

declare namespace NodeJS {
  interface ProcessEnv {
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

