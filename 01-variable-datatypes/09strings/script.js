let x;

const name = "Ryan";
const age = 31;

//concatenation
x = "Hello, my name is " + name + " and I am " + age + " years old";

//Template literals
x = `Hello, my name is ${name} and I am ${age} years old`;

//String Properties and Methods
//creating a "string object" (JS does this automatically when using a property or method on a primitive string)

const s = new String("Hello World");
x = typeof s;

x = s.length;

//access value by key
x = s[6];

//shows the prototype of the string object. Shows the properties and methods

x = s.__proto__;

//Change case
x = s.toUpperCase();
x = s.toLowerCase();

//charAt() - returns the character at the specified index
x = s.charAt(6);

//indexOf - returns the index of the first occurence of a specified value in a string
x = s.indexOf("d");

//substring() - search a string for a specified value
x = s.substring(2, 5);

//slice() - extracts a part of a string and returns a new string
x = s.slice(3, 5);
x = s.slice(-11, -6);

//trim() = removes the unwanted space from beginning and end of the string
x = "            Hello World     ";
x = x.trim();

//includes() - returns true if the string is found
x = s.includes("Hell");

//split() - returns an array of strings
x = s.split("");

console.log(x);
