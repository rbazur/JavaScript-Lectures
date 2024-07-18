//replaceWith() method

function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child"); //eto yung gusto nating ireplace

  const li = document.createElement("li"); //create element
  li.textContent = "Replaced First"; //new text

  firstItem.replaceWith(li);
}

replaceFirstItem();

//replaceall

function replaceAllItems() {
  const lis = document.querySelectorAll("li");

  //   lis.forEach((item, index) => {
  // item.outerHTML = "<li>Replace All</li>"; //ito yung pinapalit natin sa kanilang lahat
  // item.innerHTML = "Replace All";

  //replace everything except second item
  // if (index === 1) {
  //   item.innerHTML = "Second Item";
  // } else {
  //   item.innerHTML = "Replace All";
  // }

  //anothe implementation for replacing except 2nd item

  //   });

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? "<li>Second Item </li>" : "<li>Item</li>")
  );
}

replaceAllItems();
