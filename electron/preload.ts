import { ipcRenderer, contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import 'electron-log/preload'

contextBridge.exposeInMainWorld('electron', electronAPI)