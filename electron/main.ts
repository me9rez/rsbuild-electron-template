import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
import log from 'electron-log/main'
import { insert, query } from './util'
import { APP_ROOT, MAIN_DIST, RENDERER_DIST } from './pathe'

const logPath = path.join(app.getPath('documents'), `${app.getName()}`, `logs/test.log`)

log.transports.file.resolvePathFn = () => logPath
log.initialize();

const createLogger = (id: string) => {
  const anotherLogger = log.create({ logId: id });
  anotherLogger.transports.file.resolvePathFn = () => logPath
  anotherLogger.initialize({ preload: true })
  return anotherLogger
}

const logger = createLogger(app.getName())

// const require = createRequire(import.meta.url)
// const __dirname = path.dirname(fileURLToPath(import.meta.url))


// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │



async function createWindow(name: "home" | "update") {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(MAIN_DIST, './preload/preload.js'),
    },
    autoHideMenuBar: true,
    title: name
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  await loadPage(win, name)
}


async function loadPage(win: BrowserWindow, name: "home" | "update") {
  if (app.isPackaged) {
    await win.loadFile(path.join(RENDERER_DIST, "pages", `${name}.html`))
  } else {
    await win.loadURL(`http://localhost:3000/pages/${name}.html`)
    win.webContents.openDevTools()
  }
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', async () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    await createWindow("home")
  }
})

app.whenReady().then(async () => {
  await createWindow("home")
  handleIPC()
})


function handleIPC() {
  ipcMain.handle('save-log', () => {
    log.info('save-log');
  })
  ipcMain.handle('create-update-window', async () => {
    await createWindow('update')
  })
  ipcMain.handle('insert', async (evt, ...args) => {
    return await insert(args)
  })
  ipcMain.handle('query', async (evt, ...args) => {
    return await query()
  })
}
