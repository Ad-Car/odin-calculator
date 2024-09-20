let keyed;
let first;
let isFirstSet;
let second;
let isSecondSet;
let operator;
let result;
let isFirstDecimalSet;
let isSecondDecimalSet;

function clear() {
	keyed = "";
	first = "";
	isFirstSet = false;
	second = "";
	isSecondSet = true;
	operator = "";
	result;
	isFirstDecimalSet = false;
	isSecondDecimalSet = false;
}	

function add(a,b) {
	let numa = Number(a);
	let numb = Number(b);
	return numa + numb;
};
function subtract(a,b) {
	return a - b;
};
function multiply(a,b) {
	return a * b;
};
function divide(a,b) {
	return a / b;
};

function operate(operator,first,second) {
	if (operator === '+') {
		return add(first, second)};
	if (operator === '-') {
		return subtract(first, second)};
	if (operator === 'X') {
		return multiply(first, second)};
	if (operator === '/') {
		return divide(first, second)};
};

function writeToDisplay(str){
	document.getElementById("display").textContent = str;
}

function clearDisplay(){
	writeToDisplay("");
}


function drawCalculator() {
	const container = document.querySelector("#container");
	container.classList.add("container");
	const content = document.createElement("div");
	content.setAttribute("id","content");
	container.appendChild(content);

	const display = document.createElement("div");
	display.setAttribute("id", "display");
	display.classList.add("display");
	content.appendChild(display);

	let i
	for (i = 0; i < 5; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		content.appendChild(row);
		let j
		for (j = 0; j < 4; j++) {
			const key = document.createElement("span");
			key.setAttribute("id",`${i}-${j}`)
			key.classList.add("key");
			row.appendChild(key);
		}
	}

	document.getElementById("0-3").textContent = "X";
	document.getElementById("1-0").textContent = "7";
	document.getElementById("1-1").textContent = "8";
	document.getElementById("1-2").textContent = "9";
	document.getElementById("1-3").textContent = "/";
	document.getElementById("2-0").textContent = "4";
	document.getElementById("2-1").textContent = "5";
	document.getElementById("2-2").textContent = "6";
	document.getElementById("2-3").textContent = "-";
	document.getElementById("3-0").textContent = "1";
	document.getElementById("3-1").textContent = "2";
	document.getElementById("3-2").textContent = "3";
	document.getElementById("3-3").textContent = "+";
	document.getElementById("4-0").textContent = "C";
	document.getElementById("4-1").textContent = "0";
	document.getElementById("4-2").textContent = ".";
	document.getElementById("4-3").textContent = "=";

	const keys = document.querySelectorAll(".key")
	for (let key of keys) {
		key.addEventListener("click", () => {
			let keyed = key.textContent;
			if ( keyed === "C" ) {
				clear();
				keyed = ""}

			if ( keyed === "." && ( isFirstDecimalSet | isSecondDecimalSet )) {
				keyed = ""}
			if (keyed === "." && !isFirstSet) { isFirstDecimalSet === true };
			if (keyed === "." && !isSecondSet) { isSecondDecimalSet === true };
			

			if (["/","+","-","X"].includes(keyed)) {
				clearDisplay();
				operator = keyed;
				console.log(operator);
				keyed = "";
				isFirstSet = true;
				isSecondSet = false;
			}
			if (keyed === "=" ) {
				isSecondSet = true;
				result = operate(operator,first,second)
				clearDisplay();
				writeToDisplay(result);
			}
			if (isFirstSet === false) {
				first = first.concat(keyed);
				writeToDisplay(first)}

			if (isSecondSet === false) {
				second = second.concat(keyed);
				writeToDisplay(second)}
		})
	}
}

clear();
drawCalculator();
///writeToDisplay("0");



