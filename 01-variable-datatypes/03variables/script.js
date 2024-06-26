// Ways to declare a variable
// `var`, `let` & `const`

var firstName = "Juan";
let lastName = "Dela Cruz";
const age = 30;

console.log(firstName);
console.log(lastName);
console.log(age);

//Naming Conventions
// - only letters, numbers, underscores and dollar sign
// - Cannot start with a number

//Multi-word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables
lastName = "Azur";
console.log(lastName);

// We cannot reassign const
// age = 31;
// console.log(age);

// with the let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
console.log(arr);

arr.push(5);
console.log(arr);

const person = {
  name: "Ryan",
};
console.log(person);

person.name = "Pauline";
console.log(person);

person.email = "pau@gmail.com";
console.log(person);
