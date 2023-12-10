// Typescript does not track the mutating side effects of a function
let dice: number;
function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}
rollDice();

console.log(dice);
