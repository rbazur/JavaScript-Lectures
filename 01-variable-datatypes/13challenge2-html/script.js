//random for 1 to 100
const x = Math.floor(Math.random() * 100 + 1);
//random 1 to 50
const y = Math.floor(Math.random() * 50 + 1);

//sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

//diff

const diff = x - y;
const differenceOutput = `${x} - ${y} = ${diff}`;
console.log(differenceOutput);

//product
const prod = x * y;
const productOutput = `${x} * ${y} = ${prod}`;
console.log(productOutput);

//quotient
const quot = x / y;
const quotientOutput = `${x} / ${y} = ${quot}`;
console.log(quotientOutput);

//remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);
