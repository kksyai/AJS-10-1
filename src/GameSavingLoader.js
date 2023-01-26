import json from './parser.js';
import read from '../reader.js';

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
