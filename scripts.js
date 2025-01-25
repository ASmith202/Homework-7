const button = document.getElementById("butt");
const fruitsContainer = document.getElementById("fruits");

const fruits = ["🍌", "🥭", "🍓", "🍎", "🍅", "🍈"];

button.addEventListener("click", () => {
  // using a for each loop,
  fruits.forEach((fruit) => {
    const div = document.createElement("div");
    div.innerText = fruit;
    fruitsContainer.appendChild(div);
  });
  // iterate through each fruit in the fruits array
  // inside of the loop:
  // create a new div
  // set the innerText to the fruit string value
  // append the div to the fruitsContainer
});
