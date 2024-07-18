//insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1);
}
insertElement();

//insertAdjacentText Example
function insertText() {
  const item = document.querySelector("li:first-child");

  item.insertAdjacentText("beforebegin", "insertAdjacentText"); //position
}
insertText();

//insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjacentHTML</h2>");
}
insertHTML();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
