const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

console.log(post);

//convert to JSON String
const str = JSON.stringify(post);
console.log(str);

//Parse JSON
const obj = JSON.parse(str);

console.log(obj);

// JSON & arrays;
const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body",
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);
