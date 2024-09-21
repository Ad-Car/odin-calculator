let keyed;
let first;
let isFirstSet;
let second;
let isSecondSet;
let operator;
let isFirstDecimalSet;
let isSecondDecimalSet;

function reset() {
	keyed = "";
	first = "";
	isFirstSet = false;
	second = "";
	isSecondSet = false;
	operator = "";
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
	 let numb = Number(b);
	if ( numb === 0 ) {
		return ("Division by zero error!") } else {
			return a /b ;
		}
};

function operate(operator,first,second) {
	if (operator === '+') {
		return add(first, second)};
	if (operator === '-') {
		return subtract(first, second)};
	if (operator === '*') {
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

	let keypadValues = [ "","","","*","7","8","9","/","4","5","6","-","1","2","3","+","C","0",".","="]

  let keys = document.querySelectorAll(".key")
	//
	keypadValues.forEach( ( keypadValue, index ) => {
	if (index < keys.length ) {
		keys[index].textContent = keypadValue;
	}
	});

 //	document.getElementById("0-3").textContent = "*";
 //	document.getElementById("1-0").textContent = "7";
 //	document.getElementById("1-1").textContent = "8";
 //	document.getElementById("1-2").textContent = "9";
 //	document.getElementById("1-3").textContent = "/";
 //	document.getElementById("2-0").textContent = "4";
 //	document.getElementById("2-1").textContent = "5";
 //	document.getElementById("2-2").textContent = "6";
 //	document.getElementById("2-3").textContent = "-";
 //	document.getElementById("3-0").textContent = "1";
 //	document.getElementById("3-1").textContent = "2";
 //	document.getElementById("3-2").textContent = "3";
 //	document.getElementById("3-3").textContent = "+";
 //	document.getElementById("4-0").textContent = "C";
 //	document.getElementById("4-1").textContent = "0";
 //	document.getElementById("4-2").textContent = ".";
 //	document.getElementById("4-3").textContent = "=";

	keys = document.querySelectorAll(".key")
	for (let key of keys) {
		key.addEventListener("click", () => {
			key.classList.add("key-pressed")
		});

		key.addEventListener("mouseout", () => {
			key.classList.remove("key-pressed")
		});

		key.addEventListener("click", () => {
			let keyed = key.textContent;
			if ( keyed === "C" ) {
				reset();
				keyed= ""}
			
			if ( keyed === "." ) {
				if ( isFirstDecimalSet === true && isSecondDecimalSet === true) {
					keyed = ""};
				if ( isFirstDecimalSet === true && isFirstSet === false ) {
					keyed = ""};
				if ( isFirstSet === false) {
					isFirstDecimalSet = true}
				if ( isFirstSet === true && isSecondSet === false ) {
					isSecondDecimalSet = true}
			}

			if (["/","+","-","*"].includes(keyed)) {
				clearDisplay();
				operator = keyed;
				keyed = "";
				isFirstSet = true;
				isSecondSet = false;
			}

			if (isFirstSet === false && isSecondSet === false && first.length < 13) {
				first = first.concat(keyed);
				writeToDisplay(first)}

			if (isFirstSet === true && isSecondSet === false && second.length < 13) {
				second = second.concat(keyed);
				writeToDisplay(second)}

			if (keyed === "=" ) {
				second = second.slice(0,-1);
				isSecondSet = true;
				let result = operate(operator,first,second)
				clearDisplay();
				console.log(String(result).length);
				if (String(result).length > 8) {
					result = result.toExponential(8);
				}
				writeToDisplay(result);
				reset();
			}
			
		})
	}
}

reset();
drawCalculator();

