import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data)
        .then((saving) => new GameSaving(JSON.parse(saving))));
  }
}

/* Для вас реализованы функции-заглушки, которые эмулируют чтение файла
и преобразование прочитанного в JSON. Ваша задача — реализовать класс GameSavingLoader
с методом load, который загружает данные с помощью функции read,
парсит их с помощью функции json() и создаёт объект типа GameSaving.
*/
