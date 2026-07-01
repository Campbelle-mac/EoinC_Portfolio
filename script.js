console.log("JavaScript Working");

let num = 0;
let mLeft = 0;

const mainBar = document.getElementById("mainBarID");
const countElement = document.getElementById("counter");
const circleMain = document.getElementById("circleID");

mainBarID.addEventListener("mouseover", function () {
	mainBarID.style.backgroundColor = "red";
})

mainBarID.addEventListener("mouseout", function () {
	mainBarID.style.backgroundColor = "blue";
})

function moveCircle() {
    circleMain.style.marginLeft = plusSize() + "px";
}

function plusSize() {
	return mLeft += 10;
}

function count() {
	counter.innerHTML = num += 1;
}

moveCircle();


