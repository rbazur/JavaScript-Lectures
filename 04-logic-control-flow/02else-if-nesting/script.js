const d = new Date(2024, 1, 14, 20, 0, 0);
const hour = d.getHours();

// if (hour < 12) {
//   console.log("Good morning");
// } else if (hour < 18) {
//   console.log("Good afternoon");
// } else {
//   console.log("Good night");
// }

//Nested if
if (hour < 12) {
  console.log("Good morning");
  if (hour === 6) {
    console.log("Wake up");
  }
} else if (hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good night");
}

if (hour >= 7 && hour < 15) {
  //need parehong true, para mag true
  console.log("It is work time");
}

if (hour === 6 || hour === 20) {
  //isa lang ang magtrue, its true
  console.log("Brush your teeth");
}
