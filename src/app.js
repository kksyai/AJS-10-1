import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
}, (error) => {
  // ...
});
