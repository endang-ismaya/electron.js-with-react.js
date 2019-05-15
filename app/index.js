const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const ipc = electron.ipcMain;

let appWindow = null;
let infoWindow = null;

app.on('ready', () => {
  appWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
  }); // appWindow
  appWindow.loadURL('http://eranris.com');

  infoWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
  }); // infoWindow
  infoWindow.loadURL(`file://${__dirname}/info.html`);

  appWindow.once('ready-to-show', () => {
    appWindow.show();
    setTimeout(() => {
      infoWindow.show();
      // setTimeout(() => {
      //   infoWindow.hide();
      // }, 3000);
    }, 1000);
  }); // ready-to-show

  ipc.on('closeInfoWindow', (event) => {
    event.returnValue = '';
    infoWindow.hide();
  }); // closeInfoWindow
}); // app is ready
