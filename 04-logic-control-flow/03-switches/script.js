const d = new Date(2024, 3, 14, 7, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 0:
    console.log("It is January");
    break;
  case 1:
    console.log("It is February");
    break;
  case 2:
    console.log("It is March");
    break;
  case 3:
    console.log("It is April");
    break;

  default:
    console.log("It is not January, Feb, March or April");
}

//Range Evaluation

switch (true) {
  case hour < 12:
    console.log("Good morning");
    break;
  case hour < 18:
    console.log("Good Afternoon");
    break;

  default:
    console.log("Good night");
}
