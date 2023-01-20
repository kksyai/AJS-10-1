import json from "./parser";
import read from "../reader";

export default class GameSavingLoader {
    static load() {
      const data = read(); // возвращается Promise!
      const value = json(data); // возвращается Promise!
      return value;
    }
  }

// должен возвращать объект вида 
/*{ 
    "id": <number>, // id сохранения
    "created": <timestamp>, // timestamp создания
    "userInfo": {
    "id": <number>, // user id
    "name": <string>, // user name
    "level": <number>, // user level
    "points": <number> // user points
    }
  } 
*/
