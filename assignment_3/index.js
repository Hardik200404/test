document.getElementById("main-heading").textContent = "Fruit World";

// Change font color of 'Fruit World' to orange
document.getElementById("main-heading").style.color = "orange";

// Change background color of div with id = "header" to green color
document.getElementById("header").style.backgroundColor = "green";

// Add bottom border of orange color to div with id = "header"
document.getElementById("header").style.borderBottom = "2px solid orange";

// Change font color of 'Fruits In Basket' to green
document.getElementById("basket-heading").style.color = "green";

// Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
const thanksDiv = document.getElementById("thanks");
const paragraph = document.createElement("p");
paragraph.textContent = "Please visit us again";
thanksDiv.appendChild(paragraph);