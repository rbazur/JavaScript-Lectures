// Stack - static memory allocation (primitive data types)
//Value mo is stored sa stack

// const name = "Ryan";
// console.log(name);

//Heap - dynamic memory allocation (objects and arrays)
//Reference is stored sa heap

const person = {
  name: "Ryan",
  age: 30,
};

let newPerson = person;
newPerson.name = "Pauline";

console.log(person);

console.log(person.name);
