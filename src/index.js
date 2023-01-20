
import GameSavingLoader from "../GameSavingLoader";


GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
  }, (error) => {
    // ...
  });