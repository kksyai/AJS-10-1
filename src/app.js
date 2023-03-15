import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
  return saving;
}, (error) => {
  throw new Error(error);
});
