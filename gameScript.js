console.log("JavaScript Working");

const page = document.getElementById("gameBody");
const cords = document.getElementById("cords");
const slider = document.getElementById("drawSlider");

let isDrawing = false;
let drawType = "square";
let drawSize = 50;
let clear = false;

slider.oninput = function() {
	drawSize = this.value;
}

function squareTool() {
	drawType = "square";
}

function circleTool() {
	drawType = "circle";
}

function clearScreen() {
	clear = true;
	if (clear == true) {
		const boxes = document.querySelectorAll('.box');
		boxes.forEach(box => {box.style.backgroundColor = "white";})
		clear = false;
	}
}

function drawBox(event) {
	const rect = page.getBoundingClientRect();
	let X = event.clientX - rect.left;
	let Y = event.clientY - rect.top;
	
	//let X = event.offsetX;
	//let Y = event.offsetY;
	const box = document.createElement("div");
	box.className = "box";
	box.style.pointerEvents = "none";
	box.style.position = "absolute";
	box.style.top = Y + "px";
	box.style.left = X + "px";
	box.style.width = drawSize + "px";
	box.style.height = drawSize + "px";
	box.style.backgroundColor = "black";
	if (drawType == "circle") {
		box.style.borderRadius = "100%";
	} else if (drawType == "square") {
		box.style.borderRadius = "0%";
	} 
	
	box.style.transform = "translate(-50%, -50%)";
	page.append(box);
	
}

function eventMouseD(event) {
	isDrawing = true;
	drawBox(event);
}

function eventHandle(event) {
	cords.innerHTML = "X: " + event.offsetX + " Y: " + event.offsetY;
	if (isDrawing == true) {
		drawBox(event)
	}
}

function eventMouseU(event) {
	isDrawing = false;
}

page.addEventListener("mousemove", eventHandle);
page.addEventListener("mousedown", eventMouseD);
window.addEventListener("mouseup", eventMouseU);

