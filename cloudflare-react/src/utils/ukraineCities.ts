// База координат міст України
export interface CityCoordinates {
  name: string;
  lat: number;
  lng: number;
  region?: string;
}

export const UKRAINE_CITIES: Record<string, CityCoordinates> = {
  // Обласні центри
  'Київ': { name: 'Київ', lat: 50.4501, lng: 30.5234, region: 'Київська' },
  'Харків': { name: 'Харків', lat: 49.9935, lng: 36.2304, region: 'Харківська' },
  'Одеса': { name: 'Одеса', lat: 46.4825, lng: 30.7233, region: 'Одеська' },
  'Дніпро': { name: 'Дніпро', lat: 48.4647, lng: 35.0462, region: 'Дніпропетровська' },
  'Донецьк': { name: 'Донецьк', lat: 48.0159, lng: 37.8028, region: 'Донецька' },
  'Запоріжжя': { name: 'Запоріжжя', lat: 47.8388, lng: 35.1396, region: 'Запорізька' },
  'Львів': { name: 'Львів', lat: 49.8397, lng: 24.0297, region: 'Львівська' },
  'Кривий Ріг': { name: 'Кривий Ріг', lat: 47.9105, lng: 33.3915, region: 'Дніпропетровська' },
  'Миколаїв': { name: 'Миколаїв', lat: 46.9750, lng: 31.9946, region: 'Миколаївська' },
  'Маріуполь': { name: 'Маріуполь', lat: 47.0971, lng: 37.5431, region: 'Донецька' },
  'Луганськ': { name: 'Луганськ', lat: 48.5740, lng: 39.3078, region: 'Луганська' },
  'Вінниця': { name: 'Вінниця', lat: 49.2328, lng: 28.4681, region: 'Вінницька' },
  'Херсон': { name: 'Херсон', lat: 46.6354, lng: 32.6169, region: 'Херсонська' },
  'Полтава': { name: 'Полтава', lat: 49.5883, lng: 34.5514, region: 'Полтавська' },
  'Чернігів': { name: 'Чернігів', lat: 51.4982, lng: 31.2893, region: 'Чернігівська' },
  'Черкаси': { name: 'Черкаси', lat: 49.4444, lng: 32.0598, region: 'Черкаська' },
  'Суми': { name: 'Суми', lat: 50.9077, lng: 34.7981, region: 'Сумська' },
  'Житомир': { name: 'Житомир', lat: 50.2547, lng: 28.6587, region: 'Житомирська' },
  'Хмельницький': { name: 'Хмельницький', lat: 49.4229, lng: 26.9871, region: 'Хмельницька' },
  'Чернівці': { name: 'Чернівці', lat: 48.2920, lng: 25.9354, region: 'Чернівецька' },
  'Рівне': { name: 'Рівне', lat: 50.6199, lng: 26.2516, region: 'Рівненська' },
  'Івано-Франківськ': { name: 'Івано-Франківськ', lat: 48.9226, lng: 24.7111, region: 'Івано-Франківська' },
  'Тернопіль': { name: 'Тернопіль', lat: 49.5535, lng: 25.5948, region: 'Тернопільська' },
  'Луцьк': { name: 'Луцьк', lat: 50.7472, lng: 25.3254, region: 'Волинська' },
  'Ужгород': { name: 'Ужгород', lat: 48.6208, lng: 22.2879, region: 'Закарпатська' },
  'Кропивницький': { name: 'Кропивницький', lat: 48.5079, lng: 32.2623, region: 'Кіровоградська' },
  
  // Важливі міста на трасах
  'Чоп': { name: 'Чоп', lat: 48.4297, lng: 22.2086, region: 'Закарпатська' },
  'Білгород-Дністровський': { name: 'Білгород-Дністровський', lat: 46.1976, lng: 30.3494, region: 'Одеська' },
  'Бориспіль': { name: 'Бориспіль', lat: 50.3521, lng: 30.9572, region: 'Київська' },
  'Бровари': { name: 'Бровари', lat: 50.5110, lng: 30.7897, region: 'Київська' },
  'Біла Церква': { name: 'Біла Церква', lat: 49.7887, lng: 30.1114, region: 'Київська' },
  
  // Міста на трасі М-06 (Київ - Чоп)
  'Самбір': { name: 'Самбір', lat: 49.5167, lng: 23.2000, region: 'Львівська' },
  'Новояворівськ': { name: 'Новояворівськ', lat: 49.9289, lng: 23.5736, region: 'Львівська' },
  'Яворів': { name: 'Яворів', lat: 49.9386, lng: 23.3928, region: 'Львівська' },
  'Мостиська': { name: 'Мостиська', lat: 49.7958, lng: 23.1450, region: 'Львівська' },
  'Мелітополь': { name: 'Мелітополь', lat: 46.8483, lng: 35.3656, region: 'Запорізька' },
  'Кременчук': { name: 'Кременчук', lat: 49.0686, lng: 33.4177, region: 'Полтавська' },
  'Краматорськ': { name: 'Краматорськ', lat: 48.7233, lng: 37.5561, region: 'Донецька' },
  'Слов\'янськ': { name: 'Слов\'янськ', lat: 48.8575, lng: 37.6197, region: 'Донецька' },
  'Ковель': { name: 'Ковель', lat: 51.2155, lng: 24.7089, region: 'Волинська' },
  'Умань': { name: 'Умань', lat: 48.7475, lng: 30.2208, region: 'Черкаська' },
  'Мукачево': { name: 'Мукачево', lat: 48.4394, lng: 22.7189, region: 'Закарпатська' },
  'Коломия': { name: 'Коломия', lat: 48.5280, lng: 25.0383, region: 'Івано-Франківська' },
  'Шостка': { name: 'Шостка', lat: 51.8621, lng: 33.4697, region: 'Сумська' },
  'Конотоп': { name: 'Конотоп', lat: 51.2405, lng: 33.2037, region: 'Сумська' },
  'Стрий': { name: 'Стрий', lat: 49.2625, lng: 23.8473, region: 'Львівська' },
  'Дрогобич': { name: 'Дрогобич', lat: 49.3498, lng: 23.5052, region: 'Львівська' },
  'Трускавець': { name: 'Трускавець', lat: 49.2779, lng: 23.5064, region: 'Львівська' },
  'Яремче': { name: 'Яремче', lat: 48.4508, lng: 24.5559, region: 'Івано-Франківська' },
  'Яготин': { name: 'Яготин', lat: 50.2806, lng: 31.7697, region: 'Київська' },
  'Фастів': { name: 'Фастів', lat: 50.0772, lng: 29.9158, region: 'Київська' },
  'Бердичів': { name: 'Бердичів', lat: 49.8983, lng: 28.5983, region: 'Житомирська' },
  
  // Додаткові міста на важливих трасах
  'Сквира': { name: 'Сквира', lat: 49.7350, lng: 29.6550, region: 'Київська' },
  'Новоград-Волинський': { name: 'Новоград-Волинський', lat: 50.5833, lng: 27.6167, region: 'Житомирська' },
  'Коростень': { name: 'Коростень', lat: 50.9597, lng: 28.6406, region: 'Житомирська' },
  'Радехів': { name: 'Радехів', lat: 50.2792, lng: 24.6408, region: 'Львівська' },
  'Буськ': { name: 'Буськ', lat: 49.9667, lng: 24.6167, region: 'Львівська' },
  'Броди': { name: 'Броди', lat: 50.0833, lng: 25.1500, region: 'Львівська' },
  'Перемишляни': { name: 'Перемишляни', lat: 49.6667, lng: 24.6167, region: 'Львівська' },
  'Глиняни': { name: 'Глиняни', lat: 49.8167, lng: 24.6333, region: 'Львівська' },
  'Городок': { name: 'Городок', lat: 49.7833, lng: 23.6500, region: 'Львівська' },
  'Сокаль': { name: 'Сокаль', lat: 50.4806, lng: 24.2828, region: 'Львівська' },
  'Червоноград': { name: 'Червоноград', lat: 50.3833, lng: 24.2333, region: 'Львівська' },
};

// Функція для пошуку міста (case-insensitive, з додатковими варіантами)
export const findCity = (cityName: string): CityCoordinates | undefined => {
  if (!cityName) return undefined;
  
  const normalized = cityName.trim();
  
  // Точний пошук
  if (UKRAINE_CITIES[normalized]) {
    return UKRAINE_CITIES[normalized];
  }
  
  // Пошук без урахування регістру
  const lowerCaseName = normalized.toLowerCase();
  const foundKey = Object.keys(UKRAINE_CITIES).find(
    key => key.toLowerCase() === lowerCaseName
  );
  
  if (foundKey) {
    return UKRAINE_CITIES[foundKey];
  }
  
  // Додаткові варіанти написання (русская вместо украинской)
  const variants: Record<string, string> = {
    'киев': 'Київ',
    'львов': 'Львів',
    'харьков': 'Харків',
    'одесса': 'Одеса',
    'днепр': 'Дніпро',
    'запорожье': 'Запоріжжя',
    'чоп': 'Чоп',
    'ужгород': 'Ужгород',
    'житомир': 'Житомир',
    'винница': 'Вінниця',
    'ровно': 'Рівне',
    'тернополь': 'Тернопіль',
    'черновцы': 'Чернівці',
  };
  
  const variant = variants[lowerCaseName];
  if (variant && UKRAINE_CITIES[variant]) {
    return UKRAINE_CITIES[variant];
  }
  
  // Часткове співпадіння (якщо введено частину назви)
  const partialMatch = Object.keys(UKRAINE_CITIES).find(
    key => key.toLowerCase().includes(lowerCaseName) || lowerCaseName.includes(key.toLowerCase())
  );
  
  return partialMatch ? UKRAINE_CITIES[partialMatch] : undefined;
};

// Отримати список всіх міст для автокомпліту
export const getCityNames = (): string[] => {
  return Object.keys(UKRAINE_CITIES).sort();
};

// Перевірити чи існує місто
export const cityExists = (cityName: string): boolean => {
  return findCity(cityName) !== undefined;
};

