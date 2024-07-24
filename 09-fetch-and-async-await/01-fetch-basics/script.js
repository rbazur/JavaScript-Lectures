//fetch api returns a promise
// fetch("./movies.json").then((response) => {
//   console.log(response);
// });

//fetching a JSON file
// fetch("./movies.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//dahil sya ay implicit return, pwede nating gawin ito:
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//fetching a text file
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

//fetching from an API
fetch("https://api.github.com/users/rbazur")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.login));
