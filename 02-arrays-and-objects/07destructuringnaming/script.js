//setting object properties with the same name as variable
const firstName = "Alice";
const lastName = "Guo";
const age = 24;

const person = {
  firstName,
  lastName,
  age,
};

// console.log(person.age);

//Destructuring object properties

const todo = {
  id: 1,
  title: "Buy BBQ",
  user: {
    name: "Alice",
  },
};

// const id = todo.id;
const { id, title, user } = todo;

// console.log(user);
//destructuring arrays & using the rest/spread operator

const numbers = [23, 45, 29, 8, 52];

// const [first, second] = numbers;
// console.log(first, second);

const [first, second, ...rest] = numbers;
console.log(first, second, rest);
