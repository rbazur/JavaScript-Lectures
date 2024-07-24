//setTimeout - takes in a callback and a time to wait until that callback is executed

// setTimeout(function () {
//   console.log("Hello from callback");
// }, 0);

// console.log("Hello from global scope");

//named Function
// setTimeout(changeText, 2000);

function changeText() {
  document.querySelector("h1").textContent = "Hello from Callback";
}

//clearTimeout() - will clear a timer

const timerId = setTimeout(changeText, 3000);

document.querySelector("#cancel").addEventListener("click", () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log("Timer Cancelled");
});
