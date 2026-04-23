const {contextBridge, ipcRenderer, shell} = require('electron');
const fs = require('fs');
const path = require('path');

const dataLocation = path.resolve(__dirname, '..', 'data', 'data.json');

contextBridge.exposeInMainWorld('electronAPI', {
  fs: {
    readFileSync: (filePath) => fs.readFileSync(filePath, 'utf8'),
    writeFileSync: (filePath, data) => fs.writeFileSync(filePath, data, 'utf8'),
    readDataJson: () => fs.readFileSync(dataLocation, 'utf8'),
    writeDataJson: (data) => fs.writeFileSync(dataLocation, data, 'utf8'),
  },
  path: {
    resolve: (...args) => path.resolve(...args),
    dirname: __dirname,
  },
  ipc: {
    sendSync: (channel, ...args) => {
      const validChannels = ['openInfoWindow', 'closeInfoWindow'];
      if (validChannels.includes(channel)) {
        return ipcRenderer.sendSync(channel, ...args);
      }
      return null;
    },
  },
  shell: {
    openExternal: (url) => shell.openExternal(url),
  },
  dataLocation: dataLocation,
});