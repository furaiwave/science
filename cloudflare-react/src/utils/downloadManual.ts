// Функция для скачивания готового файла инструкции из папки docs
export function downloadReadyManual() {
  // Путь к готовому файлу в папке docs
  const filePath = '/docs/Інструкція_користувача.docx';
  
  // Создаём ссылку для скачивания
  const link = document.createElement('a');
  link.href = filePath;
  link.download = `Інструкція_користувача_${new Date().toISOString().split('T')[0]}.docx`;
  
  // Триггерим скачивание
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

