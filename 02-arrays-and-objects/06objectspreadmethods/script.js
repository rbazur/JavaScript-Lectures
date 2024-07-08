let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy BBQ";
todo.completed = false;

x = todo;

//Object nesting
const person = {
  address: {
    coords: {
      lat: 29.1981,
      lng: -71.43,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//Speread operator
const obj3 = { ...obj1, ...obj2 };
x = obj3;

const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

//Array of Objects
const todos = [
  { id: 1, name: " Buy BBQ" },
  { id: 2, name: "Drop off my wife to the airport" },
  { id: 3, name: "Play ML all night" },
];

x = todos[0].name;

//get array of object keys
x = Object.keys(todo);

//Get length of an object
x = Object.keys(todo).length;

//Get array of object values
x = Object.values(todo);

//Get array of object key/value pair
x = Object.entries(todo);

//check of object has a property
x = todo.hasOwnProperty("name");

console.log(x);
