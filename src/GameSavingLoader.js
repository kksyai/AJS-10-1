import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  load() {
    read()
      .then((data) => {
        const getData = data;
        return getData;
      })
      .then((getData) => {
        json(getData)
          .then((readData) => {
            const saving = JSON.parse(readData);
            return saving;
          });
      });
  }
}

/* Для вас реализованы функции-заглушки, которые эмулируют чтение файла
и преобразование прочитанного в JSON. Ваша задача — реализовать класс GameSavingLoader
с методом load, который загружает данные с помощью функции read,
парсит их с помощью функции json() и создаёт объект типа GameSaving.
*/
