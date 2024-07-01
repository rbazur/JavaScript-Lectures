let x;

//coerced to string
x = 5 + "5";
x = 5 + Number("5");

//coarced toa  number
x = 5 * "5";

//null is coerced to 0 because it is a falsy values
x = 5 + null;
x = Number(null);
x = Number(true);
x = Number(false);

//true is coerced to 1
x = 5 + true;

//false is coerced to 0
x = 5 + false;

//undefined is coerced to NaN
x = 5 + undefined;

//######################################
console.log(x, typeof x);
