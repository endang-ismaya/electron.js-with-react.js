const {BrowserWindow, app, ipcMain} = require('electron');
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
  appWindow.loadURL(`file://${__dirname}/html/index.html`);

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
  infoWindow.loadURL(`file://${__dirname}/html/info.html`);

  appWindow.once('ready-to-show', () => {
    appWindow.show();
  });

  ipcMain.on('closeInfoWindow', (event) => {
    event.returnValue = '';
    infoWindow.hide();
  });

  ipcMain.on('openInfoWindow', (event) => {
    infoWindow.show();
    event.returnValue = '';
  });
});