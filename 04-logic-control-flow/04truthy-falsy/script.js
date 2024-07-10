//Falsy values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

//Truthy Values
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = " ";

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

const posts = ["Post One", "Post Two"];
// const posts = [];

if (posts) {
  console.log("List Posts");
} else {
  console.log("No posts to list");
}

//Solution
if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No posts to list");
}

//Checking for empty objects
// const user = {
//   name: "Ryan",
// };

const user = {};

if (user) {
  console.log("List User");
} else {
  console.log("No user");
}

//Solution: object.keys
if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log("No User");
}

//loose equality
console.log(false == 0); //true
console.log("" == 0); //true
console.log(null == undefined); //true

//strict equality | ===
console.log(false === 0); //false
console.log("" === 0); //false
console.log(null === undefined); //false
