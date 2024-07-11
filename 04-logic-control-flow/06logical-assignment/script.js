// ||= assigns the right side value only if the left is a falsy value.

let a = 0; //0 is falsy

// if (!a) {
//   a = 10;
// }

//shorthand using or operator
// a = a || 10; // if a is falsy, assign the right

//using assignment operator
a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.
let b = 10;

if (b) {
  b = 20;
}

b = b && 20;

b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined.

let c = null;

if (c === null || c === undefined) {
  c = 30;
}

c = c ?? 20;

c ??= 20;

console.log(c);
