// a function is a block of instructions
// that can take single or multiple parameters
// and run operations on them
// and return a value

// function declaration
function sum(...n) {
  // function body starts
  let size = n.length;
  let result = 0;
  for (let i = 0; i < size; i++) {
    result = result + n[i];
  }

  return result; // function returns
} // function body ends

let monday = 100;
let tuesday = 150;
let weeklyIncome = sum(monday, 300, 400, 100, 250, 450, 100, 780, 200); // function calling
console.log(weeklyIncome);

// home task

// declare a multiplication function called mul
// that accepts any number of parameters
// returns the result of multiplications of them
// call the function giving it many parameters
// show the result
