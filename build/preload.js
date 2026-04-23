const { contextBridge, ipcRenderer, shell } = require('electron');
const fs = require('fs');
const path = require('path');

// Resolve data location relative to preload script location
const dataLocation = path.resolve(__dirname, '..', 'data', 'data.json');

// Expose protected methods that allow the renderer process to use
// Node.js APIs without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // File system operations
  fs: {
    readFileSync: (filePath) => {
      return fs.readFileSync(filePath, 'utf8');
    },
    writeFileSync: (filePath, data) => {
      fs.writeFileSync(filePath, data, 'utf8');
    },
    readDataJson: () => {
      return fs.readFileSync(dataLocation, 'utf8');
    },
    writeDataJson: (data) => {
      fs.writeFileSync(dataLocation, data, 'utf8');
    },
  },
  
  // Path operations
  path: {
    resolve: (...args) => path.resolve(...args),
    dirname: __dirname,
  },
  
  // IPC communication
  ipc: {
    sendSync: (channel, ...args) => {
      // Whitelist valid channels for security
      const validChannels = ['openInfoWindow', 'closeInfoWindow'];
      if (validChannels.includes(channel)) {
        return ipcRenderer.sendSync(channel, ...args);
      }
      return null;
    },
    on: (channel, callback) => {
      const validChannels = ['closeInfoWindow'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => callback(...args));
      }
    },
  },
  
  // Shell operations
  shell: {
    openExternal: (url) => {
      return shell.openExternal(url);
    },
  },
  
  // Data location (exposed for reference)
  dataLocation: dataLocation,
});