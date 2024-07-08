let x;

const person = {
  name: "Juan Dela Cruz",
  age: 19,
  isAdmin: true,
  address: {
    street: "143 Paghanapin St.",
    region: "IV-A",
    city: "Dasmarinas",
  },
  hobbies: ["music", "sports", "photography"],
};

// console.log(person);

//Accessing object properties
x = person.name; //Dot notation
x = person["age"]; //bracket notation
x = person.address.city;
x = person.hobbies[2];

//Updating properties
person.name = "Maria Clara";
person["isAdmin"] = false;

//delete properties
delete person.age;

//create a new property
person.hasChildren = true;

//Add a function
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

x = person;
console.log(x);
