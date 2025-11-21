import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  AlertCircle, 
  CheckCircle2,
  Calculator,
  TrendingUp,
  Settings,
  Info
} from 'lucide-react';

const UserManual: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full mx-auto p-6 space-y-6">
      {/* Заголовок */}
      <Card className="border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <div className="flex items-center gap-4">
            <BookOpen className="h-12 w-12 text-blue-600" />
            <div>
              <CardTitle className="text-3xl">Інструкція з використання системи</CardTitle>
              <CardDescription className="text-lg mt-2">
                Розрахунок дорожнього фінансування та планування ремонтів
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Загальний огляд */}
      <Alert className="bg-blue-50 border-blue-200">
        <Info className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-900">📋 Загальний огляд системи</AlertTitle>
        <AlertDescription className="text-blue-800">
          Система складається з трьох основних розділів та історії:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Розділ I: Розрахунок бюджетного фінансування доріг</strong> - Визначення загального обсягу бюджетного фінансування (Q₁ та Q₂)</li>
            <li><strong>Розділ II: Експлуатаційне утримання доріг</strong> - Розрахунок нормативів та розподіл коштів по регіонах України</li>
            <li><strong>Розділ III: Планування ремонтів автомобільних доріг</strong> - Технічна оцінка доріг, визначення видів робіт та економічної ефективності</li>
            <li><strong>Історія розрахунків</strong> - Перегляд збережених сесій та експорт даних</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Alert className="bg-green-50 border-green-300">
        <CheckCircle2 className="h-5 w-5 text-green-600" />
        <AlertTitle className="text-green-900">💾 Система сесій розрахунків</AlertTitle>
        <AlertDescription className="text-green-800">
          <p className="mb-2">Система автоматично створює сесію розрахунків при першому відкритті розділу. Всі дані зберігаються в межах однієї сесії і доступні між розділами.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Кожна сесія має унікальний ID</li>
            <li>Дані зберігаються в браузері (IndexedDB)</li>
            <li>Всі сесії доступні в розділі "Історія розрахунків"</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Основні вкладки */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="overview">Огляд</TabsTrigger>
          <TabsTrigger value="budget">Розрахунок бюджетного фінансування доріг</TabsTrigger>
          <TabsTrigger value="maintenance">Експлуатаційне утримання доріг</TabsTrigger>
          <TabsTrigger value="repairs">Планування ремонтів автомобільних доріг</TabsTrigger>
        </TabsList>

        {/* ВКЛАДКА: Огляд */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>🎯 Рекомендована послідовність роботи</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                <Badge className="bg-blue-600 text-white text-lg">1</Badge>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Загальний бюджет</h3>
                  <p className="text-gray-700">Визначення обсягу фінансування для державних та місцевих доріг</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                <Badge className="bg-green-600 text-white text-lg">2</Badge>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Розподіл по регіонах</h3>
                  <p className="text-gray-700">Розрахунок нормативів та коефіцієнтів для кожної області України</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <Badge className="bg-purple-600 text-white text-lg">3</Badge>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Планування ремонтів</h3>
                  <p className="text-gray-700">Технічна оцінка доріг, розрахунок вартості та економічної ефективності</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="bg-yellow-50 border-yellow-300">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <AlertTitle className="text-yellow-900">⚠️ Важливі примітки</AlertTitle>
            <AlertDescription className="text-yellow-800 space-y-2">
              <p>• <strong>Збереження даних:</strong> дані зберігаються в браузері. При закритті браузера можуть втратитися.</p>
              <p>• <strong>Експорт:</strong> регулярно експортуйте результати в Excel для збереження.</p>
              <p>• <strong>Файли:</strong> максимальний розмір завантажуваних файлів - 10 MB.</p>
            </AlertDescription>
          </Alert>
        </TabsContent>

        {/* ВКЛАДКА: Бюджетне фінансування */}
        <TabsContent value="budget" className="space-y-6">
          <Card className="border-2 border-blue-500">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-blue-600" />
                Розділ I: Розрахунок бюджетного фінансування доріг
              </CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Таблиця 1: Державні дороги (Q₁)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">1. Заповнення вихідних даних:</h3>
                <p className="text-gray-700 mb-2">Для кожного показника введіть наступні дані:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Q1</strong> - Обсяг бюджетного фінансування автомобільних доріг державного значення</li>
                  <li><strong>Qпп</strong> - Обсяг бюджетного фінансування пунктів пропуску через державний кордон</li>
                  <li><strong>Qміжн</strong> - Обсяг бюджетного фінансування проведення конкурсів за рахунок коштів міжнародних організацій</li>
                  <li><strong>QІАС</strong> - Обсяг бюджетного фінансування інформаційно-аналітичної системи</li>
                  <li><strong>Qн, Qлік, Qвп, Qупр, QДПП</strong> - інші статті бюджету</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. Додаткова інформація:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Обсяг (тис.грн.)</strong> - введіть числове значення</li>
                  <li><strong>Нормативний документ</strong> - вкажіть назву документа або постанови</li>
                  <li><strong>Файли</strong> - натисніть <Badge variant="outline">📎 Додати файл</Badge> для прикріплення документів:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Підтримувані формати: PDF, DOC, DOCX, XLS, XLSX, TXT, JPG, PNG</li>
                      <li>Максимальний розмір одного файлу: 10 MB</li>
                      <li>Можна додавати декілька файлів для одного показника</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  <strong>💡 Підказка:</strong> Наведіть курсор на іконку ℹ️ поруч з назвою показника, щоб побачити детальний опис та формули розрахунку
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. Виконання розрахунку Q₁:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Переконайтеся, що всі обов'язкові поля заповнені</li>
                  <li>Натисніть кнопку <Badge className="bg-green-600">Розрахувати</Badge></li>
                  <li>Результат відобразиться у зеленій панелі: "Q₁ (Державні дороги): XXX тис. грн"</li>
                  <li>Формула: Q₁ = Q1 + Qпп + Qміжн + QІАС + Qн + Qлік + Qвп + Qупр + QДПП</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Таблиця 2: Місцеві дороги (Q₂)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">1. Заповнення вихідних даних:</h3>
                <p className="text-gray-700 mb-2">Прокрутіть до таблиці "Місцеві дороги" та введіть:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Q2</strong> - Обсяг бюджетних коштів на дороги місцевого значення (обов'язково!)</li>
                  <li><strong>Qкред</strong> - Обсяг бюджетного фінансування погашення місцевого боргу</li>
                  <li><strong>Qн2</strong> - Обсяг бюджетних коштів на науково-дослідні роботи для місцевих доріг</li>
                  <li><strong>QДПП2</strong> - Обсяг бюджетного фінансування виплат приватному партнеру для місцевих доріг</li>
                  <li><strong>Qком</strong> - Обсяг бюджетних коштів на дороги комунальної власності</li>
                </ul>
              </div>

              <Alert className="bg-red-50 border-red-300">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-900">⚠️ ВАЖЛИВО</AlertTitle>
                <AlertDescription className="text-red-800">
                  Поле <strong>Q2</strong> є обов'язковим для розрахунку Q₂. Інші поля - опціональні.
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. Виконання розрахунку Q₂:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Натисніть кнопку <Badge className="bg-green-600">Розрахувати</Badge></li>
                  <li>Результат відобразиться у синій панелі: "Q₂ (Місцеві дороги): XXX тис. грн"</li>
                  <li>Формула: Q₂ = Q2 + Qкред + Qн2 + QДПП2 + Qком</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Зведення результатів та збереження</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">1. Перегляд зведених результатів:</h3>
                <p className="text-gray-700 mb-2">Після розрахунку Q₁ та Q₂ з'явиться панель "Сводка результатів" з трьома показниками:</p>
                <div className="grid grid-cols-3 gap-4 my-4">
                  <div className="p-4 bg-green-50 rounded-lg text-center border-2 border-green-300">
                    <div className="text-2xl font-bold text-green-600">Q₁</div>
                    <div className="text-sm text-gray-600 mt-1">Державні дороги</div>
                    <div className="text-xs text-gray-500 mt-1">тис. грн</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg text-center border-2 border-blue-300">
                    <div className="text-2xl font-bold text-blue-600">Q₂</div>
                    <div className="text-sm text-gray-600 mt-1">Місцеві дороги</div>
                    <div className="text-xs text-gray-500 mt-1">тис. грн</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg text-center border-2 border-purple-400">
                    <div className="text-2xl font-bold text-purple-600">Q (Загальний)</div>
                    <div className="text-sm text-gray-600 mt-1">Q₁ + Q₂</div>
                    <div className="text-xs text-gray-500 mt-1">тис. грн</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. Збереження результатів в сесію:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Натисніть <Badge className="bg-green-600">💾 Зберегти результати в сесію розрахунків</Badge></li>
                  <li>Результати зберігаються в поточній сесії розрахунків</li>
                  <li>З'явиться підтвердження: "✅ Результати бюджетного фінансування успішно збережені в сесії розрахунків!"</li>
                  <li>Дані стають доступними для використання в наступних розділах</li>
                </ul>
              </div>

              <Alert className="bg-purple-50 border-purple-300">
                <Info className="h-4 w-4 text-purple-600" />
                <AlertDescription className="text-purple-800">
                  <strong>📊 Важливо:</strong> Збережені дані автоматично передаються в розділи "Експлуатаційне утримання" та "Планування ремонтів"
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. Експорт в PDF:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Прокрутіть до секції "Експорт результатів в PDF"</li>
                  <li>Натисніть <Badge className="bg-red-600 text-white">📄 Експортувати в PDF</Badge></li>
                  <li>PDF файл автоматично завантажиться з повним звітом</li>
                  <li>Файл містить всі таблиці, розрахунки та введені дані</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ВКЛАДКА: Експлуатаційне утримання */}
        <TabsContent value="maintenance" className="space-y-6">
          <Card className="border-2 border-green-500">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Експлуатаційне утримання доріг
              </CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Крок 1: Дороги державного значення</CardTitle>
              <CardDescription>
                Розрахунок нормативів для державних доріг
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-3">1. Введення базового нормативу:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Встановлений норматив</strong> - введіть значення нормативу річних фінансових витрат на ЕУ 1 км дороги II категорії (наприклад, 604.761 тис. грн/км)</li>
                    <li><strong>Рік затвердження нормативу</strong> - оберіть рік, в якому було затверджено цей норматив (наприклад, 2020, 2023)</li>
                  </ul>
                </div>

                <Alert className="bg-blue-50 border-blue-300">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>💡 Підказка:</strong> Якщо норматив затверджено в 2020 році, а потрібно порахувати на 2025 рік, індекси інфляції автоматично відображатимуться для років 2021-2025
                  </AlertDescription>
                </Alert>

                <div>
                  <h3 className="font-semibold text-lg mb-3">2. Введення індексів інфляції:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Роки автоматично розраховуються починаючи з (рік нормативу + 1)</li>
                    <li>Для додавання років:
                      <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                        <li><strong>Вибрати роки</strong> - оберіть діапазон років у діалозі</li>
                        <li><strong>Додати рік</strong> - додати один рік вручну</li>
                      </ul>
                    </li>
                    <li>Для кожного року введіть індекс інфляції у відсотках (наприклад, 10.5%)</li>
                    <li>Коефіцієнт автоматично розраховується: коеф. = інфляція/100</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">3. Розрахунок нормативів:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Натисніть <Badge className="bg-blue-600">Розрахувати нормативи</Badge></li>
                    <li>Система розрахує нормативи для всіх 5 категорій доріг (I, II, III, IV, V)</li>
                    <li>Використовуються коефіцієнти диференціювання: I=1.80, II=1.00, III=0.89, IV=0.61, V=0.39</li>
                  </ul>
                </div>

                <Alert className="bg-blue-50 border-blue-300">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Для державних доріг використовуються:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>K<sub>д</sub> = 1.16 (коефіцієнт обслуговування держ. доріг)</li>
                      <li>9 коригувальних коефіцієнтів (гірська місцевість, інтенсивність, євромережа, МПП та ін.)</li>
                      <li>Базовий норматив за замовчуванням: 604.761 тис. грн/км (для II категорії, ціни 2023 року)</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>

            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Крок 2: Дороги місцевого значення</CardTitle>
              <CardDescription>
                Розрахунок нормативів для місцевих доріг
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-3">1. Введення базового нормативу:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Встановлений норматив</strong> - введіть значення нормативу річних фінансових витрат на ЕУ 1 км дороги II категорії (наприклад, 360.544 тис. грн/км)</li>
                    <li><strong>Рік затвердження нормативу</strong> - оберіть рік, в якому було затверджено цей норматив</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">2. Введення індексів інфляції:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Аналогічно державним дорогам - роки автоматично починаються з (рік нормативу + 1)</li>
                    <li>Введіть індекси інфляції для кожного року у відсотках</li>
                    <li>Натисніть <Badge className="bg-green-600">Розрахувати нормативи</Badge></li>
                  </ul>
                </div>

                <Alert className="bg-green-50 border-green-300">
                  <Info className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>Для місцевих доріг використовуються:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>3 коригувальних коефіцієнти (гірська місцевість, умови експлуатації, інтенсівність)</li>
                      <li>Базовий норматив за замовчуванням: 360.544 тис. грн/км (для II категорії, ціни 2023 року)</li>
                      <li>Коефіцієнти диференціювання: I=1.71, II=1.00, III=0.85, IV=0.64, V=0.40</li>
                      <li>Спрощена методика розрахунку</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Крок 3: Розрахунок обсягу фінансування</CardTitle>
              <CardDescription>
                Завантаження даних по областях та розрахунок фінансування
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div>
                <h3 className="font-semibold text-lg mb-3">1. Вибір типу доріг для розрахунку:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Оберіть <Badge variant="outline">Державні дороги</Badge> або <Badge variant="outline">Місцеві дороги</Badge></li>
                  <li>Від вибору залежать коефіцієнти та формули розрахунку</li>
                </ul>
              </div>

              <Alert className="bg-yellow-50 border-yellow-300">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <strong>⚠️ ВАЖЛИВО:</strong> Спочатку виконайте розрахунки на кроках 1 та 2 (нормативи для державних та місцевих доріг)
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. Підготовка Excel файлу:</h3>
                <p className="text-gray-700 mb-2">Шаблон повинен містити стовпці:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Найменування області</strong></li>
                  <li><strong>Протяжність по категоріях</strong> (I, II, III, IV, V) в км</li>
                  <li><strong>Загальна протяжність</strong></li>
                  <li><strong>Протяжність з різною інтенсивністю</strong> (15-20, 20-30, 30+ тис авт/добу)</li>
                  <li><strong>Додаткові показники:</strong>
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Протяжність євродоріг (км)</li>
                      <li>Протяжність біля МПП (км)</li>
                      <li>Протяжність з освітленням (км)</li>
                      <li>Нещодавно відремонтовані (км)</li>
                      <li>Кількість об'єктів критичної інфраструктури</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. Завантаження файлу:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Натисніть кнопку <Badge className="bg-blue-600">📁 Завантажити таблицю Excel</Badge></li>
                  <li>Оберіть файл Excel (.xlsx або .xls)</li>
                  <li>Дочекайтеся повідомлення: "✅ Успішно завантажено дані для XX областей"</li>
                  <li>Таблиця відобразиться з можливістю редагування</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">4. Вибір області для перегляду:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Використовуйте випадаючий список для вибору області</li>
                  <li>Опція "Всі області" - показує зведену таблицю по всій Україні</li>
                  <li>Вибір конкретної області - показує деталі тільки для неї</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">5. Запуск розрахунку:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Натисніть <Badge className="bg-green-600">🧮 Розрахувати обсяг коштів</Badge></li>
                  <li>Дочекайтеся завершення (індикатор "Розраховуємо...")</li>
                  <li>Відобразяться результати з коефіцієнтами та фінансуванням</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">6. Перегляд результатів:</h3>
                <p className="text-gray-700 mb-2">Результати містять дві таблиці:</p>
                
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Таблиця 1: Коефіцієнти</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• K<sub>г</sub> - коефіцієнт гірської місцевості</li>
                      <li>• K<sub>уе</sub> - коефіцієнт умов експлуатації</li>
                      <li>• K<sub>інт</sub> - коефіцієнт інтенсивності руху</li>
                      <li>• Для державних доріг додатково: K<sub>е.д</sub>, K<sub>мпп.д</sub>, K<sub>осв</sub>, K<sub>рем</sub>, K<sub>кр.і</sub></li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Таблиця 2: Фінансування</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Протяжність доріг по категоріях для кожної області</li>
                      <li>• Мінімальна потреба в фінансових ресурсах (тис. грн)</li>
                      <li>• Загальна сума для кожної області</li>
                      <li>• Відсоток від загального бюджету</li>
                      <li>• Підсумковий рядок "ВСЬОГО ПО УКРАЇНІ"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">7. Редагування таблиці:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Натисніть <Badge variant="outline">✏️ Редагувати таблицю</Badge> для внесення змін</li>
                  <li>Змінюйте значення протяжності безпосередньо в таблиці</li>
                  <li>Натисніть <Badge className="bg-green-600">Перерахувати</Badge> для оновлення результатів</li>
                  <li>Натисніть <Badge variant="outline">❌ Скасувати редагування</Badge> для відміни змін</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">8. Статистика:</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-700">24</div>
                    <div className="text-sm text-gray-600">Областей України</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-700">XXXX км</div>
                    <div className="text-sm text-gray-600">Загальна довжина</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-700">XX.XX млрд</div>
                    <div className="text-sm text-gray-600">Загальна потреба</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Експорт результатів</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">Завантаження Excel файлу з результатами:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Натисніть <Badge className="bg-purple-600">📥 Завантажити результати в Excel</Badge></li>
                  <li>Файл містить два аркуші:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li><strong>Аркуш 1:</strong> "Коефіцієнти" - всі розраховані коефіцієнти по областях</li>
                      <li><strong>Аркуш 2:</strong> "Фінансування" - детальна таблиця з потребою в коштах</li>
                    </ul>
                  </li>
                  <li>Назва файлу автоматично формується: "Результати_експлуатаційного_утримання_YYYY-MM-DD.xlsx"</li>
                </ul>
              </div>

              <Alert className="bg-green-50 border-green-300">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>✅ Порада:</strong> Регулярно зберігайте результати через кнопку "Зберегти проєкт" та експортуйте в Excel для архівування
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ВКЛАДКА: Планування ремонтів */}
        <TabsContent value="repairs" className="space-y-6">
          <Card className="border-2 border-purple-500">
            <CardHeader className="bg-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-6 w-6 text-purple-600" />
                Планування ремонтів автомобільних доріг
              </CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Сторінки 1-2: Визначення показників транспортно-експлуатаційного стану</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">1. Додавання доріг для аналізу:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Натисніть <Badge variant="outline">➕ Додати рядок</Badge> для додавання нової дороги</li>
                  <li>Заповніть основні характеристики:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li><strong>Найменування</strong> - назва дороги (наприклад, "М-06", "Н-14")</li>
                      <li><strong>Протяжність</strong> - довжина ділянки в км</li>
                      <li><strong>Категорія</strong> - оберіть з випадаючого списку (I, II, III, IV, V)</li>
                    </ul>
                  </li>
                  <li>Заповніть технічні показники:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li><strong>Інтенсивність руху</strong> (авт./добу) - середньодобова інтенсивність</li>
                      <li><strong>Модуль пружності</strong> (МПа) - міцність покриття</li>
                      <li><strong>Рівність покриття</strong> (м/км або см/км) - якість поверхні</li>
                      <li><strong>Глибина колії</strong> (мм) - максимальна глибина колій</li>
                      <li><strong>Коеф. зчеплення</strong> (0-1) - протиковзкі властивості</li>
                    </ul>
                  </li>
                  <li>Для видалення рядка натисніть кнопку <Badge variant="outline" className="text-red-600">🗑️</Badge></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. Виконання розрахунку (Сторінка 2):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Перевірте, що всі поля заповнені коректно</li>
                  <li>Натисніть <Badge className="bg-green-600">✓ Розрахувати</Badge></li>
                  <li>Дані автоматично збережуться в Redux Store</li>
                  <li>Побачите повідомлення: "✅ Дані розрахунку успішно збережені!"</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. Перегляд результатів:</h3>
                <p className="text-gray-700 mb-3">Для кожної дороги автоматично розраховуються:</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                    <div className="font-semibold text-blue-900">Коеф. інтенсивності (K<sub>інт</sub>)</div>
                    <div className="text-sm text-blue-700">Відношення фактичної до розрахункової інтенсивності</div>
                  </div>
                  <div className="p-3 border-l-4 border-green-500 bg-green-50">
                    <div className="font-semibold text-green-900">Коеф. міцності (K<sub>міц</sub>)</div>
                    <div className="text-sm text-green-700">Відношення фактичного до нормативного модуля пружності</div>
                  </div>
                  <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                    <div className="font-semibold text-purple-900">Коеф. рівності (K<sub>рів</sub>)</div>
                    <div className="text-sm text-purple-700">Відношення нормативної до фактичної рівності</div>
                  </div>
                  <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                    <div className="font-semibold text-orange-900">Коеф. колійності (K<sub>кол</sub>)</div>
                    <div className="text-sm text-orange-700">Відношення допустимої до фактичної глибини колії</div>
                  </div>
                  <div className="p-3 border-l-4 border-red-500 bg-red-50">
                    <div className="font-semibold text-red-900">Коеф. зчеплення (K<sub>зч</sub>)</div>
                    <div className="text-sm text-red-700">Відношення фактичного до нормативного зчеплення</div>
                  </div>
                </div>

                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="text-blue-900">Кольорове кодування коефіцієнтів:</AlertTitle>
                  <AlertDescription className="text-blue-800">
                    <div className="space-y-1 mt-2">
                      <div>🟢 <strong>Зелений</strong> (≥ 1.0) - показник в нормі</div>
                      <div>🟡 <strong>Жовтий</strong> (0.8-1.0) - наближається до граничного</div>
                      <div>🔴 <strong>Червоний</strong> (&lt; 0.8) - нижче допустимого, потрібен ремонт</div>
                    </div>
                  </AlertDescription>
                </Alert>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Автоматичне визначення виду робіт:</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-green-50 rounded">
                      <Badge className="bg-green-600 text-white">Не потрібно</Badge>
                      <span className="ml-2 text-gray-700">- всі коефіцієнти в нормі (≥ 1.0)</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <Badge className="bg-blue-600 text-white">Поточний ремонт</Badge>
                      <span className="ml-2 text-gray-700">- K<sub>рів</sub>, K<sub>кол</sub> або K<sub>зч</sub> &lt; 1.0</span>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded">
                      <Badge className="bg-yellow-600 text-white">Капітальний ремонт</Badge>
                      <span className="ml-2 text-gray-700">- K<sub>міц</sub> &lt; 1.0</span>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <Badge className="bg-red-600 text-white">Реконструкція</Badge>
                      <span className="ml-2 text-gray-700">- K<sub>інт</sub> &lt; 1.0 (перевантаження)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle>Сторінки 3-4: Показники вартості дорожніх робіт</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 mt-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">1. Базові показники вартості по категоріях (тис. грн/км):</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Реконструкція:</h4>
                    <div className="grid grid-cols-5 gap-2 text-sm">
                      {['30,000', '25,000', '20,000', '15,000', '10,000'].map((val, i) => (
                        <div key={i} className="text-center font-mono text-red-800">{val}</div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Капітальний ремонт:</h4>
                    <div className="grid grid-cols-5 gap-2 text-sm">
                      {['15,000', '12,000', '10,000', '7,000', '5,000'].map((val, i) => (
                        <div key={i} className="text-center font-mono text-yellow-800">{val}</div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Поточний ремонт:</h4>
                    <div className="grid grid-cols-5 gap-2 text-sm">
                      {['2,000', '1,500', '1,200', '1,000', '800'].map((val, i) => (
                        <div key={i} className="text-center font-mono text-blue-800">{val}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. Редагування показників вартості (за потреби):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Кліком по значенню в таблиці можна його відредагувати</li>
                  <li>Для повернення до початкових значень натисніть <Badge variant="outline">🔄 Скинути до базових значень</Badge></li>
                </ul>
              </div>

              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  <strong>💡 Підказка:</strong> Показники вартості можуть змінюватися залежно від регіону та року. Редагуйте їх відповідно до актуальних даних.
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. Розрахунок орієнтовної вартості (Сторінка 4):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Натисніть <Badge className="bg-green-600">💰 Розрахувати вартість</Badge></li>
                  <li>Система автоматично:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Визначає вид робіт для кожної дороги (на основі коефіцієнтів)</li>
                      <li>Застосовує відповідні показники вартості з таблиці</li>
                      <li>Ураховує протяжність дороги</li>
                      <li>Розраховує загальну вартість: Вартість = Показник × Протяжність</li>
                    </ul>
                  </li>
                  <li>Результати відображаються в таблиці з новою колонкою "Вартість (тис. грн)"</li>
                  <li>Розраховується загальна сума по всіх дорогах</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-purple-50">
              <CardTitle>Сторінки 5-6: Визначення економічної ефективності (ENPV)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 mt-4">
              <Alert className="bg-yellow-50 border-yellow-300">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-900">⚠️ ПОПЕРЕДНІ УМОВИ</AlertTitle>
                <AlertDescription className="text-yellow-800">
                  Перед початком роботи переконайтеся, що виконані розрахунки на Сторінках 1-2 та дані збережені
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold text-lg mb-3">1. Вибір дороги для аналізу:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Оберіть дорогу з випадаючого списку (автоматично завантажуються дороги з Сторінок 1-2)</li>
                  <li>Дані про протяжність, категорію та інтенсивність автоматично підставляються</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">2. Заповнення вихідних даних (31 параметр):</h3>
                
                <Alert className="bg-red-50 border-red-300">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-900">⚠️ ОБОВ'ЯЗКОВО</AlertTitle>
                  <AlertDescription className="text-red-800">
                    Поле №3 "Вартість реконструкції/капітального ремонту" є обов'язковим для розрахунку!
                  </AlertDescription>
                </Alert>

                <div className="space-y-3 mt-4">
                  <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900">Основні параметри (рядки 1-7):</h4>
                    <ul className="text-sm text-blue-800 mt-2 space-y-1">
                      <li>• Початок робіт (рік)</li>
                      <li>• Вартість робіт (млн грн) - обов'язково!</li>
                      <li>• Термін служби (років)</li>
                      <li>• Інтенсивність руху - автозаповнюється ✓</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900">Параметри трафіку (рядок 8):</h4>
                    <ul className="text-sm text-green-800 mt-2 space-y-1">
                      <li>• % легкових автомобілів</li>
                      <li>• % вантажних (легких)</li>
                      <li>• % автобусів</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-900">Витрати на експлуатацію (рядки 11-12):</h4>
                    <ul className="text-sm text-yellow-800 mt-2 space-y-1">
                      <li>• Витрати ДО реконструкції</li>
                      <li>• Витрати ПІСЛЯ реконструкції</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-orange-50 rounded border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-900">Витрати на утримання (рядки 30-31):</h4>
                    <ul className="text-sm text-orange-800 mt-2 space-y-1">
                      <li>• Витрати ДО робіт (млн грн/рік)</li>
                      <li>• Витрати ПІСЛЯ робіт (млн грн/рік)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. Виконання розрахунку ENPV:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Після заповнення всіх 31 параметра натисніть <Badge className="bg-green-600">🧮 Розрахувати ENPV</Badge></li>
                  <li>Розрахунок виконується автоматично за методикою економічної оцінки</li>
                  <li>Результати зберігаються в Redux Store</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">4. Аналіз результатів ENPV:</h3>
                
                <p className="text-gray-700 mb-3">Система розраховує чотири ключові показники:</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300 text-center">
                    <div className="text-2xl font-bold text-green-700">ENPV</div>
                    <div className="text-xs text-gray-600 mt-1">Економічна чиста приведена вартість (млн грн)</div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300 text-center">
                    <div className="text-2xl font-bold text-yellow-700">EIRR</div>
                    <div className="text-xs text-gray-600 mt-1">Економічна внутрішня норма дохідності (%)</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300 text-center">
                    <div className="text-2xl font-bold text-blue-700">BCR</div>
                    <div className="text-xs text-gray-600 mt-1">Співвідношення вигід до витрат</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-300 text-center">
                    <div className="text-2xl font-bold text-purple-700">Окупність</div>
                    <div className="text-xs text-gray-600 mt-1">Період окупності (років)</div>
                  </div>
                </div>

                <Alert className="bg-green-50 border-green-300 mt-4">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-900">✅ Критерії економічної доцільності:</AlertTitle>
                  <AlertDescription className="text-green-800">
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li><strong>ENPV &gt; 0</strong> - позитивна чиста вартість (проект вигідний)</li>
                      <li><strong>BCR &gt; 1.0</strong> - вигоди перевищують витрати</li>
                      <li><strong>EIRR &gt; 10%</strong> - прийнятна норма дохідності</li>
                      <li>Період окупності має бути в межах терміну служби дороги</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">5. Детальний розрахунок по роках (Сторінка 6):</h3>
                
                <p className="text-gray-700 mb-3">Таблиця річних показників містить:</p>

                <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Ключові стовпці:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>• <strong>Рік</strong> - календарний період (від 0 до терміну служби)</div>
                    <div>• <strong>Інтенсивність</strong> - з урахуванням щорічного зростання</div>
                    <div>• <strong>Капітальні витрати</strong> - тільки в рік 0</div>
                    <div>• <strong>Витрати на утримання</strong> - щорічні витрати ДО та ПІСЛЯ робіт</div>
                    <div>• <strong>Економічний ефект</strong> - вигоди мінус витрати за рік</div>
                    <div>• <strong>ENPV накопичена</strong> - ключовий показник!</div>
                  </div>
                </div>

                <Alert className="bg-purple-50 border-purple-300 mt-4">
                  <Info className="h-4 w-4 text-purple-600" />
                  <AlertDescription className="text-purple-800">
                    <strong>Формула розрахунку:</strong> ENPV = Σ (Економічний ефект<sub>t</sub> / (1 + r)<sup>t</sup>) - Капітальні витрати
                    <br/>де r = 10% (ставка дисконтування)
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-indigo-50">
              <CardTitle>Сторінка 7: Рангування об'єктів дорожніх робіт</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 mt-4">
              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-900">⚡ Автоматичний розрахунок</AlertTitle>
                <AlertDescription className="text-blue-800">
                  При відкритті Сторінки 7 система автоматично розраховує рангування для всіх доріг, для яких було виконано розрахунок ENPV на Сторінках 5-6
                </AlertDescription>
              </Alert>

              <div>
                <h3 className="font-semibold text-lg mb-3">1. Методика ранжування:</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                    <strong className="text-green-900">Крок 1: Відбір економічно доцільних проектів</strong>
                    <p className="text-sm text-green-700 mt-1">BCR &gt; 1.0 - вигоди перевищують витрати</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <strong className="text-blue-900">Крок 2: Сортування за ENPV</strong>
                    <p className="text-sm text-blue-700 mt-1">Від більшого до меншого - проекти з найбільшим економічним ефектом мають вищий пріоритет</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-500">
                    <strong className="text-purple-900">Крок 3: Присвоєння рангів</strong>
                    <p className="text-sm text-purple-700 mt-1">Топ-3 проекти отримують медалі 🥇🥈🥉</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">2. Відображення результатів:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Таблиця з усіма дорогами, відсортована за рангом</li>
                  <li>Для кожної дороги показано: Ранг, Найменування, Вид робіт, Вартість, ENPV, BCR, EIRR</li>
                  <li>Топ-3 проекти виділені золотими/срібними/бронзовими медалями</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">3. Статистика за видами робіт:</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <div className="text-3xl mb-2">🔵</div>
                    <div className="font-semibold text-blue-900">Поточний ремонт</div>
                    <div className="text-sm text-gray-600 mt-1">Кількість проектів</div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg text-center">
                    <div className="text-3xl mb-2">🟡</div>
                    <div className="font-semibold text-yellow-900">Капітальний ремонт</div>
                    <div className="text-sm text-gray-600 mt-1">Кількість проектів</div>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg text-center">
                    <div className="text-3xl mb-2">🔴</div>
                    <div className="font-semibold text-red-900">Реконструкція</div>
                    <div className="text-sm text-gray-600 mt-1">Кількість проектів</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">4. Використання результатів:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Рангування допомагає визначити пріоритетність проектів</li>
                  <li>Проекти з вищим рангом мають більший економічний ефект</li>
                  <li>Використовуйте рангування для складання плану робіт з урахуванням наявного бюджету</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Історія розрахунків */}
      <Card className="border-2 border-indigo-500">
        <CardHeader className="bg-indigo-50">
          <CardTitle>📜 Історія розрахунків</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-3">1. Перегляд збережених сесій:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Відкрийте розділ "Історія розрахунків" в головному меню</li>
              <li>Відображається список всіх сесій з датою створення та статусом</li>
              <li>Статуси: "Завершено" (всі розділи заповнені), "В процесі" (є незбережені дані)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">2. Фільтрація сесій:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>За роками</strong> - оберіть рік для перегляду сесій цього року</li>
              <li><strong>За місяцями</strong> - фільтрація по місяцях обраного року</li>
              <li><strong>За днями</strong> - точний пошук за конкретну дату</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">3. Детальний перегляд сесії:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Натисніть <Badge variant="outline">👁️ Перегляд</Badge> для відкриття детальної інформації</li>
              <li>Відображаються дані всіх трьох розділів:
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>Розділ I: Результати Q₁, Q₂, загальний бюджет, таблиці показників</li>
                  <li>Розділ II: Нормативи по категоріях, регіональні результати, коефіцієнти</li>
                  <li>Розділ III: Списоклянок доріг, показники ENPV, рангування</li>
                </ul>
              </li>
              <li>Можливість експорту окремих розділів в Excel або PDF</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">4. Видалення сесій:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Натисніть <Badge variant="outline" className="text-red-600">🗑️ Видалити</Badge> для видалення сесії</li>
              <li>З'явиться діалог підтвердження</li>
              <li>Видалені сесії не можна відновити - регулярно експортуйте важливі дані!</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Секція з технічними вимогами */}
      <Card>
        <CardHeader>
          <CardTitle>⚙️ Технічні вимоги та поради</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Системні вимоги:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Браузер: Chrome 90+, Firefox 88+, Edge 90+</li>
                <li>• Роздільна здатність: мінімум 1366x768</li>
                <li>• Оперативна пам'ять: мінімум 4 ГБ</li>
                <li>• Підключення до інтернету</li>
                <li>• Включений JavaScript</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Рекомендації:</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Використовуйте Google Chrome для найкращої сумісності</li>
                <li>• Регулярно зберігайте результати</li>
                <li>• Експортуйте важливі розрахунки в Excel/PDF</li>
                <li>• Не використовуйте режим інкогніто (дані не збережуться)</li>
              </ul>
            </div>
          </div>

          <Alert className="bg-yellow-50 border-yellow-300">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-900">⚠️ Типові помилки та рішення:</AlertTitle>
            <AlertDescription className="text-yellow-800">
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li><strong>"Заповніть всі обов'язкові поля"</strong> - перевірте поля, позначені червоним або зірочкою</li>
                <li><strong>"Спочатку виконайте розрахунки на попередній вкладці"</strong> - завершіть попередній крок</li>
                <li><strong>"Немає даних для розрахунку"</strong> - збережіть результати попереднього розділу</li>
                <li><strong>"Помилка завантаження файлу"</strong> - перевірте формат файлу (.xlsx, .xls) та структуру даних</li>
                <li><strong>"Файл занадто великий"</strong> - максимальний розмір файлу 10 MB</li>
                <li><strong>"Некоректне значення"</strong> - використовуйте тільки числа, крапку як десятковий роздільник</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert className="bg-red-50 border-red-300">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-900">🚨 Повільна робота програми?</AlertTitle>
            <AlertDescription className="text-red-800">
              <p className="mb-2"><strong>Рішення:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Закрийте інші вкладки браузера</li>
                <li>Очистіть кеш браузера (Ctrl+Shift+Delete)</li>
                <li>Перезавантажте сторінку (F5)</li>
                <li>Перезапустіть браузер</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Глосарій */}
      <Card>
        <CardHeader>
          <CardTitle>📚 Глосарій термінів</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { term: 'ENPV', desc: 'Економічна чиста приведена вартість' },
              { term: 'EIRR', desc: 'Економічна внутрішня норма дохідності' },
              { term: 'BCR', desc: 'Співвідношення вигід до витрат' },
              { term: 'Q₁', desc: 'Обсяг фінансування державних доріг' },
              { term: 'Q₂', desc: 'Обсяг фінансування місцевих доріг' },
              { term: 'ЕУ', desc: 'Експлуатаційне утримання' }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                <div className="font-bold text-gray-900">{item.term}</div>
                <div className="text-sm text-gray-700">{item.desc}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManual;