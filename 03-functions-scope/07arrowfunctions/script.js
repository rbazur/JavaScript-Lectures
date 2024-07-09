//more compact, implicit returns

//normal function declaration
// function add(a, b) {
//   return a + b;
// }

//arrow function
const add = (a, b) => {
  return a + b;
};

//Implicit return
const subtract = (a, b) => a - b;

//Can leave off () with a single params
const double = (a) => a * 2;

//return an object
const createObj = () => ({
  name: "Ryan",
});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
  console.log(n);
});

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(double(1, 2));
console.log(createObj(1, 2));
