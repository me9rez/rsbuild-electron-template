export async function openUpdateWindow() {
    await window.electron.ipcRenderer.invoke('create-update-window')
}