//global window object
// console.log(window);

//the document object is part of the window object
// console.log(window.document);
// console.log(document);
// console.dir(window.document);
// console.log(document.body);

// console.log(document.body.innerHTML);
// console.log(document.links[0]);

//We can set properties of elements
// document.body.innerHTML = "<h1>Hello from body</h1>";

//document object has a ton of methods. One is `document.write()` which will write something to the document
// document.write("Hello from JS");

//we also have methods to select elements more directly
// document.getElementById("main").innerHTML = "<h1>Hello from Main</h1>";
document.querySelector("#main h1").innerText = "Hello";
