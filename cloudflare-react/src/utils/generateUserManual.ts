import { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';

export async function generateUserManual() {
  const doc = new Document({
    sections: [
      // ТИТУЛЬНА СТОРІНКА
      {
        properties: {},
        children: [
          new Paragraph({ text: "", spacing: { after: 500 } }),
          new Paragraph({ text: "", spacing: { after: 500 } }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "ІНСТРУКЦІЯ КОРИСТУВАЧА",
                bold: true,
                size: 32,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програмний комплекс для розрахунку бюджетного фінансування автомобільних доріг",
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 900 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: `${new Date().toLocaleDateString('uk-UA')}`,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
          }),
        ]
      },
      
      // РОЗДІЛ 1: ЗАГАЛЬНА ІНФОРМАЦІЯ
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "1. ЗАГАЛЬНА ІНФОРМАЦІЯ",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1.1. Призначення програми",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програмний комплекс призначений для автоматизації розрахунків бюджетного фінансування автомобільних доріг згідно з діючими методиками та нормативними документами України.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма дозволяє:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 150, after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "- Розраховувати обсяг бюджетного фінансування для державних та місцевих доріг;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Визначати нормативи експлуатаційного утримання доріг з урахуванням регіональних коефіцієнтів;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Планувати ремонти та реконструкцію доріг на основі технічних показників;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Зберігати історію розрахунків та експортувати результати.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1.2. Системні вимоги",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Мінімальні вимоги:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "- Веб-браузер: Google Chrome 90+, Mozilla Firefox 88+, Microsoft Edge 90+;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Оперативна пам'ять: мінімум 4 ГБ;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Роздільна здатність екрану: мінімум 1366x768 пікселів;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Підключення до Інтернету;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Включений JavaScript у браузері.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Рекомендовані вимоги:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "- Google Chrome версії 100+ (найкраща сумісність);",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- 8 ГБ оперативної пам'яті;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Full HD екран (1920x1080) для комфортної роботи.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
        ]
      },
      
      // РОЗДІЛ 2: ПОЧАТОК РОБОТИ
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "2. ПОЧАТОК РОБОТИ",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "2.1. Вхід до системи",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1. Відкрийте веб-браузер та перейдіть за адресою програми.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2. На головній сторінці з'являться доступні розділи програми.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3. Оберіть необхідний розділ з меню навігації.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "2.2. Структура програми",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма складається з основних розділів:",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Розділ I. Бюджетне фінансування доріг",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Розрахунок Q1 (державні дороги) та Q2 (місцеві дороги).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Розділ II. Експлуатаційне утримання",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Розрахунок нормативів утримання з урахуванням коефіцієнтів.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Розділ III. Планування ремонтів",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Аналіз технічного стану та розрахунок вартості робіт.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Історія розрахунків",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Перегляд збережених результатів та експорт даних.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
        ]
      },
      
      // РОЗДІЛ 3: БЮДЖЕТНЕ ФІНАНСУВАННЯ
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "3. РОЗДІЛ I: БЮДЖЕТНЕ ФІНАНСУВАННЯ",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "3.1. Державні дороги (Q1)",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Крок 1. Введення даних",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 150, after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "У таблиці \"Державні дороги загального користування\" введіть значення для кожного показника:",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "- Показники бюджетного фінансування (Q11 - Q18);",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Нормативні документи для кожного показника;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Завантаження файлів-підтверджень (за необхідності).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Крок 2. Розрахунок",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 150, after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Після введення даних натисніть кнопку \"Розрахувати\".",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 120 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма автоматично:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 120 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "- Перевірить коректність введених даних;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Виконає розрахунок за формулою;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Відобразить результат у виділеному блоці.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Q1 = Σ(Q11 + Q12 + Q13 + ... + Q18)",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 150 }
          }),
          
          new Paragraph({ text: "", spacing: { after: 250 } }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "3.2. Місцеві дороги (Q2)",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Аналогічно розділу 3.1, заповніть таблицю для місцевих доріг з показниками Q21 - Q28 та виконайте розрахунок.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "3.3. Загальний бюджет",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Після розрахунку Q1 та Q2, програма автоматично обчислить загальний бюджет:",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Q = Q1 + Q2",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "ВАЖЛИВО: ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "Дані з Розділу I автоматично передаються в наступні розділи.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { before: 200, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "3.4. Детальний опис показників",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Показники для державних доріг:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 150, after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q11 - Утримання доріг державного значення", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Включає витрати на поточне утримання автомобільних доріг. Розраховується на основі протяжності доріг та нормативів утримання.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q12 - Поточний ремонт", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Витрати на ремонт ямкових вибоїн, тріщин, вирівнювання поверхні.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q13 - Капітальний ремонт", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Витрати на відновлення транспортно-експлуатаційних характеристик дороги: заміна дорожнього одягу.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q14 - Реконструкція", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Витрати на підвищення категорії дороги, розширення проїзної частини.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q15 - Нове будівництво", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q16 - Штучні споруди", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q17 - Служби", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q18 - Інші витрати", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "3.5. Приклад розрахунку",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q11 (Утримання) = 150 000 тис. грн", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q12 (Поточний ремонт) = 85 000 тис. грн", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q13 (Капітальний ремонт) = 120 000 тис. грн", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "... інші показники ...",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q1 = 950 000 тис. грн", font: "Times New Roman", size: 28, bold: true })
            ],
            spacing: { before: 150, after: 150 }
          }),
        ]
      },
      
      // РОЗДІЛ 4: ЕКСПЛУАТАЦІЙНЕ УТРИМАННЯ
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "4. РОЗДІЛ II: ЕКСПЛУАТАЦІЙНЕ УТРИМАННЯ",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "4.1. Вибір параметрів",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1. Виберіть тип доріг:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Державні дороги - для розрахунку нормативів державних доріг;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Місцеві дороги - для розрахунку нормативів місцевих доріг.", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "2. Оберіть область (регіон)",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Для кожної області застосовуються індивідуальні коригувальні коефіцієнти.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "4.2. Введення індексів інфляції",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Введіть індекси інфляції для кожного року. Програма автоматично розрахує:",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Добуток індексів інфляції;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Коригування базового нормативу на інфляцію.", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "4.3. Результати розрахунку",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма виведе:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Нормативи для кожної категорії доріг (I-V);", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Загальне фінансування з урахуванням протяжності доріг;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Детальну таблицю з регіональними результатами;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Таблицю коригувальних коефіцієнтів.", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 250 }
          }),
        ]
      },
      
      // РОЗДІЛ 5: ПЛАНУВАННЯ РЕМОНТІВ
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "5. РОЗДІЛ III: ПЛАНУВАННЯ РЕМОНТІВ",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "5.1. Введення даних про ділянки доріг",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Для кожної ділянки введіть наступні дані:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Найменування ділянки дороги",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 150, after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Класифікація доріг:",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- М-XX - міжнародні дороги (М-01, М-05, М-06);", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Н-XX - національні дороги (Н-01, Н-14);", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Р-XX - регіональні дороги (Р-06, Р-15).", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Протяжність (км)",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 150, after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Довжина ділянки в кілометрах. Діапазон: 0.1 - 1000 км.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Категорія дороги",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 150, after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- I - автомагістралі, 150 км/год;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- II - висока інтенсивність, 120 км/год;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- III - середня інтенсивність, 100 км/год;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- IV-V - низька інтенсивність, 60-80 км/год.", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Інтенсивність руху - ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "середньодобова інтенсивність (авт./добу).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Модуль пружності - ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "характеристика міцності покриття (МПа).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Рівність покриття - ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "якість дорожнього покриття (м/км або см/км).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Глибина колії - ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "максимальна глибина колій (мм).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Коефіцієнт зчеплення - ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "протиковзкі властивості (мінімум 0.35).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "5.2. Визначення виду робіт",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма автоматично визначає вид робіт:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "- Реконструкція - якщо інтенсивність перевищує допустиму;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Капітальний ремонт - якщо міцність нижче нормативу;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- Поточний ремонт - якщо рівність або зчеплення нижче норми.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "5.3. Розрахунок вартості робіт",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Формула розрахунку:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Вартість = Базова вартість × Протяжність",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Приклад розрахунку:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 250, after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Дорога М-05, категорія II, протяжність 456 км",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Вид робіт: Капітальний ремонт",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Базова вартість капремонту для II категорії = 15 000 тис. грн/км",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Вартість = 15 000 × 456 = 6 840 000 тис. грн",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { before: 150, after: 150 }
          }),
          
          new Paragraph({ text: "", spacing: { after: 250 } }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Базові нормативи вартості робіт (тис. грн/км):",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 8, color: "000000" },
              bottom: { style: BorderStyle.SINGLE, size: 8, color: "000000" },
              left: { style: BorderStyle.SINGLE, size: 8, color: "000000" },
              right: { style: BorderStyle.SINGLE, size: 8, color: "000000" },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
              insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "000000" }
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "Вид робіт", bold: true, font: "Times New Roman", size: 28 })],
                      alignment: AlignmentType.CENTER
                    })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "I", bold: true, font: "Times New Roman", size: 28 })],
                      alignment: AlignmentType.CENTER
                    })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "II", bold: true, font: "Times New Roman", size: 28 })],
                      alignment: AlignmentType.CENTER
                    })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "III", bold: true, font: "Times New Roman", size: 28 })],
                      alignment: AlignmentType.CENTER
                    })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "IV", bold: true, font: "Times New Roman", size: 28 })],
                      alignment: AlignmentType.CENTER
                    })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "V", bold: true, font: "Times New Roman", size: 28 })],
                      alignment: AlignmentType.CENTER
                    })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "Реконструкція", font: "Times New Roman", size: 28 })]
                    })]
                  }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "60 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "50 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "35 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "28 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "22 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "Капітальний ремонт", font: "Times New Roman", size: 28 })]
                    })]
                  }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "18 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "15 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "9 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "7 000", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "Поточний ремонт", font: "Times New Roman", size: 28 })]
                    })]
                  }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3 500", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2 500", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1 800", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1 200", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "900", font: "Times New Roman", size: 28 })], alignment: AlignmentType.CENTER })] })
                ]
              })
            ]
          }),
        ]
      },
      
      // РОЗДІЛ 6: ІСТОРІЯ РОЗРАХУНКІВ
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "6. ІСТОРІЯ РОЗРАХУНКІВ",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "6.1. Перегляд збережених розрахунків",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Усі розрахунки автоматично зберігаються. Для перегляду:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1. Відкрийте розділ \"Історія розрахунків\".",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2. У списку відображаються всі збережені сесії з датою та статусом.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3. Натисніть \"Перегляд\" для детального перегляду.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "6.2. Фільтрація за датами",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "- За роками - перегляд всіх розрахунків за обраний рік;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- За місяцями - фільтрація по місяцях вибраного року;",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "- За днями - точний пошук за конкретну дату.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "6.3. Детальний перегляд сесії",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "При відкритті сесії відображається:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "- Результати бюджетного фінансування (Q1, Q2, загальний бюджет);", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Детальні таблиці з показниками;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Нормативи експлуатаційного утримання;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Регіональні результати по всіх областях України;", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "- Результати планування ремонтів з вартістю.", font: "Times New Roman", size: 28 })
            ],
            spacing: { after: 250 }
          }),
        ]
      },
      
      // РОЗДІЛ 7: ЕКСПОРТ ДАНИХ
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "7. ЕКСПОРТ ДАНИХ",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "7.1. Збереження результатів",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма дозволяє експортувати результати для подальшого використання:",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1. Натисніть кнопку \"Експорт\" у відповідному розділі.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2. Файл автоматично завантажиться на ваш комп'ютер.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3. Відкрийте файл у відповідній програмі для перегляду.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "7.2. Друк результатів",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Для друку результатів:",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1. Відкрийте потрібний розділ з результатами.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2. Використайте функцію друку браузера (Ctrl+P).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3. Налаштуйте параметри та відправте на принтер або збережіть.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
        ]
      },
      
      // РОЗДІЛ 8: МОЖЛИВІ ПОМИЛКИ
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "8. МОЖЛИВІ ПОМИЛКИ ТА ЇХ ВИРІШЕННЯ",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 300 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "8.1. Помилки введення",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "\"Заповніть всі обов'язкові поля\"",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Рішення: ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "Перевірте чи заповнені всі обов'язкові поля (позначені червоним).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "\"Некоректне значення\"",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Рішення: ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "Використовуйте тільки числа та десяткову крапку (не кому).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "8.2. Проблеми з браузером",
                bold: true,
                size: 28,
                font: "Times New Roman"
              })
            ],
            spacing: { before: 250, after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Повільна робота програми",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Рішення: ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "Закрийте інші вкладки, очистіть кеш (Ctrl+Shift+Delete), перезавантажте сторінку (F5).",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Дані не зберігаються",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Рішення: ",
                font: "Times New Roman",
                size: 28,
                bold: true
              }),
              new TextRun({
                text: "Не використовуйте режим інкогніто. Регулярно експортуйте важливі розрахунки.",
                font: "Times New Roman",
                size: 28
              })
            ],
            spacing: { after: 400 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "КІНЕЦЬ ІНСТРУКЦІЇ",
                font: "Times New Roman",
                size: 28,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 500, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: `© ${new Date().getFullYear()} | Документ згенеровано: ${new Date().toLocaleString('uk-UA')}`,
                font: "Times New Roman",
                size: 28
              })
            ],
            alignment: AlignmentType.CENTER,
          }),
        ]
      }
    ]
  });

  // Генеруємо та зберігаємо файл
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `Інструкція_користувача_${new Date().toISOString().split('T')[0]}.docx`);
}
