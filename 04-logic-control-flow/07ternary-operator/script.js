// condition ?  valueIfTrue : valueIfFalse

const age = 19;

//if statement
// if (age >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You cannot vote!");
// }

//using a ternary operaTOR
// condition ?  valueIfTrue : valueIfFalse
age >= 18 ? console.log("You can vote") : console.log("You can not vote!");

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "You can vote" : "You can not vote";

console.log(canVote);
console.log(canVote2);

//Multiple statements
const auth = true;

//long version
// let redirect;

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Access denied");
//   redirect = "/login";
// }

//Shorter ternary version
// const redirect = auth
//   ? (alert("Welcome to the dashboard"), "/dashboard")
//   : (alert("Access Denied"), "/login");
// console.log(redirect);

//ternary with no else
// auth ? console.log("Welcome to the dashboard") : null;

//shorthand for ternary with no else
// auth && console.log("Welcome to the dashboard");
