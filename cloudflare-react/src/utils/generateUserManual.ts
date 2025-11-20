import { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';

export async function generateUserManual() {
  const doc = new Document({
    sections: [
      // ═══════════════════════════════════════════════════════════
      // ТИТУЛЬНА СТОРІНКА
      // ═══════════════════════════════════════════════════════════
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
                size: 52,
                font: "Calibri",
                color: "1F4E78"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програмний комплекс для розрахунку",
                size: 34,
                font: "Calibri",
                color: "2E75B6"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "бюджетного фінансування",
                size: 34,
                font: "Calibri",
                color: "2E75B6"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "автомобільних доріг",
                size: 34,
                font: "Calibri",
                color: "2E75B6"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 900 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: `${new Date().toLocaleDateString('uk-UA')}`,
                size: 30,
                font: "Calibri",
                bold: true,
                color: "666666"
              })
            ],
            alignment: AlignmentType.CENTER,
          }),
        ]
      },
      
      // ═══════════════════════════════════════════════════════════
      // РОЗДІЛ 1: ЗАГАЛЬНА ІНФОРМАЦІЯ
      // ═══════════════════════════════════════════════════════════
      {
        properties: {},
        children: [
          new Paragraph({
            text: "1. ЗАГАЛЬНА ІНФОРМАЦІЯ",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 350 }
          }),
          
          new Paragraph({
            text: "1.1. Призначення програми",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програмний комплекс призначений для автоматизації розрахунків бюджетного фінансування автомобільних доріг згідно з діючими методиками та нормативними документами України.",
                font: "Calibri",
                size: 26
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "Програма дозволяє:",
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "✓ Розраховувати обсяг бюджетного фінансування для державних та місцевих доріг",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "✓ Визначати нормативи експлуатаційного утримання доріг з урахуванням регіональних коефіцієнтів",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "✓ Планувати ремонти та реконструкцію доріг на основі технічних показників",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "✓ Зберігати історію розрахунків та експортувати результати",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "1.2. Системні вимоги",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Мінімальні вимоги:",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "1F4E78"
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "• Веб-браузер: Google Chrome 90+, Mozilla Firefox 88+, Microsoft Edge 90+",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Оперативна пам'ять: мінімум 4 ГБ",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Роздільна здатність екрану: мінімум 1366x768 пікселів",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Підключення до Інтернету",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Включений JavaScript у браузері",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Рекомендовані вимоги:",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "16A34A"
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "• Google Chrome версії 100+ (найкраща сумісність)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• 8 ГБ оперативної пам'яті",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Full HD екран (1920x1080) для комфортної роботи",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
        ]
      },
      
      // ═══════════════════════════════════════════════════════════
      // РОЗДІЛ 2: ПОЧАТОК РОБОТИ
      // ═══════════════════════════════════════════════════════════
      {
        properties: {},
        children: [
          new Paragraph({
            text: "2. ПОЧАТОК РОБОТИ",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 350 }
          }),
          
          new Paragraph({
            text: "2.1. Вхід до системи",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1️⃣ Відкрийте веб-браузер та перейдіть за адресою програми",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2️⃣ На головній сторінці з'являться доступні розділи програми",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3️⃣ Оберіть необхідний розділ з меню навігації",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "2.2. Структура програми",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма складається з основних розділів:",
                font: "Calibri",
                size: 26,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "📊 Розділ I: Бюджетне фінансування доріг",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Розрахунок Q₁ (державні дороги) та Q₂ (місцеві дороги)",
                font: "Calibri",
                size: 24,
                italics: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "🔧 Розділ II: Експлуатаційне утримання",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Розрахунок нормативів утримання з урахуванням коефіцієнтів",
                font: "Calibri",
                size: 24,
                italics: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "🛣 Розділ III: Планування ремонтів",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Аналіз технічного стану та розрахунок вартості робіт",
                font: "Calibri",
                size: 24,
                italics: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "📜 Історія розрахунків",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Перегляд збережених результатів та експорт даних",
                font: "Calibri",
                size: 24,
                italics: true
              })
            ],
            spacing: { after: 250 }
          }),
        ]
      },
      
      // ═══════════════════════════════════════════════════════════
      // РОЗДІЛ 3: БЮДЖЕТНЕ ФІНАНСУВАННЯ
      // ═══════════════════════════════════════════════════════════
      {
        properties: {},
        children: [
          new Paragraph({
            text: "3. РОЗДІЛ I: БЮДЖЕТНЕ ФІНАНСУВАННЯ",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 350 }
          }),
          
          new Paragraph({
            text: "3.1. Державні дороги (Q₁)",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "➤ КРОК 1: Введення даних",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 200 },
            shading: { fill: "2E75B6" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "У таблиці \"Державні дороги загального користування\" введіть значення для кожного показника:",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "• Показники бюджетного фінансування (Q₁₁ - Q₁₈)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Нормативні документи для кожного показника",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Завантаження файлів-підтверджень (за необхідності)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "➤ КРОК 2: Розрахунок",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 200 },
            shading: { fill: "2E75B6" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Після введення даних натисніть кнопку \"Розрахувати\".",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма автоматично:",
                font: "Calibri",
                size: 24,
                bold: true
              })
            ],
            spacing: { after: 120 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "• Перевірить коректність введених даних",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Виконає розрахунок за формулою",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "• Відобразить результат у виділеному блоці",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          // Формула Q1
          new Paragraph({
            children: [
              new TextRun({
                text: "Q",
                font: "Calibri",
                size: 32,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: "₁",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78",
                subScript: true
              }),
              new TextRun({
                text: " = Σ(Q",
                font: "Calibri",
                size: 32,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: "₁₁",
                font: "Calibri",
                size: 22,
                bold: true,
                color: "1F4E78",
                subScript: true
              }),
              new TextRun({
                text: " + Q",
                font: "Calibri",
                size: 32,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: "₁₂",
                font: "Calibri",
                size: 22,
                bold: true,
                color: "1F4E78",
                subScript: true
              }),
              new TextRun({
                text: " + Q",
                font: "Calibri",
                size: 32,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: "₁₃",
                font: "Calibri",
                size: 22,
                bold: true,
                color: "1F4E78",
                subScript: true
              }),
              new TextRun({
                text: " + ... + Q",
                font: "Calibri",
                size: 32,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: "₁₈",
                font: "Calibri",
                size: 22,
                bold: true,
                color: "1F4E78",
                subScript: true
              }),
              new TextRun({
                text: ")",
                font: "Calibri",
                size: 32,
                bold: true,
                color: "1F4E78"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 150 },
            border: {
              top: { style: BorderStyle.DOUBLE, size: 15, color: "2E75B6" },
              bottom: { style: BorderStyle.DOUBLE, size: 15, color: "2E75B6" },
              left: { style: BorderStyle.DOUBLE, size: 15, color: "2E75B6" },
              right: { style: BorderStyle.DOUBLE, size: 15, color: "2E75B6" }
            },
            shading: { fill: "E0F2FE" }
          }),
          
          new Paragraph({ text: "", spacing: { after: 250 } }),
          
          new Paragraph({
            text: "3.2. Місцеві дороги (Q₂)",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Аналогічно розділу 3.1, заповніть таблицю для місцевих доріг з показниками Q₂₁ - Q₂₈ та виконайте розрахунок.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "3.3. Загальний бюджет",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Після розрахунку Q₁ та Q₂, програма автоматично обчислить загальний бюджет:",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          // Формула Q = Q1 + Q2
          new Paragraph({
            children: [
              new TextRun({
                text: "Q = Q",
                font: "Calibri",
                size: 36,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: "₁",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "1F4E78",
                subScript: true
              }),
              new TextRun({
                text: " + Q",
                font: "Calibri",
                size: 36,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: "₂",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "1F4E78",
                subScript: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 200 },
            border: {
              top: { style: BorderStyle.DOUBLE, size: 18, color: "16A34A" },
              bottom: { style: BorderStyle.DOUBLE, size: 18, color: "16A34A" },
              left: { style: BorderStyle.DOUBLE, size: 18, color: "16A34A" },
              right: { style: BorderStyle.DOUBLE, size: 18, color: "16A34A" }
            },
            shading: { fill: "DCFCE7" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "⚠ ВАЖЛИВО:",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "DC2626"
              }),
              new TextRun({
                text: " Дані з Розділу I автоматично передаються в наступні розділи.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { before: 200, after: 250 }
          }),
          
          new Paragraph({
            text: "3.4. Детальний опис показників",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "📋 ПОКАЗНИКИ ДЛЯ ДЕРЖАВНИХ ДОРІГ",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 250 },
            shading: { fill: "2E75B6" }
          }),
          
          // Q11
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true, color: "1F4E78" }),
              new TextRun({ text: "₁₁", font: "Calibri", size: 20, bold: true, color: "1F4E78", subScript: true }),
              new TextRun({ text: " - Утримання доріг державного значення", font: "Calibri", size: 26, bold: true, color: "1F4E78" })
            ],
            spacing: { after: 120 },
            shading: { fill: "E0F2FE" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Включає витрати на поточне утримання автомобільних доріг. Розраховується на основі протяжності доріг та нормативів утримання.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          // Q12
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true, color: "1F4E78" }),
              new TextRun({ text: "₁₂", font: "Calibri", size: 20, bold: true, color: "1F4E78", subScript: true }),
              new TextRun({ text: " - Поточний ремонт", font: "Calibri", size: 26, bold: true, color: "1F4E78" })
            ],
            spacing: { after: 120 },
            shading: { fill: "E0F2FE" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Витрати на ремонт ямкових вибоїн, тріщин, вирівнювання поверхні.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          // Q13
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true, color: "1F4E78" }),
              new TextRun({ text: "₁₃", font: "Calibri", size: 20, bold: true, color: "1F4E78", subScript: true }),
              new TextRun({ text: " - Капітальний ремонт", font: "Calibri", size: 26, bold: true, color: "1F4E78" })
            ],
            spacing: { after: 120 },
            shading: { fill: "E0F2FE" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Витрати на відновлення транспортно-експлуатаційних характеристик дороги: заміна дорожнього одягу.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          // Q14
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true, color: "1F4E78" }),
              new TextRun({ text: "₁₄", font: "Calibri", size: 20, bold: true, color: "1F4E78", subScript: true }),
              new TextRun({ text: " - Реконструкція", font: "Calibri", size: 26, bold: true, color: "1F4E78" })
            ],
            spacing: { after: 120 },
            shading: { fill: "E0F2FE" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Витрати на підвищення категорії дороги, розширення проїзної частини.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          // Q15-Q18 коротко
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true, color: "1F4E78" }),
              new TextRun({ text: "₁₅", font: "Calibri", size: 20, bold: true, color: "1F4E78", subScript: true }),
              new TextRun({ text: " - Нове будівництво  |  ", font: "Calibri", size: 24 }),
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true, color: "1F4E78" }),
              new TextRun({ text: "₁₆", font: "Calibri", size: 20, bold: true, color: "1F4E78", subScript: true }),
              new TextRun({ text: " - Штучні споруди", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 },
            shading: { fill: "E0F2FE" }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true, color: "1F4E78" }),
              new TextRun({ text: "₁₇", font: "Calibri", size: 20, bold: true, color: "1F4E78", subScript: true }),
              new TextRun({ text: " - Служби  |  ", font: "Calibri", size: 24 }),
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true, color: "1F4E78" }),
              new TextRun({ text: "₁₈", font: "Calibri", size: 20, bold: true, color: "1F4E78", subScript: true }),
              new TextRun({ text: " - Інші витрати", font: "Calibri", size: 24 })
            ],
            spacing: { after: 300 },
            shading: { fill: "E0F2FE" }
          }),
          
          new Paragraph({
            text: "3.5. Приклад розрахунку",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "💡 ПРИКЛАД",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            shading: { fill: "16A34A" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true }),
              new TextRun({ text: "₁₁", font: "Calibri", size: 20, bold: true, subScript: true }),
              new TextRun({ text: " (Утримання) = ", font: "Calibri", size: 24 }),
              new TextRun({ text: "150,000", font: "Calibri", size: 26, bold: true, color: "16A34A" }),
              new TextRun({ text: " тис. грн", font: "Calibri", size: 24 })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true }),
              new TextRun({ text: "₁₂", font: "Calibri", size: 20, bold: true, subScript: true }),
              new TextRun({ text: " (Поточний ремонт) = ", font: "Calibri", size: 24 }),
              new TextRun({ text: "85,000", font: "Calibri", size: 26, bold: true, color: "16A34A" }),
              new TextRun({ text: " тис. грн", font: "Calibri", size: 24 })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 26, bold: true }),
              new TextRun({ text: "₁₃", font: "Calibri", size: 20, bold: true, subScript: true }),
              new TextRun({ text: " (Капітальний ремонт) = ", font: "Calibri", size: 24 }),
              new TextRun({ text: "120,000", font: "Calibri", size: 26, bold: true, color: "16A34A" }),
              new TextRun({ text: " тис. грн", font: "Calibri", size: 24 })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "... інші показники ...",
                font: "Calibri",
                size: 22,
                italics: true,
                color: "666666"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "═══════════════════════════════════",
                font: "Calibri",
                size: 26,
                color: "2E75B6"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "Q", font: "Calibri", size: 36, bold: true, color: "16A34A" }),
              new TextRun({ text: "₁", font: "Calibri", size: 28, bold: true, color: "16A34A", subScript: true }),
              new TextRun({ text: " = 950,000 тис. грн", font: "Calibri", size: 36, bold: true, color: "16A34A" })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 150 },
            shading: { fill: "DCFCE7" },
            border: {
              top: { style: BorderStyle.DOUBLE, size: 18, color: "16A34A" },
              bottom: { style: BorderStyle.DOUBLE, size: 18, color: "16A34A" },
              left: { style: BorderStyle.DOUBLE, size: 18, color: "16A34A" },
              right: { style: BorderStyle.DOUBLE, size: 18, color: "16A34A" }
            }
          }),
        ]
      },
      
      // ═══════════════════════════════════════════════════════════
      // РОЗДІЛ 4: ЕКСПЛУАТАЦІЙНЕ УТРИМАННЯ
      // ═══════════════════════════════════════════════════════════
      {
        properties: {},
        children: [
          new Paragraph({
            text: "4. РОЗДІЛ II: ЕКСПЛУАТАЦІЙНЕ УТРИМАННЯ",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 350 }
          }),
          
          new Paragraph({
            text: "4.1. Вибір параметрів",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1️⃣ Виберіть тип доріг:",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "1F4E78"
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Державні дороги", font: "Calibri", size: 24, bold: true }),
              new TextRun({ text: " - для розрахунку нормативів державних доріг", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Місцеві дороги", font: "Calibri", size: 24, bold: true }),
              new TextRun({ text: " - для розрахунку нормативів місцевих доріг", font: "Calibri", size: 24 })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "2️⃣ Оберіть область (регіон)",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "1F4E78"
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Для кожної області застосовуються індивідуальні коригувальні коефіцієнти.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "4.2. Введення індексів інфляції",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Введіть індекси інфляції для кожного року. Програма автоматично розрахує:",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Добуток індексів інфляції", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Коригування базового нормативу на інфляцію", font: "Calibri", size: 24 })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "4.3. Результати розрахунку",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма виведе:",
                font: "Calibri",
                size: 24,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Нормативи для кожної категорії доріг (I-V)", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Загальне фінансування з урахуванням протяжності доріг", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Детальну таблицю з регіональними результатами", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "• Таблицю коригувальних коефіцієнтів", font: "Calibri", size: 24 })
            ],
            spacing: { after: 250 }
          }),
        ]
      },
      
      // ═══════════════════════════════════════════════════════════
      // РОЗДІЛ 5: ПЛАНУВАННЯ РЕМОНТІВ
      // ═══════════════════════════════════════════════════════════
      {
        properties: {},
        children: [
          new Paragraph({
            text: "5. РОЗДІЛ III: ПЛАНУВАННЯ РЕМОНТІВ",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 350 }
          }),
          
          new Paragraph({
            text: "5.1. Введення даних про ділянки доріг",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Для кожної ділянки введіть наступні дані:",
                font: "Calibri",
                size: 26,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          
          // Найменування
          new Paragraph({
            children: [
              new TextRun({
                text: "🛣 Найменування ділянки дороги",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 120 },
            shading: { fill: "2E75B6" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Класифікація доріг:",
                font: "Calibri",
                size: 24,
                bold: true
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "М-XX", font: "Calibri", size: 24, bold: true, color: "DC2626" }),
              new TextRun({ text: " - міжнародні дороги (М-01, М-05, М-06)", font: "Calibri", size: 24 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Н-XX", font: "Calibri", size: 24, bold: true, color: "DC2626" }),
              new TextRun({ text: " - національні дороги (Н-01, Н-14)", font: "Calibri", size: 24 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Р-XX", font: "Calibri", size: 24, bold: true, color: "DC2626" }),
              new TextRun({ text: " - регіональні дороги (Р-06, Р-15)", font: "Calibri", size: 24 })
            ],
            spacing: { after: 250 }
          }),
          
          // Протяжність
          new Paragraph({
            children: [
              new TextRun({
                text: "📏 Протяжність (км)",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 120 },
            shading: { fill: "2E75B6" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Довжина ділянки в кілометрах. Діапазон: 0.1 - 1000 км.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          // Категорія
          new Paragraph({
            children: [
              new TextRun({
                text: "📊 Категорія дороги",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 120 },
            shading: { fill: "2E75B6" }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "I", font: "Calibri", size: 24, bold: true }),
              new TextRun({ text: " - автомагістралі, 150 км/год", font: "Calibri", size: 24 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "II", font: "Calibri", size: 24, bold: true }),
              new TextRun({ text: " - висока інтенсивність, 120 км/год", font: "Calibri", size: 24 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "III", font: "Calibri", size: 24, bold: true }),
              new TextRun({ text: " - середня інтенсивність, 100 км/год", font: "Calibri", size: 24 })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "IV-V", font: "Calibri", size: 24, bold: true }),
              new TextRun({ text: " - низька інтенсивність, 60-80 км/год", font: "Calibri", size: 24 })
            ],
            spacing: { after: 250 }
          }),
          
          // Інші параметри компактно
          new Paragraph({
            children: [
              new TextRun({
                text: "🚗 Інтенсивність руху",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: " - середньодобова інтенсивність (авт./добу)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 },
            shading: { fill: "F0F9FF" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "⚡ Модуль пружності",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: " - характеристика міцності покриття (МПа)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 },
            shading: { fill: "F0F9FF" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "📐 Рівність покриття",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: " - якість дорожнього покриття (м/км або см/км)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 },
            shading: { fill: "F0F9FF" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "⚠ Глибина колії",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: " - максимальна глибина колій (мм)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 },
            shading: { fill: "F0F9FF" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "🔒 Коефіцієнт зчеплення",
                font: "Calibri",
                size: 24,
                bold: true,
                color: "1F4E78"
              }),
              new TextRun({
                text: " - протиковзкі властивості (мінімум 0.35)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 },
            shading: { fill: "F0F9FF" }
          }),
          
          new Paragraph({
            text: "5.2. Визначення виду робіт",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма автоматично визначає вид робіт:",
                font: "Calibri",
                size: 24,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "🔴 Реконструкція",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "DC2626"
              }),
              new TextRun({
                text: " - якщо інтенсивність перевищує допустиму",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "🟡 Капітальний ремонт",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "CA8A04"
              }),
              new TextRun({
                text: " - якщо міцність нижче нормативу",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "🔵 Поточний ремонт",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "2563EB"
              }),
              new TextRun({
                text: " - якщо рівність або зчеплення нижче норми",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "5.3. Розрахунок вартості робіт",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "📐 ФОРМУЛА РОЗРАХУНКУ",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            shading: { fill: "1F4E78" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Вартість = Базова вартість × Протяжність",
                font: "Calibri",
                size: 34,
                bold: true,
                color: "1F4E78"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 200 },
            border: {
              top: { style: BorderStyle.DOUBLE, size: 18, color: "2E75B6" },
              bottom: { style: BorderStyle.DOUBLE, size: 18, color: "2E75B6" },
              left: { style: BorderStyle.DOUBLE, size: 18, color: "2E75B6" },
              right: { style: BorderStyle.DOUBLE, size: 18, color: "2E75B6" }
            },
            shading: { fill: "E0F2FE" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "💡 ПРИКЛАД РОЗРАХУНКУ",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 200 },
            shading: { fill: "16A34A" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Дорога М-05, категорія II, протяжність 456 км",
                font: "Calibri",
                size: 26,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Вид робіт: Капітальний ремонт",
                font: "Calibri",
                size: 24,
                italics: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Базова вартість капремонту для II категорії = 15,000 тис. грн/км",
                font: "Calibri",
                size: 24
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Вартість = 15,000 × 456 = 6,840,000 тис. грн",
                font: "Calibri",
                size: 30,
                bold: true,
                color: "16A34A"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 150, after: 150 },
            shading: { fill: "DCFCE7" },
            border: {
              top: { style: BorderStyle.DOUBLE, size: 15, color: "16A34A" },
              bottom: { style: BorderStyle.DOUBLE, size: 15, color: "16A34A" },
              left: { style: BorderStyle.DOUBLE, size: 15, color: "16A34A" },
              right: { style: BorderStyle.DOUBLE, size: 15, color: "16A34A" }
            }
          }),
          
          new Paragraph({ text: "", spacing: { after: 250 } }),
          
          // Таблиця нормативів
          new Paragraph({
            children: [
              new TextRun({
                text: "📋 БАЗОВІ НОРМАТИВИ ВАРТОСТІ РОБІТ",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "FFFFFF"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            shading: { fill: "1F4E78" }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "(тис. грн/км)",
                font: "Calibri",
                size: 22,
                italics: true,
                color: "666666"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 8, color: "2E75B6" },
              bottom: { style: BorderStyle.SINGLE, size: 8, color: "2E75B6" },
              left: { style: BorderStyle.SINGLE, size: 8, color: "2E75B6" },
              right: { style: BorderStyle.SINGLE, size: 8, color: "2E75B6" },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" },
              insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" }
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "Вид робіт", bold: true, font: "Calibri", size: 24, color: "FFFFFF" })],
                      alignment: AlignmentType.CENTER
                    })],
                    shading: { fill: "2E75B6" }
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "I", bold: true, font: "Calibri", size: 24, color: "FFFFFF" })],
                      alignment: AlignmentType.CENTER
                    })],
                    shading: { fill: "2E75B6" }
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "II", bold: true, font: "Calibri", size: 24, color: "FFFFFF" })],
                      alignment: AlignmentType.CENTER
                    })],
                    shading: { fill: "2E75B6" }
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "III", bold: true, font: "Calibri", size: 24, color: "FFFFFF" })],
                      alignment: AlignmentType.CENTER
                    })],
                    shading: { fill: "2E75B6" }
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "IV", bold: true, font: "Calibri", size: 24, color: "FFFFFF" })],
                      alignment: AlignmentType.CENTER
                    })],
                    shading: { fill: "2E75B6" }
                  }),
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "V", bold: true, font: "Calibri", size: 24, color: "FFFFFF" })],
                      alignment: AlignmentType.CENTER
                    })],
                    shading: { fill: "2E75B6" }
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "Реконструкція", bold: true, font: "Calibri", size: 22 })],
                    })],
                    shading: { fill: "FEE2E2" }
                  }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "60,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "50,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "35,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "28,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "22,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "Капітальний ремонт", bold: true, font: "Calibri", size: 22 })],
                    })],
                    shading: { fill: "FEF3C7" }
                  }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "18,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "15,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "12,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "9,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "7,000", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ 
                      children: [new TextRun({ text: "Поточний ремонт", bold: true, font: "Calibri", size: 22 })],
                    })],
                    shading: { fill: "DBEAFE" }
                  }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "3,500", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "2,500", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1,800", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "1,200", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "900", font: "Calibri", size: 22, bold: true })], alignment: AlignmentType.CENTER })] })
                ]
              })
            ]
          }),
        ]
      },
      
      // ═══════════════════════════════════════════════════════════
      // РОЗДІЛ 6: ІСТОРІЯ РОЗРАХУНКІВ
      // ═══════════════════════════════════════════════════════════
      {
        properties: {},
        children: [
          new Paragraph({
            text: "6. ІСТОРІЯ РОЗРАХУНКІВ",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 350 }
          }),
          
          new Paragraph({
            text: "6.1. Перегляд збережених розрахунків",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Усі розрахунки автоматично зберігаються. Для перегляду:",
                font: "Calibri",
                size: 24,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1️⃣ Відкрийте розділ \"Історія розрахунків\"",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2️⃣ У списку відображаються всі збережені сесії з датою та статусом",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3️⃣ Натисніть \"Перегляд\" для детального перегляду",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "6.2. Фільтрація за датами",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "📅 За роками",
                font: "Calibri",
                size: 24,
                bold: true
              }),
              new TextRun({
                text: " - перегляд всіх розрахунків за обраний рік",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "📅 За місяцями",
                font: "Calibri",
                size: 24,
                bold: true
              }),
              new TextRun({
                text: " - фільтрація по місяцях вибраного року",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "📅 За днями",
                font: "Calibri",
                size: 24,
                bold: true
              }),
              new TextRun({
                text: " - точний пошук за конкретну дату",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "6.3. Детальний перегляд сесії",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "При відкритті сесії відображається:",
                font: "Calibri",
                size: 24,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({ text: "✓ Результати бюджетного фінансування (Q₁, Q₂, загальний бюджет)", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "✓ Детальні таблиці з показниками", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "✓ Нормативи експлуатаційного утримання", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "✓ Регіональні результати по всіх областях України", font: "Calibri", size: 24 })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "✓ Результати планування ремонтів з вартістю", font: "Calibri", size: 24 })
            ],
            spacing: { after: 250 }
          }),
        ]
      },
      
      // ═══════════════════════════════════════════════════════════
      // РОЗДІЛ 7: ЕКСПОРТ ДАНИХ
      // ═══════════════════════════════════════════════════════════
      {
        properties: {},
        children: [
          new Paragraph({
            text: "7. ЕКСПОРТ ДАНИХ",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 350 }
          }),
          
          new Paragraph({
            text: "7.1. Збереження результатів",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Програма дозволяє експортувати результати для подальшого використання:",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1️⃣ Натисніть кнопку \"Експорт\" у відповідному розділі",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2️⃣ Файл автоматично завантажиться на ваш комп'ютер",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3️⃣ Відкрийте файл у відповідній програмі для перегляду",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "7.2. Друк результатів",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "Для друку результатів:",
                font: "Calibri",
                size: 24,
                bold: true
              })
            ],
            spacing: { after: 150 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "1️⃣ Відкрийте потрібний розділ з результатами",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2️⃣ Використайте функцію друку браузера (Ctrl+P)",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 120 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3️⃣ Налаштуйте параметри та відправте на принтер або збережіть",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
        ]
      },
      
      // ═══════════════════════════════════════════════════════════
      // РОЗДІЛ 8: МОЖЛИВІ ПОМИЛКИ
      // ═══════════════════════════════════════════════════════════
      {
        properties: {},
        children: [
          new Paragraph({
            text: "8. МОЖЛИВІ ПОМИЛКИ ТА ЇХ ВИРІШЕННЯ",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 350 }
          }),
          
          new Paragraph({
            text: "8.1. Помилки введення",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "❌ \"Заповніть всі обов'язкові поля\"",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "DC2626"
              })
            ],
            spacing: { after: 120 },
            shading: { fill: "FEE2E2" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Рішення: ",
                font: "Calibri",
                size: 24,
                bold: true
              }),
              new TextRun({
                text: "Перевірте чи заповнені всі обов'язкові поля (позначені червоним).",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "❌ \"Некоректне значення\"",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "DC2626"
              })
            ],
            spacing: { after: 120 },
            shading: { fill: "FEE2E2" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Рішення: ",
                font: "Calibri",
                size: 24,
                bold: true
              }),
              new TextRun({
                text: "Використовуйте тільки числа та десяткову крапку (не кому).",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            text: "8.2. Проблеми з браузером",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
            spacing: { before: 250, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "⚠ Повільна робота програми",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "CA8A04"
              })
            ],
            spacing: { after: 120 },
            shading: { fill: "FEF3C7" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Рішення: ",
                font: "Calibri",
                size: 24,
                bold: true
              }),
              new TextRun({
                text: "Закрийте інші вкладки, очистіть кеш (Ctrl+Shift+Delete), перезавантажте сторінку (F5).",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 200 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "⚠ Дані не зберігаються",
                font: "Calibri",
                size: 26,
                bold: true,
                color: "CA8A04"
              })
            ],
            spacing: { after: 120 },
            shading: { fill: "FEF3C7" }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Рішення: ",
                font: "Calibri",
                size: 24,
                bold: true
              }),
              new TextRun({
                text: "Не використовуйте режим інкогніто. Регулярно експортуйте важливі розрахунки.",
                font: "Calibri",
                size: 24
              })
            ],
            spacing: { after: 400 }
          }),
          
          // Завершення
          new Paragraph({
            text: "═══════════════════════════════════════",
            alignment: AlignmentType.CENTER,
            spacing: { before: 500, after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "КІНЕЦЬ ІНСТРУКЦІЇ",
                font: "Calibri",
                size: 28,
                bold: true,
                color: "1F4E78"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 250 }
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: `© ${new Date().getFullYear()} | Документ згенеровано: ${new Date().toLocaleString('uk-UA')}`,
                font: "Calibri",
                size: 22,
                color: "666666",
                italics: true
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

