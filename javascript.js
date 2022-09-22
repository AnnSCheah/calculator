const display = document.querySelector(".display");

let operator,
  firstNumber = 0,
  secondNumber = 0;

display.textContent = firstNumber; // * Display defaults to first number

// * Operand and functionality buttons (clear, decimal, sign)
const numbers = document.querySelectorAll(".operand");
numbers.forEach((number) => {
  number.addEventListener("click", input);
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", addDecimal);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const signBtn = document.querySelector(".sign");
signBtn.addEventListener("click", changeSign);

// * Operator Event Listeners
const addBtn = document.querySelector("button[value='plus']");
addBtn.addEventListener("click", () => {
  operator = add;
  firstNumber = display.textContent;
  display.textContent = secondNumber;
});

const subtractBtn = document.querySelector("button[value='minus']");
subtractBtn.addEventListener("click", () => {
  operator = subtract;
  firstNumber = display.textContent;
  display.textContent = secondNumber;
});

const multiplyBtn = document.querySelector("button[value='multiply']");
multiplyBtn.addEventListener("click", () => {
  operator = multiply;
  firstNumber = display.textContent;
  display.textContent = secondNumber;
});

const divideBtn = document.querySelector("button[value='divide']");
divideBtn.addEventListener("click", () => {
  operator = divide;
  firstNumber = display.textContent;
  display.textContent = secondNumber;
});

const equalsBtn = document.querySelector("button[value='equal']");
equalsBtn.addEventListener("click", () => {
  secondNumber = display.textContent;
  display.textContent = operate(operator, firstNumber, secondNumber);
  firstNumber = display.textContent;
  secondNumber = 0;
});

// * Function that shows the operand in the display
function input() {
  if (display.textContent.length >= 9) return; // * Limits the display to 9 digits

  if (display.textContent != 0 || display.textContent.includes(".")) {
    display.textContent = display.textContent + this.value; // * Append the next input to the back instead of overwriting the current one
  } else {
    display.textContent = this.value;
  }
}

function addDecimal() {
  if (display.textContent.includes(".")) {
    return;
  }
  display.textContent = display.textContent + ".";
}

function clear() {
  firstNumber = 0;
  secondNumber = 0;
  operator = "";

  display.textContent = firstNumber;
}

function changeSign() {
  if (display.textContent == "0") return;
  display.textContent = parseInt(display.textContent) * -1;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  return operator(parseFloat(a), parseFloat(b));
}
