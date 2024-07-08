const x = 100;

//An if statement is a block
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}
//kung anuman ang nasa loob ng block scope, di sya access sa global
// console.log(x + y); //reference error: y is not defined

//a loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); //Refernce Error

//Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);

//var is function scoped
function run() {
  var d = 100;
  console.log(d);
}

run();
// console.log(d); //Reference error
