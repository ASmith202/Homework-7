const button = document.getElementById("butt");
const choresContainer = document.getElementById("chores");

const chores = [
  "Wash dishes", 
  "Sweep & Mop the Floors", 
  "Take Out Trash", 
  "Clean out Fridge", 
  "Wipe down stove and counter tops",
  "Straighten Living room",
  "Dust Celing Fans",
  "Windex Glass Tables",
  "Vaccum all Carpet Areas",
  "Clean all bathrooms",
  "Clean all bedrooms"

];

button.addEventListener("click", () => {
  choresContainer.innerHTML = '';  // Clear previous list before adding new chores
  
  chores.forEach((chore) => {
    const div = document.createElement("div");
    div.innerText = chore;
    div.classList.add("chore");  // Adding a class for styling and event handling
    
    // Add an event listener for the click event
    div.addEventListener("click", () => {
      div.style.textDecoration = "line-through"; // Optional: mark as completed visually
      setTimeout(() => {
        div.remove();  // Remove the chore from the DOM after a short delay
      }, 500); // 500ms delay before disappearing
    });
    
    choresContainer.appendChild(div);
  });
});
