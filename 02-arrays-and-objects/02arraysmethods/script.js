let x;

const arr = [28, 38, 44, 29, 28, 56];

//push() - pushes a value on to the end of the array
// arr.push(100);

//pop() - take the last value off
// arr.pop();

//unshift() - Adds a value to the beginning of the array
// arr.unshift(99);

//shift() - remove the first value
// arr.shift();

//reverse() - reverses an array
// arr.reverse();

//includes() - check to see if something is an array
// x = arr.includes(44);

//indexOf() - Returns the index of the first match
// x = arr.indexOf(28);

//return array as a string
// x = arr.toString();
// x = arr.join();

//slice() - returns selected elements in an array as a new array
// x = arr.slice(1, 4);

//splice
console.log(arr);

// x = arr.splice(1, 4);
//chaining methods - some methods can be chained depending on the return value
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(arr);
console.log(x);
