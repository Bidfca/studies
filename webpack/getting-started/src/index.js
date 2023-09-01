import _ from "lodash";

// Importing CSS files directly in index.html is no longer necessary. Webpack handles CSS imports.
import "./index.css";

document.getElementById("button1").addEventListener("click", function () {
  // Note: Webpack creates an IIFE (Immediately Invoked Function Expression), so "buttonClicked" won't be available globally when the button is clicked.
  // function buttonClicked() {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";
  const listItems = ["Apple", "orange", "Banana"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
  // }
});
