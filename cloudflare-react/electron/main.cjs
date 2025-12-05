const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

// Визначаємо чи це development режим
const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

// Шлях до ресурсів залежить від режиму
const getAssetPath = (...paths) => {
  if (isDev) {
    return path.join(__dirname, '..', ...paths);
  }
  // В production - шлях відносно app.asar
  return path.join(app.getAppPath(), ...paths);
};

let mainWindow;

function createWindow() {
  // Створюємо вікно браузера
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    icon: getAssetPath('public', 'vite.svg'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs')
    },
    // Красиві налаштування вікна
    titleBarStyle: 'default',
    show: false, // Показуємо після завантаження
  });

  // Показуємо вікно коли готове (уникає білого екрану)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // DevTools вимкнено в production
  });

  // Завантажуємо додаток
  if (isDev) {
    // В режимі розробки - локальний сервер Vite
    mainWindow.loadURL('http://localhost:5173');
    // DevTools тільки в dev режимі
    mainWindow.webContents.openDevTools();
  } else {
    // В production - збілдовані файли (без DevTools)
    const indexPath = getAssetPath('dist', 'index.html');
    mainWindow.loadFile(indexPath);
  }

  // Відкриваємо зовнішні посилання в браузері
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Створюємо меню додатку
function createMenu() {
  const template = [
    {
      label: 'Файл',
      submenu: [
        {
          label: 'Оновити',
          accelerator: 'CmdOrCtrl+R',
          click: () => mainWindow?.reload()
        },
        { type: 'separator' },
        {
          label: 'Вийти',
          accelerator: 'CmdOrCtrl+Q',
          click: () => app.quit()
        }
      ]
    },
    {
      label: 'Редагування',
      submenu: [
        { label: 'Скасувати', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
        { label: 'Повторити', accelerator: 'CmdOrCtrl+Y', role: 'redo' },
        { type: 'separator' },
        { label: 'Вирізати', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Копіювати', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Вставити', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { label: 'Виділити все', accelerator: 'CmdOrCtrl+A', role: 'selectAll' }
      ]
    },
    {
      label: 'Вигляд',
      submenu: [
        {
          label: 'Збільшити',
          accelerator: 'CmdOrCtrl+Plus',
          click: () => {
            const currentZoom = mainWindow?.webContents.getZoomFactor() || 1;
            mainWindow?.webContents.setZoomFactor(currentZoom + 0.1);
          }
        },
        {
          label: 'Зменшити',
          accelerator: 'CmdOrCtrl+-',
          click: () => {
            const currentZoom = mainWindow?.webContents.getZoomFactor() || 1;
            mainWindow?.webContents.setZoomFactor(Math.max(0.5, currentZoom - 0.1));
          }
        },
        {
          label: 'Скинути масштаб',
          accelerator: 'CmdOrCtrl+0',
          click: () => mainWindow?.webContents.setZoomFactor(1)
        },
        { type: 'separator' },
        {
          label: 'На весь екран',
          accelerator: 'F11',
          click: () => mainWindow?.setFullScreen(!mainWindow?.isFullScreen())
        }
      ]
    },
    {
      label: 'Допомога',
      submenu: [
        {
          label: 'Про програму',
          click: () => {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Про програму',
              message: 'Розрахунок фінансування доріг',
              detail: 'Версія 1.0.0\n\nПрограма для розрахунку обсягу фінансування експлуатаційного утримання автомобільних доріг України.\n\n© 2024'
            });
          }
        },
        { type: 'separator' },
        {
          label: 'Інструменти розробника',
          accelerator: 'F12',
          click: () => mainWindow?.webContents.toggleDevTools()
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// Коли Electron готовий
app.whenReady().then(() => {
  createWindow();
  // ✅ Прибираємо стандартне меню в production
  if (!isDev) {
    Menu.setApplicationMenu(null);
  } else {
    createMenu();
  }

  app.on('activate', () => {
    // На macOS перестворюємо вікно при кліку на іконку в dock
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Закриваємо додаток коли всі вікна закриті (крім macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Безпека: забороняємо навігацію на зовнішні URL
app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);
    if (parsedUrl.origin !== 'http://localhost:5173' && !navigationUrl.startsWith('file://')) {
      event.preventDefault();
    }
  });
});


