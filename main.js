let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

let data = [];
//Using the function, we collect data from the inputs and store them in our object named data. 
let acceptData = () => {
  let post = {
    id: Date.now(),
    text: input.value
  };

  data.push(post);

  localStorage.setItem("posts", JSON.stringify(data));

  createPost(post);
};

let deletePost = (e) => {
  let post = e.parentElement.parentElement;
  let postId = Number(post.id);

  data = data.filter((post) => post.id !== postId);

  localStorage.setItem("posts", JSON.stringify(data));

  post.remove();
};

let editPost = (e) => {
  let post = e.parentElement.parentElement;
  let postId = Number(post.id);

  let postData = data.find((post) => post.id === postId);

  input.value = postData.text;

  data = data.filter((post) => post.id !== postId);

  localStorage.setItem("posts", JSON.stringify(data));

  post.remove();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
  
};

//Template literals are a way to write text strings in JavaScript using backticks (`) instead of quotes
// The this keyword will refer to the element that fired the event. in our case, the this refers to the delete button.
let createPost = (post) => {
  posts.innerHTML += `
    <div id="${post.id}">
      <p>${post.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;

  input.value = "";
};

let savedPosts = localStorage.getItem("posts");

if (savedPosts) {
  data = JSON.parse(savedPosts);

  data.forEach((post) => {
    createPost(post);
  });
}