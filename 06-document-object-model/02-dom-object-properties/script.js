let output;
// document.all;
output = document.all;
output = document.all[11];
output = document.all.length;

//everything in the html tags
output = document.documentElement;

//Head and body tags
// output = document.head;
// output = document.body;

//Html collection of everythuing in head/body
// output = document.head.children;
// output = document.body.children;

//random properties
// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

//get all forms
// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// document.forms[0].id = "new-id";

//get all images
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

//turn an HTML Collection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
