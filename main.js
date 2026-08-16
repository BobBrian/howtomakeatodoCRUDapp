let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

let data = {};
//Using the function, we collect data from the inputs and store them in our object named data. 
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
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
let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};