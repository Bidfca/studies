import _ from "lodash";

// Importing CSS files directly in index.html is no longer necessary. Webpack handles CSS imports.
// import "./index.css";

import style from "./index.css";

// { header: "HCs2dRRKvIwDvm6nFtLh", button: "A4ZxUlvRrRRgz53hPnaA" };
console.log(style);

import "./clearButton";

import logo from "./assets/webpack.png";

import "./assets/fonts/Redressed-Regular.ttf";

const btn1 = document.getElementById("button1");
const logoEl = document.getElementById("logo");

btn1.addEventListener("click", function () {
  // Note: Webpack creates an IIFE (Immediately Invoked Function Expression), so "buttonClicked" won't be available globally when the button is clicked.
  // function buttonClicked() {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";
  el.classList.add([style.header]);
  const listItems = ["Apple", "orange", "Banana"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
  // }
});

// If the style is declared as global, it won't be accessible through the "style" object anymore.
// btn1.classList.add([style.button]);

logoEl.src = logo;
