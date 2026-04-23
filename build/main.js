const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const ipc = electron.ipcMain;
const path = require('path');

let appWindow = null;
let infoWindow = null;

app.on('ready', () => {
  appWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    show: false,
  });
  appWindow.loadURL(`file://${__dirname}/index.html`);

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    show: false,
  });
  infoWindow.loadURL(`file://${__dirname}/info.html`);

  appWindow.once('ready-to-show', () => {
    appWindow.show();
    // setTimeout(() => {
    //   infoWindow.show();
    //   setTimeout(() => {
    //     infoWindow.hide();
    //   }, 3000);
    // }, 1000);
  }); // ready-to-show

  ipc.on('closeInfoWindow', (event) => {
    event.returnValue = '';
    infoWindow.hide();
  }); // closeInfoWindow
}); // app is ready
