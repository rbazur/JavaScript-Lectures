let x;

const num = new Number(3.141592654);

//toString() - returns a string representation of a number
x = num.toString();

//to get the length
x = num.toString().length;

//toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

//toPrecision() - returns a number with the specified length
x = num.toPrecision(3);

//toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString("en-US");

//valueOf - get value
x = num.valueOf();

//largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x);
