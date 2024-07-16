const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Add all number together utilizing reduce
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

//another way to implement reduce
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum2);

//using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
console.log(sum3());

//reduce in shopping cart demo
const cart = [
  { id: 1, name: "Product 1", price: 150 },
  { id: 2, name: "Product 2", price: 350 },
  { id: 3, name: "Product 3", price: 550 },
  { id: 4, name: "Product 4", price: 180 },
  { id: 5, name: "Product 5", price: 370 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log(total);

//arrow function
// const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
const total2 = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total2);
