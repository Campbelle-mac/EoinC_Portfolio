console.log("JavaScript Working");

const page = document.getElementById("gameBody");
const cords = document.getElementById("cords");

function eventHandle(event) {
	cords.innerHTML = "X: " + event.offsetX + " Y: " + event.offsetY;
}

function eventMouseD(event) {
	const box = document.createElement("div");
	let X = event.offsetX;
	let Y = event.offsetY;
	box.id = "box";
	box.style.width = "100px";
	box.style.height = "100px";
	box.style.marginLeft = Y + "px";
	//box.style.marginTop = X + "px";
	box.style.backgroundColor = "black";
	page.append(box);
	
}

page.addEventListener("mousemove", eventHandle);
page.addEventListener("mousedown", eventMouseD);

