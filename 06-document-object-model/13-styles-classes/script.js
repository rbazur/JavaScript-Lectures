const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  //classname - gets a string of all classes
  //   console.log(itemList.className);
  //   console.log(text.className);
  //   text.className = "dark";

  //   console.log(itemList.classList);
  //   itemList.classList.forEach((c) => console.log(c));
  //   text.classList.add("dark");
  text.classList.toggle("dark");
}

document.querySelector("button").onclick = run; //tsaka ko na papaliwanag, next chapter
