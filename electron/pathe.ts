import path from "path";
import { app } from 'electron'

const isDev = !app.isPackaged

export const APP_ROOT = path.join(__dirname, '../..')
export const MAIN_DIST = path.join(APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(APP_ROOT, 'dist')

export const dbPath = isDev ? "dev.db" : path.join(APP_ROOT, './prisma/dev.db')