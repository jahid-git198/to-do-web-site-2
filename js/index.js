const inputBox = document.getElementById("input-value");

const todolist = document.getElementById("list-styles");
const value = inputBox.value;

const addtask = () => {
  localStoragekey(inputBox.value);

  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    li = document.createElement("li");
    li.innerHTML = inputBox.value;
    todolist.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
    inputBox.value = "";
  }
};

const localStoragepaste = () => {
  let cart = {};
  const getvalue = localStorage.getItem("cart");
  if (getvalue) {
    cart = JSON.parse(getvalue);
  }
  return cart;
};

const localStoragekey = (value) => {
  const cart = localStoragepaste();

  cart[value] = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
};

const display = ( ) => {
  const cart = localStoragepaste();
  for (const value in cart) {
    li = document.createElement("li");
    li.innerHTML = value;
    todolist.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
};

display();

todolist.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle()("checked");
    } else if (e.target.tagName === "span") {
      e.target.parentElement.remove();
    }
  },
  false
);

 todolist.addEventListener('click', function(e){
       if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');

       }
       else if (e.target.tagName === 'SPAN'){
             e.target.parentElement.remove();

       }

 })

// const inputBox = document.getElementById("input-value");
// const todolist = document.getElementById("list-styles");

// const addtask = () => {
//   if (inputBox.value === "") {
//     alert("you must write something");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     todolist.append(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//     inputBox.value = "";
//     saveData();
//   }
// };

// todolist.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

// function saveData() {
//   localStorage.setItem("data", todolist.innerHTML);
// }

// function showTask() {
//   todolist.innerHTML = localStorage.getItem("data");
// }
// showTask();
