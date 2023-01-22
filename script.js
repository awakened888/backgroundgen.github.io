var cssOutput = document.querySelector("#css-output");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random-btn");

// Function to set the gradient background
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssOutput.textContent = body.style.background + ";";
}

// Function to generate random colors
function generateRandomColors() {
    color1.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    color2.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    setGradient();
}

// Add event listeners to color inputs
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Add event listener to random button
randomBtn.addEventListener("click", generateRandomColors);

// Set initial gradient and css output on page load
setGradient();
