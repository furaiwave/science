// Preload скрипт - запускається перед рендерером
// Забезпечує безпечний міст між Node.js та браузером

const { contextBridge, ipcRenderer } = require('electron');

// Експонуємо безпечний API для renderer процесу
contextBridge.exposeInMainWorld('electronAPI', {
  // Інформація про платформу
  platform: process.platform,
  
  // Версії
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron
  },
  
  // Перевірка чи це Electron
  isElectron: true
});

// Логування при завантаженні
console.log('🖥️ Electron preload script loaded');
console.log('📦 Node.js version:', process.versions.node);
console.log('⚡ Electron version:', process.versions.electron);


