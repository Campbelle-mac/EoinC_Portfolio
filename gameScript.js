console.log("JavaScript Working");

const page = document.getElementById("gameBody");
const cords = document.getElementById("cords");

let isDrawing = false;

function drawBox() {
	let X = event.offsetX;
	let Y = event.offsetY;
	const box = document.createElement("div");
	let widthHeight = 25;
	
	box.className = "box";
	box.style.pointerEvents = "none";
	box.style.position = "absolute";
	box.style.top = Y - 20 + (widthHeight / 2) + "px";
	box.style.left = X + 84 + (widthHeight / 2) + "px";
	box.style.width = widthHeight + "px";
	box.style.height = widthHeight + "px";
	box.style.backgroundColor = "black";
	page.append(box);
}

function eventMouseD(event) {
	isDrawing = true;
	drawBox();
}

function eventHandle(event) {
	cords.innerHTML = "X: " + event.offsetX + " Y: " + event.offsetY;
	if (isDrawing == true) {
		drawBox()
	}
}

function eventMouseU(event) {
	isDrawing = false;
}

page.addEventListener("mousemove", eventHandle);
page.addEventListener("mousedown", eventMouseD);
window.addEventListener("mouseup", eventMouseU);

