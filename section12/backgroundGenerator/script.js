var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector("#random");
var body = document.getElementById("gradient");

function setGradient(value1=color1.value, value2=color2.value) {
	if (value1 != color1.value) {
		color1.value = value1;
	}
	if (value2 != color2.value) {
		color2.value = value2;
	}

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = "01234567789ABCDEF";
	var color = "#"
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomColors() {
	setGradient(getRandomColor(), getRandomColor());
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomColors);
setGradient();

