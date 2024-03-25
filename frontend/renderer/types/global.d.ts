interface IpcRenderer {
  send: (channel: string, ...args: any[]) => void;
  on: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => void;
  off: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => void;
}

declare global {
  interface Window {
    ipc: IpcRenderer;
  }
}

export {};