console.log(10 < 20 && 30 > 15 && 40 > 30); //all conditions are true

console.log(10 > 20 || 30 < 15 || 20 > 5);

//&& - Will return first falsy value or the last value
let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && "" && 0 && 30;

// console.log(a);

// || - will return the first truthy value or the last value
let b;
b = 10 || 20;
b = 10 || 20 || 30;
b = 0 || 20 || 30;
b = 0 || null || "" || undefined;

// console.log(b);

//?? - Returns the right side operand when the left is null or undefined

let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 20;
c = 0 ?? 20;
c = "" ?? 20;
console.log(c);
