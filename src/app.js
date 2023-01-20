
import GameSavingLoader from "../GameSavingLoader";


// GameSavingLoader.load().then((saving) => {
//     // saving объект класса GameSaving
//   }, (error) => {
//     // ...
//   });

const save = GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  let user = JSON.parse(saving);
  return user
});

console.log(save);

