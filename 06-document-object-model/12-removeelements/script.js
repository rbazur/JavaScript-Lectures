//remove() Method
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

// removeClearButton();

//remove apples:
//removeChild
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}
// removeFirstItem();

function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

removeItem(1);
removeItem(2);
